from django.urls import path
from . import views

urlpatterns = [
    path("courses/", views.coursesView, name="courses"),
    path('home/',views.home,name = "home"),
   # path('students/',views.students,name = "students"),
    path('students/',views.studentsView,name = "students"),
    path('add-students/',views.addStudent,name = "addStudent"),
    path('add-courses/',views.my_form,name = "addCourse"),
    path('students/edit-students/',views.editStudent,name = "editStudent"),
    path('login/',views.login,name = "login"),
]
