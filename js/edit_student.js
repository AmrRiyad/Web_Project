var index = localStorage.getItem('index')
var isDeleted = 0;
function removeStudent(){
    var studentArray = JSON.parse(localStorage.getItem("student"))
    studentArray.splice(index, 1)
    localStorage.setItem("student", JSON.stringify(studentArray));
    isDeleted = 1;
}
function alertstudent(){
    var proceed = confirm("Are you sure you want delete this student ?");
    if (proceed) {
         removeStudent() ;
         location.href = "students.html" ;
    }
}
function initialize(){
    isDeleted = 0;
    var studentArray = JSON.parse(localStorage.getItem("student"))
    const Name = document.getElementById('Name');
    Name.value = studentArray[index].name ;
    const ID = document.getElementById('ID');
    ID.value = studentArray[index].id ;
    const Day = document.getElementById('Day');
    Day.value = studentArray[index].birthday.Day ;
    const Month = document.getElementById('Month');
    Month.value = studentArray[index].birthday.Month ;
    const Year = document.getElementById('Year');
    Year.value = studentArray[index].birthday.Year ;
    const University = document.getElementById('University');
    University.value = studentArray[index].university ;
    const Departament = document.getElementById('Departament');
    Departament.value = studentArray[index].department ;
    const course_1 = document.getElementById('Course-1');
    course_1.value = studentArray[index].course_1 ;
    const course_2 = document.getElementById('Course-2');
    course_2.value = studentArray[index].course_2 ;
    const course_3 = document.getElementById('Course-3');
    course_3.value = studentArray[index].course_3 ;
    const radio_1 = document.getElementById('radio-1');
    const radio_2 = document.getElementById('radio-2');
    if(studentArray[index].Gender==='Male'){
        radio_1.checked = true ;
    }else{
        radio_2.checked = true ;
    }
    const radio_3 = document.getElementById('radio-3');
    const radio_4 = document.getElementById('radio-4');
    if(studentArray[index].status==='Active'){
        radio_3.checked = true ;
    }else{
        radio_4.checked = true ;
    }
}
window.addEventListener('DOMContentLoaded', () => {
    initialize() ;
    const form = document.getElementsByClassName('modal-content')[0];
    const Name = document.getElementById('Name');
    const ID = document.getElementById('ID');
    const Day = document.getElementById('Day');
    const Month = document.getElementById('Month');
    const Year = document.getElementById('Year');
    const University = document.getElementById('University');
    const Departament = document.getElementById('Departament');
    const course_1 = document.getElementById('Course-1');
    const course_2 = document.getElementById('Course-2');
    const course_3 = document.getElementById('Course-3');
    const radio_1 = document.getElementById('radio-1');
    const radio_2 = document.getElementById('radio-2');
    const radio_3 = document.getElementById('radio-3');
    const radio_4 = document.getElementById('radio-4');
    const radios = document.getElementsByClassName('select-field');
    form.addEventListener('submit', e => {
        e.preventDefault();
        if (validation() === true && !isDeleted) {
            var current_student = {
                'name': Name.value,
                'id': ID.value,
                'birthday': {
                    'Day': Day.value,
                    'Month': Month.value,
                    'Year': Year.value,
                },
                'course_1' : course_1.value ,
                'course_2' : course_2.value ,
                'course_3' : course_3.value ,
                'Gender' : ( radio_1 ? "Male" : "Female" ) ,
                'status' : ( radio_3 ? "Active" : "Inactive") ,
                'university': University.value,
                'department': Departament.value
            }
            updateStudent(current_student)
            location.href = 'students.html';
        }
    });


    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success')
    }

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

    const validation = () => {

        let flag = true;
        if (Name.value === '') {
            setError(Name, 'Student Name is required');
            flag = false;
        } else {
            setSuccess(Name);
        }

        if (ID.value === '') {
            setError(ID, 'Student ID is required');
            flag = false;
        } else {
            setSuccess(ID);
        }

        if (Day.value === '') {
            setError(Day, 'Day is required');
            flag = false;
        } else if (Month.value === '') {
            setError(Month, 'Month is required');
            flag = false;
        } else if (Year.value === '') {
            setError(Year, 'Year is required');
            flag = false;
        } else {
            setSuccess(Day);
        }

        if (University.value === '') {
            setError(University, 'University is required');
            flag = false;
        } else {
            setSuccess(University);
        }

        if (Departament.value === '') {
            setError(Departament, 'Department is required');
            flag = false;
        } else {
            setSuccess(Departament);
        }

        if (course_1.value === '') {
            setError(course_1, 'Course 1 is required');
            flag = false;
        } else if (course_2.value === '') {
            setError(course_2, 'Course 2 is required');
            flag = false;
        } else if (course_3.value === '') {
            setError(course_3, 'Course 3 is required');
            flag = false;
        } else {
            setSuccess(course_1);
        }

        if (radio_1.checked === false && radio_2.checked === false) {
            setError(radios[0], 'Gender is required');
            flag = false;
        } else {
            setSuccess(radios[0]);
        }

        if (radio_3.checked === false && radio_4.checked === false) {
            setError(radios[1], 'Stauts is required');
            flag = false;
        } else {
            setSuccess(radios[1]);
        }


        return flag;

    };


})

function updateStudent(student_element){
    var studentArray = JSON.parse(localStorage.getItem("student"))
    studentArray[index] = student_element ;
    localStorage.setItem("student", JSON.stringify(studentArray));
}
