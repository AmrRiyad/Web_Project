from django import forms
from .models import CourseBase, StudentBase
 
class MyForm(forms.ModelForm):
  message = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Enter Course Name'}),)
  class Meta:
    model = CourseBase
    fields = ["courseName", "courseCode", "courseDays", "courseDepartment", "courseHours", "courseHall", "message"]
    labels = {'courseName': "Name", "courseCode": "Code",}