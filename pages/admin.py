from django.contrib import admin
from .models import Student,Course
from django import forms
from django.core.exceptions import ValidationError

# Register your models here.

class StudentForm(forms.ModelForm):
    
    def clean(self):
        categories = self.cleaned_data.get('courses')
        print(categories==None)
        if categories and categories.count() != 3:
            raise ValidationError('You must choose exactly three courses.')

        return self.cleaned_data
    class Meta:
        model = Student
        fields = ["name", "id", "birthday",
                  "university", "department", "courses", "active", "status"]
        

class StudentAdmin(admin.ModelAdmin):
    form = StudentForm
admin.site.register(Student, StudentAdmin)

admin.site.register(Course)

