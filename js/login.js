window.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    const form = document.getElementById('sign-in');
    const email = document.getElementById('L-Email');
    const password = document.getElementById('L-Password');
    form.addEventListener('submit', e => {
        e.preventDefault();

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
            let flag = true;
            if (emailValue === '') {
                setError(email, 'Email is required');
                flag = false;
            } else if (!isValidEmail(emailValue)) {
                setError(email, 'Please enter a valid email address');
                flag = false;
            } else {
                setSuccess(email);
            }

            if (passwordValue === '') {
                setError(password, 'Password is required');
                flag = false;
            } else if (passwordValue.length < 6) {
                setError(password, 'Password must be at least 6 character.');
                flag = false;
            } else {
                setSuccess(password);
            }
            if (flag === true)
                location.href = 'home.html';

        };
        validation();
    });


    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
        const form = document.getElementById('sign-up');
        const name = document.getElementById('Name');
        const email = document.getElementById('Email');
        const password = document.getElementById('Password');
        const confrimPassword = document.getElementById('Confrim-Password');
        form.addEventListener('submit', e => {
            e.preventDefault();

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

            const validation1 = () => {
                const nameValue = name.value;
                const emailValue = email.value;
                const passwordValue = password.value;
                const confrimPasswordValue = confrimPassword.value;
                let flag = true;

                if (nameValue === '') {
                    setError(name, 'Name is required');
                    flag = false;
                } else {
                    setSuccess(name);
                }

                if (emailValue === '') {
                    setError(email, 'Email is required');
                    flag = false;
                } else if (!isValidEmail(emailValue)) {
                    setError(email, 'Please enter a valid email address');
                    flag = false;
                } else {
                    setSuccess(email);
                }

                if (passwordValue === '') {
                    setError(password, 'Password is required');
                    flag = false;
                } else if (passwordValue.length < 6) {
                    setError(password, 'Password must be at least 6 character.');
                    flag = false;
                } else {
                    setSuccess(password);
                }

                if (confrimPasswordValue === '') {
                    setError(confrimPassword, 'Confrim Password is required');
                    flag = false;
                } else if (confrimPasswordValue !== passwordValue) {
                    setError(confrimPassword, "Passwords doesn't match.");
                    flag = false;
                } else {
                    setSuccess(confrimPassword);
                }
                if (flag === true)
                    location.href = 'home.html';
            };

            validation1();


        }

        );



    });
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
        const form = document.getElementById('sign-in');
        const email = document.getElementById('L-Email');
        const password = document.getElementById('L-Password');
        form.addEventListener('submit', e => {
            e.preventDefault();

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
                let flag = true;
                if (emailValue === '') {
                    setError(email, 'Email is required');
                    flag = false;
                } else if (!isValidEmail(emailValue)) {
                    setError(email, 'Please enter a valid email address');
                    flag = false;
                } else {
                    setSuccess(email);
                }

                if (passwordValue === '') {
                    setError(password, 'Password is required');
                    flag = false;
                } else if (passwordValue.length < 6) {
                    setError(password, 'Password must be at least 6 character.');
                    flag = false;
                } else {
                    setSuccess(password);
                }
                if (flag === true)
                    location.href = 'home.html';

            };
            validation();
        });
    }

    );

})