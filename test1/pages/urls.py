from django.urls import path
from . import views

urlpatterns = [
    path('',views.home,name = "home"),
    path('students/',views.students,name = "students"),
    path('courses/',views.courses,name = "courses"),
    path('add-students/',views.addStudent,name = "addStudent"),
    path('add-courses/',views.addCourses,name = "addCourse"),
    path('edit-students/',views.editStudent,name = "editStudent"),
    path('login/',views.login,name = "login"),
]
