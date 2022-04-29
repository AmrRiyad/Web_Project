window.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    const form = document.getElementById('sign-in');
    const email = document.getElementById('L-Email');
    const password = document.getElementById('L-Password');
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

    const isValidEmail = email => {
        const regex = /(.+)@(.+){2,}\.(.+){2,}/i;
        return regex.test(String(email));
    }

    const validation = () => {
        const emailValue = email.value;
        const passwordValue = password.value;
        let flag = false, flag2 = false;
        if (emailValue === '') {
            setError(email, 'Email is required');
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Please enter a valid email address');
        } else {
            setSuccess(email);
            flag = true;
        }

        if (passwordValue === '') {
            setError(password, 'Password is required');
        } else if (passwordValue.length < 6) {
            setError(password, 'Password must be at least 6 character.')
        } else {
            setSuccess(password);
            flag2 = true;
        }
        return (flag && flag2);

    };
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
        const form = document.getElementById('sign-up');
        const name = document.getElementById('Name');
        const email = document.getElementById('Email');
        const password = document.getElementById('Password');
        const confrimPassword = document.getElementById('Confrim-Password');
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

        const isValidEmail = email => {
            const regex = /(.+)@(.+){2,}\.(.+){2,}/i;
            return regex.test(String(email));
        }

        const validation = () => {
            const nameValue = name.value;
            const emailValue = email.value;
            const passwordValue = password.value;
            const confrimPasswordValue = confrimPassword.value;
            let flag = false, flag2 = false, flag3 = false, flag4 = false;

            if (emailValue === '') {
                setError(email, 'Email is required');
            } else if (!isValidEmail(emailValue)) {
                setError(email, 'Please enter a valid email address');
            } else {
                setSuccess(email);
                flag = true;
            }

            if (nameValue === '') {
                setError(name, 'Name is required');
            } else {
                setSuccess(name);
                flag2 = true;
            }

            if (passwordValue === '') {
                setError(password, 'Password is required');
            } else if (passwordValue.length < 6) {
                setError(password, 'Password must be at least 6 character.')
            } else {
                setSuccess(password);
                flag3 = true;
            }

            if (confrimPasswordValue === '') {
                setError(confrimPassword, 'Confrim Password is required');
            } else if (confrimPasswordValue !== passwordValue) {
                setError(confrimPassword, "Passwords doesn't match.")
            } else {
                setSuccess(confrimPassword);
                flag3 = true;
            }
            return (flag && flag2 && flag3 && flag4);

        };
    });
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
        const form = document.getElementById('sign-in');
        const email = document.getElementById('L-Email');
        const password = document.getElementById('L-Password');
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

        const isValidEmail = email => {
            const regex = /(.+)@(.+){2,}\.(.+){2,}/i;
            return regex.test(String(email));
        }

        const validation = () => {
            const emailValue = email.value;
            const passwordValue = password.value;
            let flag = false, flag2 = false;
            if (emailValue === '') {
                setError(email, 'Email is required');
            } else if (!isValidEmail(emailValue)) {
                setError(email, 'Please enter a valid email address');
            } else {
                setSuccess(email);
                flag = true;
            }

            if (passwordValue === '') {
                setError(password, 'Password is required');
            } else if (passwordValue.length < 6) {
                setError(password, 'Password must be at least 6 character.')
            } else {
                setSuccess(password);
                flag2 = true;
            }
            return (flag && flag2);

        };
    });

})