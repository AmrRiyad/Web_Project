from tkinter import Widget
from django import forms
from .models import Course, Student
from django.forms.widgets import DateInput, CheckboxSelectMultiple
from django.core.exceptions import ValidationError

from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class NewUserForm(UserCreationForm):
	email = forms.EmailField(required=True)

	class Meta:
		model = User
		fields = ("username", "email", "password1", "password2")

	def save(self, commit=True):
		user = super(NewUserForm, self).save(commit=False)
		user.email = self.cleaned_data['email']
		if commit:
			user.save()
		return user

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
        courses = self.cleaned_data.get('courses')
        if courses and courses.count() != 3:
            raise ValidationError('You must choose exactly three courses.')
    
        return self.cleaned_data

    class Meta:
        model = Student
        fields = ["name", "id", "birthday",
                  "university", "department", "courses", "active", "status"]
        widgets = {
            'birthday' : DateInput(attrs={'type': 'date'}),
            'courses' : CheckboxSelectMultiple
        }
