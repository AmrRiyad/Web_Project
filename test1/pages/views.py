from django.shortcuts import redirect, render, HttpResponse
from .models import StudentBase, CourseBase
from .forms import MyForm
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
def my_form(request):
  if request.method == "POST":
    form = MyForm(request.POST)
    if form.is_valid():
      form.save()
  else:
      form = MyForm()
  return render(request, 'add_course.html', {'form': form})