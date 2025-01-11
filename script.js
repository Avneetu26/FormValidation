const form = document.getElementById("form");
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById("confirm-password");

const submit = document.getElementById('submit');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
})

const setError = (ele, message) => {
    const inputControl = ele.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (ele) => {
    const inputControl = ele.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';

    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    
}

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

const validateInputs = () => {
    const userNameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(userNameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if(!isValidEmail(emailValue)) {
        setError(email, 'Provide valid email value');
    }else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if(passwordValue.length < 8) {
        setError(password, 'Password should be atlease 8 length');
    }  else {
        setSuccess(password);
    }

    if(confirmPasswordValue === '') {
        setError(confirmPassword, 'Please confirm your password');
    } else if(confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, 'Password doesnot match');
    }  else {
        setSuccess(confirmPassword);
    }
}