from django.shortcuts import render,HttpResponse

# Create your views here.
def home(request):
    return render(request,'home.html')
def students(request):
    return render(request,'students.html')
def courses(request):
    return render(request,'courses.html')
def addCourses(request):
    return render(request,'add_course.html')
def addStudent(request):
    return render(request,'add_student.html')
def editStudent(request):
    return render(request,'edit_student.html')
def login(request):
    return render(request,'login.html')