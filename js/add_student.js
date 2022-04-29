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
        const dayValue = document.getElementById('Day').value ;
        const monthValue = document.getElementById('Month').value ;
        const yearValue = document.getElementById('Year').value ;
        const universityValue = University.value ;
        const departamentValue = Departament.value;
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
        
        if ( dayValue === '' ){
            setError(Birthday, 'Day is required');
            flag = false;
        }else if ( monthValue === '' ){
            setError(Birthday, 'Month is required');
            flag = false;
        }else if ( yearValue === '' ){
            setError(Birthday, 'Year is required');
            flag = false;
        }else{
            setSuccess(Birthday);
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




        return flag;

    };


})