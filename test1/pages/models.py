from django.contrib.postgres.fields import ArrayField
from django.db import models

# Create your models here.
class StudentBase(models.Model):
    studentName = models.CharField(max_length=55)
    studentId   = models.CharField(max_length=55,primary_key = True)
    studentDay = models.IntegerField()
    studentMonth = models.IntegerField()
    studentYear = models.IntegerField()
    studentUniversity = models.CharField(max_length=55)
    studentDepartment = models.CharField(max_length=55)
    studentCourse1 = models.CharField(max_length=55)
    studentCourse2 = models.CharField(max_length=55)
    studentCourse3 = models.CharField(max_length=55)
    studentActive = models.BooleanField()
    studentStatus = models.BooleanField()
class CourseBase(models.Model):
    courseName  = models.CharField(max_length=55)
    courseCode  = models.CharField(max_length=55,primary_key = True)
    courseDays  = models.IntegerField()
    courseDepartment = models.CharField(max_length=55)
    courseHours = models.IntegerField()
    courseHall  = models.CharField(max_length=55)


    
    