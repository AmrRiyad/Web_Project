from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name="index"),
    path('courses/' , views.coursesView , name="courses"),
    path('courses/search/', views.course_search, name="scourses"),
    path('students/search/', views.student_search, name="sstudents"),
    path('home/',views.home,name = "home"),
    path('home/get/',views.fetch,name = "data"),
    path('students/',views.studentsView,name = "students"),
    path('add-students/',views.addStudent,name = "addStudent"),
    path('add-courses/',views.addCourses,name = "addCourse"),
    path('students/',views.studentsView),
    path('students/edit-students/<int:id>',views.displaystudent),
    path('login/',views.login, name = "login"),
]
