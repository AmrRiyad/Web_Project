from django.contrib.postgres.fields import ArrayField
from django.db import models
class Course(models.Model):
    name  = models.CharField(max_length=55, unique=True)
    code  = models.CharField(max_length=55,primary_key = True)
    days  = models.IntegerField()
    department_choices = (
        ('General','General'),
        ('AI', 'AI'),
        ('CS', 'CS'),
        ('IS', 'IS'),
        ('IT', 'IT'),
        ('DS', 'DS')
    )
    department = models.CharField(max_length=10, choices=department_choices , default= 'General')
    hours = models.IntegerField()
    hall  = models.CharField(max_length=55)
    def __str__(self):
        return self.name

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=55)
    id = models.CharField(max_length=55,primary_key = True)
    birthday = models.DateField()
    university = models.CharField(max_length=55)
    department_choices = (
        ('General', 'General'),
        ('AI', 'AI'),
        ('CS', 'CS'),
        ('IS', 'IS'),
        ('IT', 'IT'),
        ('DS', 'DS')
    )
    department = models.CharField(max_length=10, choices=department_choices)
    courses = models.ManyToManyField(Course)
    active_choices = (
        ('Active', 'Active'),
        ('Inactive', 'Inactive')
    )
    active = models.CharField(max_length=10, choices=active_choices)
    status_choices = (
        ('Male', 'Male'),
        ('Female', 'Female')
    )
    status = models.CharField(max_length=10, choices=status_choices)
    class Meta:
        db_table = "studentdetails"
    