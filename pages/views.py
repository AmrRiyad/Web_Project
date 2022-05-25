from audioop import reverse
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect, render
from django.urls import reverse_lazy
from .models import Student, Course 
from .forms import MyForm, student
from django.http import JsonResponse
from django.contrib.auth import authenticate
from django.shortcuts import  render, redirect
from .forms import SignUpForm
from django.shortcuts import render, redirect
from django.contrib.auth import login as auth_login
from django.contrib import messages, contenttypes
from django.contrib.auth.models import User


# Create your views here.


def index(request):
    return render(request, 'index.html')

@login_required
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


def coursesView(request):
    coursesview = Course.objects.all() 
    for iter in coursesview:
        iter.num = Student.objects.filter( courses__in = [iter] ).count()
        iter.save(update_fields=['num'])
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
        fil = request.POST.get('filter')
        print(fil)
        if ( len(course) == 0 ):
            qs = Course.objects.all()
            data = []
            for iter in qs :
                item = {
                    'code' : iter.code ,
                    'name' : iter.name ,
                    'department' : iter.department ,
                    'num' : Student.objects.filter( courses__in = [iter] ).count()
                }
                data.append(item)
        else:
            data = []
            if fil == "name" :
                qs = Course.objects.filter( name__icontains=course)
                data = []
                for iter in qs :
                    item = {
                        'code' : iter.code ,
                        'name' : iter.name ,
                        'department' : iter.department ,
                        'num' : Student.objects.filter( courses__in = [iter] ).count() 
                    }
                    data.append(item) 
            elif fil == "code" :
                qs = Course.objects.filter( code__icontains=course)
                data = []
                for iter in qs :
                    item = {
                        'code' : iter.code ,
                        'name' : iter.name ,
                        'department' : iter.department ,
                        'num' : Student.objects.filter( courses__in = [iter] ).count() 
                    }
                    data.append(item) 
            elif fil == "department" :
                qs = Course.objects.filter( department__icontains=course)
                data = []
                for iter in qs :
                    item = {
                        'code' : iter.code ,
                        'name' : iter.name ,
                        'department' : iter.department ,
                        'num' : Student.objects.filter( courses__in = [iter] ).count() 
                    }
                    data.append(item) 
        return JsonResponse( { 'data' : data } )
    return JsonResponse({})


def student_search(request):
    if request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest':
        student = request.POST.get('student')
        fil = request.POST.get('filter')
        if ( len(student) == 0 ):
            qs = Student.objects.all()
            data = []
            for iter in qs :
                item = {
                    'id' : iter.id ,
                    'name' : iter.name ,
                    'department' : iter.department ,
                    'active' : iter.active
                }
                data.append(item)
        else:
            data = []
            if fil == "name" :
                qs = Student.objects.filter( name__icontains=student)
                data = []
                for iter in qs :
                    item = {
                        'id' : iter.id ,
                        'name' : iter.name ,
                        'department' : iter.department ,
                        'active' : iter.active
                    }
                    data.append(item) 
            elif fil == "id" :
                qs = Student.objects.filter( id__icontains=student)
                data = []
                for iter in qs :
                    item = {
                        'id' : iter.id ,
                        'name' : iter.name ,
                        'department' : iter.department ,
                        'active' : iter.active
                    }
                    data.append(item) 
            elif fil == "department" :
                qs = Student.objects.filter( department__icontains=student)
                data = []
                for iter in qs :
                    item = {
                        'id' : iter.id ,
                        'name' : iter.name ,
                        'department' : iter.department ,
                        'active' : iter.active
                    }
                    data.append(item) 
            elif fil == "status" :
                qs = Student.objects.filter( status__icontains=student)
                data = []
                for iter in qs :
                    item = {
                        'id' : iter.id ,
                        'name' : iter.name ,
                        'department' : iter.department ,
                        'active' : iter.active
                    }
                    data.append(item) 
        return JsonResponse( { 'data' : data } )
    return JsonResponse({})

def fetch(request):
    if request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest':
        students = [] 
        coursesArr = [] 
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
                'num' : Student.objects.filter( courses__in = [iter] ).count() ,
            }
            coursesArr.append(item)
        return JsonResponse( { 'courses' : coursesArr  , 'students' : students  })


def login(request):
    if request.method == "POST":
        if request.POST.get('ns') == 's':
            _firstName = request.POST.get('Name')
            _email = request.POST.get('Email')
            _password = request.POST.get('Password')
            user = User.objects.create_user(_firstName, _email,  _password)
            user.save()
            messages.success(request, 'Account has been created!')
            return redirect('/login')
        elif request.POST.get('nl') == 'l':
            e = request.POST["Email"]
            p = request.POST["Password"]
            user = authenticate(username = e, password = p)
#            print(username)
#            print(password)
            if user is not None:
                return redirect('/home')
            else:
                return render(request, 'login.html')
    return render(request, 'login.html')