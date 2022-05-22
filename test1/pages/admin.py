from django.contrib import admin
from .models import StudentBase,CourseBase

# Register your models here.
admin.site.register(StudentBase)
admin.site.register(CourseBase)

