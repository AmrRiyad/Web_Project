window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementsByClassName('modal-content')[0];
    const Name = document.getElementById('Name');
    const Code = document.getElementById('Code');
    const Hours = document.getElementById('Hours');
    const Departament = document.getElementById('Departament');
    const Hall = document.getElementById('Hall');
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
        const codeValue = Code.value;
        const hoursValue = Hours.value;
        const departamentValue = Departament.value;
        const hallValue = Hall.value;
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

        if (departamentValue === '') {
            setError(Departament, 'Department is required');
            flag = false;
        } else {
            setSuccess(Departament);
        }
        if (hallValue === '') {
            setError(Hall, 'Course Name is required');
            flag = false;
        } else {
            setSuccess(Hall);
        }


        return flag;

    };


})