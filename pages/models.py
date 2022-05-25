from django.contrib.postgres.fields import ArrayField
from django.db import models
class Course(models.Model):
    name  = models.CharField(max_length=55, unique=True)
    code  = models.CharField(max_length=55,primary_key = True)
    days  = models.IntegerField()
    department_choices = (
        ('General','0'),
        ('AI','1'),
        ('CS','2'),
        ('IS','3'),
        ('IT','4'),
        ('DS','5')
    )
    department = models.CharField(max_length=10, choices=department_choices , default= '0')
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
        ('General','0'),
        ('AI','1'),
        ('CS','2'),
        ('IS','3'),
        ('IT','4'),
        ('DS','5')
    )
    department = models.CharField(max_length=10, choices=department_choices , default= '0')
    courses = models.ManyToManyField(Course)
    active_choices = (
        ('Active','1'),
        ('Inactive','0')
    )
    active = models.CharField(max_length=10, choices=active_choices , default='1')
    status_choices = (
        ('Male','1'),
        ('Female','0')
    )
    status = models.CharField(max_length=10, choices=status_choices , default= '1')
    