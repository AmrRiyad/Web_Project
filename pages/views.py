from unicodedata import name
from django.shortcuts import redirect, render, HttpResponse
from .models import Student, Course
from .forms import MyForm, student
from django.views.generic import ListView
from django.http import JsonResponse
import json



# Create your views here.


def index(request):
    return render(request, 'index.html')

def home(request):
    return render(request, 'home.html')


def students(request):
    return render(request, 'students.html')


def courses(request):
    return render(request, 'courses.html')


def addCourses(request):
    form = MyForm()
    if request.method == 'POST':
        form = MyForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('courses')
    return render(request, 'add_course.html', {'form':form})


def addStudent(request):
    form = student()
    if request.method == 'POST':
        form = student(request.POST)
        if form.is_valid():
            form.save()
            return redirect('students')
    return render(request, 'add_student.html', {'form':form})


def editStudent(request):
    return render(request, 'edit_student.html')


def login(request):
    return render(request, 'login.html')


def coursesView(request):
    coursesview = Course.objects.all() 
    return render(
        request=request,
        template_name="courses.html",
        context={
            'coursesview': coursesview})

def studentsView(request):
    studentsview = Student.objects.all()
    return render(
        request=request,
        template_name="students.html",
        context={
            'studentsview': studentsview})

def course_search(request):
    if request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest':
        course = request.POST.get('course')
        if ( len(course) == 0 ):
            qs = Course.objects.all()
            data = []
            for iter in qs :
                item = {
                    'code' : iter.code ,
                    'name' : iter.name ,
                    'department' : iter.department ,
                    'num' : 0 
                }
                data.append(item)
        else:
            qs = Course.objects.filter( name__icontains=course)
            if len(qs) > 0 and len(course) > 0:
                data = []
                for iter in qs :
                    item = {
                        'code' : iter.code ,
                        'name' : iter.name ,
                        'department' : iter.department ,
                        'num' : 0 
                    }
                    data.append(item) 
            else :
                data = []
        return JsonResponse( { 'data' : data } )
    return JsonResponse({})


def student_search(request):
    if request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest':
        student = request.POST.get('student')
        if ( len(student) == 0 ):
            qs = Student.objects.all()
            data = []
            for iter in qs :
                item = {
                    'id' : iter.id ,
                    'name' : iter.name ,
                    'department' : iter.department ,
                    'active' : iter.status
                }
                data.append(item)
        else:
            qs = Student.objects.filter( name__icontains=student)
            if len(qs) > 0 and len(student) > 0:
                data = []
                for iter in qs :
                    item = {
                        'id' : iter.id ,
                        'name' : iter.name ,
                        'department' : iter.department ,
                        'active' : iter.active
                    }
                    data.append(item) 
            else :
                data = []
        return JsonResponse( { 'data' : data } )
    return JsonResponse({})

def fetch(request):
    if request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest':
        students = [] 
        courses = [] 
        qs = Student.objects.all() 
        for iter in qs :
            item = {
                'department' : iter.department ,
                'gender' : iter.status ,
            }
            students.append(item)
        qs = Course.objects.all() 
        for iter in qs :
            item = {
                'name' : iter.name ,
                'num' : 0 ,
            }
            courses.append(item)
        return JsonResponse( { 'courses' : courses  , 'students' : students  })
