from django import forms
from .models import CourseBase, StudentBase


class PlaceholderMixin:
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        field_names = [field_name for field_name, _ in self.fields.items()]
        for field_name in field_names:
            field = self.fields.get(field_name)
            field.widget.attrs.update({'placeholder': "Enter " + field.label})


class MyForm(PlaceholderMixin, forms.ModelForm):
    class Meta:
        model = CourseBase
        fields = ["courseName", "courseCode", "course_days",
                  "courseDepartment", "courseHours", "courseHall"]
        labels = {'courseName': "Name", "courseCode": "Code", }

       
class student(PlaceholderMixin, forms.ModelForm):
    class Meta:
        model = CourseBase
        fields = ["courseName", "courseCode", "course_days",
                  "courseDepartment", "courseHours", "courseHall"]
        labels = {'courseName': "Name", "courseCode": "Code", }
