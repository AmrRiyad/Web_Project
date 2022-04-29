window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementsByClassName('modal-content')[0];
    const Name = document.getElementById('Name');
    const ID = document.getElementById('ID');
    const Birthday = document.getElementById('Birthday');
    const University = document.getElementById('University');
    const Departament = document.getElementById('Departament');
    form.addEventListener('submit', e => {
        e.preventDefault();

        if (validation() === true)
            location.href = 'home.html';
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
        const idValue = ID.value;
        const Day = document.getElementById('Day') ;
        const Month = document.getElementById('Month') ;
        const Year = document.getElementById('Year') ;
        const universityValue = University.value ;
        const departamentValue = Departament.value;
        const course_1 = document.getElementById('Course-1') ;
        const course_2 = document.getElementById('Course-2') ;
        const course_3 = document.getElementById('Course-3') ;
        const radio_1 = document.getElementById('radio-1') ;
        const radio_2 = document.getElementById('radio-2') ;
        const radio_3 = document.getElementById('radio-3') ;
        const radio_4 = document.getElementById('radio-4') ;
        const radios = document.getElementsByClassName('select-field') ;
        let flag = true;
        if (nameValue === '') {
            setError(Name, 'Student Name is required');
            flag = false;
        } else {
            setSuccess(Name);
        }

        if (idValue === '') {
            setError(ID, 'Student ID is required');
            flag = false;
        } else {
            setSuccess(ID);
        }
        
        if ( Day.value === '' ){
            setError(Day, 'Day is required');
            flag = false;
        }else if ( Month.value === '' ){
            setError(Month, 'Month is required');
            flag = false;
        }else if ( Year.value === '' ){
            setError(Year, 'Year is required');
            flag = false;
        }else{
            setSuccess(Day);
        }

        if (universityValue === '') {
            setError(University, 'University is required');
            flag = false;
        } else {
            setSuccess(University);
        }

        if (departamentValue === '') {
            setError(Departament, 'Department is required');
            flag = false;
        } else {
            setSuccess(Departament);
        }

        if ( course_1.value === '' ){
            setError(course_1, 'Course 1 is required');
            flag = false;
        }else if ( course_2.value === '' ){
            setError(course_2, 'Course 2 is required');
            flag = false;
        }else if ( course_3.value === '' ){
            setError(course_3, 'Course 3 is required');
            flag = false;
        }else{
            setSuccess(course_1);
        }

        if ( radio_1.checked === false && radio_2.checked === false ){
            setError(radios[0], 'Gender is required');
            flag = false;
        }else{
            setSuccess(radios[0]);
        }

        if ( radio_3.checked === false && radio_4.checked === false ){
            setError(radios[1], 'Stauts is required');
            flag = false;
        }else{
            setSuccess(radios[1]);
        }


        return flag;

    };


})