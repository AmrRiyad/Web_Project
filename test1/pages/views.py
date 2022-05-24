from django.shortcuts import redirect, render, HttpResponse
from .models import Student, Course
from .forms import MyForm, student
# Create your views here.


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
