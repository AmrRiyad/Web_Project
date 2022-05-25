from tkinter import Widget
from django import forms
from .models import Course, Student
from django.forms.widgets import DateInput, CheckboxSelectMultiple
from django.core.exceptions import ValidationError

from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class SignUpForm(UserCreationForm):
    email = forms.CharField(max_length=255, required=True, widget=forms.EmailInput)

    class Meta:
        model = User
        fields = {'username', 'email', 'password1', 'password2'}

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
    def clean(self):
        cleaned_data = super().clean()
        courses = cleaned_data.get("courses")
        if courses.count() != 3:
            msg = "You have to choose exactly 3 courses."
            self.add_error('courses', msg)

    class Meta:
        model = Student
        fields = ["name", "id", "birthday",
                  "university", "department", "courses", "active", "status"]
        widgets = {
            'birthday' : DateInput(attrs={'type': 'date'}),
            # 'courses' : forms.SelectMultiple
        }


