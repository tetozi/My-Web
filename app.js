// Input control
const userName = document.getElementById('userName');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');
// Form
const form = document.getElementById('registerForm');


form.addEventListener('submit', function(event) {
    // Prevent default behaviour
    event.preventDefault();
    if (
        validateUserName() &&
        validatePassword() &&
        validateConfirmPassword() &&
        validateEmail()
    ) {

        document.getElementById('loading').style.display = 'block';
        setTimeout(function() {
            window.location.href = "task.html"

        }, 2000)

    }

});


// Validators
function validateUserName() {
    // check if is empty
    if (checkIfEmpty(userName)) return;
    // is if it has only letters
    if (!checkIfOnlyLetters(userName)) return;
    return true;
}


function validatePassword() {
    // Empty check
    if (checkIfEmpty(password)) return;
    // Must of in certain length
    if (!meetLength(password, 4, 20)) return;
    // check password against our character set
    return true;
}

function validateConfirmPassword() {
    if (password.className !== 'valid') {
        setInvalid(confirmPassword, 'Password must be valid');
        return;
    }
    // If they match
    if (password.value !== confirmPassword.value) {
        setInvalid(confirmPassword, 'Passwords must match');
        return;
    } else {
        setValid(confirmPassword);
    }
    return true;
}

function validateEmail() {
    if (checkIfEmpty(email)) return;
    if (!containsCharacters(email, 5)) return;
    return true;
}
// Utility functions
function checkIfEmpty(control) {
    if (isEmpty(control.value.trim())) {
        // set control invalid
        setInvalid(control, `${control.name} must not be empty`);
        return true;
    } else {
        // set control valid
        setValid(control);
        return false;
    }
}

function isEmpty(value) {
    if (value === '') return true;
    return false;
}

function setInvalid(control, error) {
    control.className = 'invalid';
    control.nextElementSibling.className = 'alert alert-danger m-2';
    control.nextElementSibling.innerHTML = error;

    //  control.nextElementSibling.style.color = red;
}

function setValid(control) {
    control.className = 'valid';
    control.nextElementSibling.className = 'alert alert-success m-2'
    control.nextElementSibling.innerHTML = 'valid';

}

function checkIfOnlyLetters(control) {
    if (/^[a-zA-Z ]+$/.test(control.value)) {
        setValid(control);
        return true;
    } else {
        setInvalid(control, `${control.name} must contain only letters`);
        return false;
    }
}

function meetLength(control, minLength, maxLength) {
    if (control.value.length >= minLength && control.value.length < maxLength) {
        setValid(control);
        return true;
    } else if (control.value.length < minLength) {
        setInvalid(
            control,
            `${control.name} must be at least ${minLength} characters long`
        );
        return false;
    } else {
        setInvalid(
            control,
            `${control.name} must be shorter than ${maxLength} characters`
        );
        return false;
    }
}

function containsCharacters(control, code) {
    let regEx;
    switch (code) {
        case 1:
            // letters
            regEx = /(?=.*[a-zA-Z])/;
            return matchWithRegEx(regEx, control, 'Must contain at least one letter');
        case 2:
            // letter and numbers
            regEx = /(?=.*\d)(?=.*[a-zA-Z])/;
            return matchWithRegEx(
                regEx,
                control,
                'Must contain at least one letter and one number'
            );
        case 3:
            // uppercase, lowercase and number
            regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/
            return matchWithRegEx(
                regEx,
                control,
                'Must contain at least one uppercase, one lowercase letter and one number'
            );
        case 4:
            // uppercase, lowercase, number and special char
            regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/
            return matchWithRegEx(
                regEx,
                control,
                'Must contain at least one uppercase, one lowercase letter, one number and one special character'
            );
        case 5:
            // Email pattern
            regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return matchWithRegEx(regEx, control, 'Must be a valid email address');
        default:
            return false;
    }
}

function matchWithRegEx(regEx, control, error) {
    if (control.value.match(regEx)) {
        setValid(control);
        return true;
    } else {
        setInvalid(control, error);
        return false;
    }
}
