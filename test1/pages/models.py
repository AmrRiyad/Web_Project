from django.contrib.postgres.fields import ArrayField
from django.db import models
class Course(models.Model):
    name  = models.CharField(max_length=55, unique=True)
    code  = models.CharField(max_length=55,primary_key = True)
    days  = models.IntegerField()
    department = models.CharField(max_length=55)
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
    department = models.CharField(max_length=55)
    courses = models.ManyToManyField(Course)
    active_choices = (
        ('0', 'Inactive'),
        ('1', 'Active')
    )
    active = models.CharField(max_length=1, choices=active_choices)
    status = models.BooleanField(default=False)
    



    
    