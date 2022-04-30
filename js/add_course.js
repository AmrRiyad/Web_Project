window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementsByClassName('modal-content')[0];
    const Name = document.getElementById('Name');
    const Code = document.getElementById('Code');
    const Hours = document.getElementById('Hours');
    const Departament = document.getElementById('Departament');
    const Days = document.getElementsByClassName('weekDays-selector')[0];
    const Hall = document.getElementById('Hall');
    form.addEventListener('submit', e => {
        e.preventDefault();

        if (validation() === true) {
            var current_course = {
                'Course_name': Name.value,
                'ID': Code.value,
                'hours': Hours.value,
                'department': Departament.value,
                'days': Days.value,
                'hall': Hall.value,
                'Number_of_students': 0,
            }
            var coursesArray = JSON.parse(localStorage.getItem("course"))
            if (coursesArray == null) {
                coursesArray = []
            }
            coursesArray.push(current_course)
            localStorage.setItem("course", JSON.stringify(coursesArray));
            location.href = 'home.html';
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
        const nameValue = Name.value;
        const codeValue = Code.value;
        const hoursValue = Hours.value;
        const departamentValue = Departament.value;
        const hallValue = Hall.value;
        const weekDays = Days.getElementsByTagName('input');
        let flag = true;
        if (nameValue === '') {
            setError(Name, 'Course Name is required');
            flag = false;
        } else {
            setSuccess(Name);
        }

        if (codeValue === '') {
            setError(Code, 'Course Code is required');
            flag = false;
        } else {
            setSuccess(Code);
        }

        if (hoursValue === '') {
            setError(Hours, 'Course Hours is required');
            flag = false;
        } else {
            setSuccess(Hours);
        }
        let daysValue = false;
        for (var day of weekDays) {
            if (day.checked === true) {
                daysValue = true;
                break;
            }
        }

        if (daysValue === false) {
            setError(Days, 'Week Days is required');
            flag = false;
        } else {
            setSuccess(Days);
        }


        if (departamentValue === '') {
            setError(Departament, 'Department is required');
            flag = false;
        } else {
            setSuccess(Departament);
        }



        if (hallValue === '') {
            setError(Hall, 'Hall Number is required');
            flag = false;
        } else {
            setSuccess(Hall);
        }


        return flag;

    };

})