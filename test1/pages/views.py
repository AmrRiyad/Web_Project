from django.shortcuts import render, HttpResponse
from .models import StudentBase, CourseBase

# Create your views here.


def home(request):
    return render(request, 'home.html')


def students(request):
    return render(request, 'students.html')


def courses(request):
    return render(request, 'courses.html')


def addCourses(request):
    return render(request, 'add_course.html')


def addStudent(request):
    return render(request, 'add_student.html')


def editStudent(request):
    return render(request, 'edit_student.html')


def login(request):
    return render(request, 'login.html')


def coursesView(request):
    coursesview = CourseBase.objects.all()
    return render(
        request=request,
        template_name="courses.html",
        context={
            'coursesview': coursesview})

def studentsView(request):
    studentsview = StudentBase.objects.all()
    return render(
        request=request,
        template_name="students.html",
        context={
            'studentsview': studentsview})
