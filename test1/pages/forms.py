from tkinter import Widget
from django import forms
from .models import Course, Student
from django.forms.widgets import DateInput

class PlaceholderMixin:
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        field_names = [field_name for field_name, _ in self.fields.items()]
        for field_name in field_names:
            field = self.fields.get(field_name)
            field.widget.attrs.update({'placeholder': "Enter " + field.label})


class MyForm(PlaceholderMixin, forms.ModelForm):
    class Meta:
        model = Course
        fields = ["name", "code", "days",
                  "department", "hours", "hall"]

       
class student(PlaceholderMixin, forms.ModelForm):
    class Meta:
        model = Student
        fields = ["name", "id", "birthday",
                  "university", "department", "course1", "course2", "course3", "active", "status"]
        widgets = {
            'birthday' : DateInput(attrs={'type': 'date'})
        }
