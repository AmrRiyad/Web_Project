from django.contrib.postgres.fields import ArrayField
from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=55)
    id = models.CharField(max_length=55,primary_key = True)
    birthday = models.DateField()
    university = models.CharField(max_length=55)
    department = models.CharField(max_length=55)
    course1 = models.CharField(max_length=55)
    course2 = models.CharField(max_length=55)
    course3 = models.CharField(max_length=55)
    active = models.BooleanField()
    status = models.BooleanField()
    
class Course(models.Model):
    name  = models.CharField(max_length=55, unique=True)
    code  = models.CharField(max_length=55,primary_key = True)
    days  = models.IntegerField()
    department = models.CharField(max_length=55)
    hours = models.IntegerField()
    hall  = models.CharField(max_length=55)


    
    