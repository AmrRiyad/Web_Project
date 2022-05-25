import imp
import re
from django.http import HttpResponse, HttpResponseRedirect
from unicodedata import name
from unittest import result
from django.shortcuts import redirect, render, HttpResponse
from .models import Student, Course
from .forms import MyForm, student
from django.views.generic import ListView
from django.http import JsonResponse
import json
from django.contrib import messages
from django.urls import reverse


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
    print('ana lesa')
    if request.method == 'POST':
        print('haha')
        form = student(request.POST)
        if form.is_valid():
            print('vaild')
            form.save()
            return redirect('students')
    print('rabena yostor')
    return render(request, 'add_student.html', {'form':form})



    


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
    return render(request, "students.html", {"Student" : studentsview})
    
def displaystudent(request, id):
    updatestudent = Student.objects.get(id = id)
    form = student(request.POST or None, instance= updatestudent)
    if request.method == 'POST':
        if form.is_valid(): 
            if 'deletebtn' in request.POST:
                updatestudent.delete()
                return redirect('students')
            form.save()
            messages.success(request, "Student Updated Successfully !")
            return render(request, "edit_student.html", {'form' : form, 'id' : id})
    return render(request, "edit_student.html", {'form' : form, 'id' : id})

  
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
