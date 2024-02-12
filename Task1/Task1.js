//Aya Daraghma
function resetValidation() {
    const inputControls = document.querySelectorAll('.input-control');
    inputControls.forEach(control => {
        control.classList.remove('success');
    });
}
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('form').reset(); 
    resetValidation();
}

function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phoneNumber = document.getElementById('phoneNumber');
const email = document.getElementById('email');
const major = document.getElementById('major');
const trainingArea = document.getElementById('trainingArea');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const scrollToError = () => {
    const errorElement = document.querySelector('.input-control.error input');
    if (errorElement) {
        errorElement.focus();
    }
};


const isValidEmail = email => {
    const re = /^[^\d\s][^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};
const isValidFirstName = firstName => {
    const re = /^[A-Za-z]+$/;
    return re.test(firstName);
};
const isValidLastName = lastName => {
    const re = /^[A-Za-z]+$/;
    return re.test(lastName);
};
const isValidPhoneNumber = phoneNumber => {
    const re = /^\d{10}$/;
    return re.test(phoneNumber);
};
const isValidMajor = major => {
    const re = /^[A-Za-z\s]+$/;
    return re.test(major);
};

const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const emailValue = email.value.trim();
    const majorValue = major.value.trim();
    const trainingAreaValue = trainingArea.value;

    let allFieldsValid = true; 

    // Validate first name
    if (firstNameValue === '') {
        setError(firstName, 'First Name is required');
        allFieldsValid = false;
    } else if (!isValidFirstName(firstNameValue)) {
        setError(firstName, 'First Name must contain only alphabetic characters');
        allFieldsValid = false;
    } else {
        setSuccess(firstName);
    }

// Validate last name
    if (lastNameValue === '') {
        setError(lastName, 'Last Name is required');
        allFieldsValid = false;
    } else if (!isValidLastName(lastNameValue)) {
        setError(lastName, 'Last Name must contain only alphabetic characters');
        allFieldsValid = false;
    } else {
        setSuccess(lastName);
    }

// Validate Phone#
    if (phoneNumberValue === '') {
        setError(phoneNumber, 'Phone Number is required');
        allFieldsValid = false;
    } else if (!isValidPhoneNumber(phoneNumberValue)) {
        setError(phoneNumber, 'Phone Number must contain exactly 10 numeric digits');
        allFieldsValid = false;
    } else {
        setSuccess(phoneNumber);
    }

// Validate email
    if (emailValue === '') {
        setError(email, 'Email is required');
        allFieldsValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        allFieldsValid = false;
    } else if (/^\d/.test(emailValue)) { // Check if email starts with a digit
        setError(email, 'Email cannot start with a number');
        allFieldsValid = false;
    } else {
        setSuccess(email);
    }

// Validate major
    if (majorValue === '') {
        setError(major, 'Major is required');
        allFieldsValid = false;
    } else if (!isValidMajor(majorValue)) {
        setError(major, 'Major must contain only alphabetic characters');
        allFieldsValid = false;
    } else {
        setSuccess(major);
    }
//Training area
    if (trainingAreaValue === '') {
        setError(trainingArea, 'Training Area is required');
        allFieldsValid = false;
    } else {
        setSuccess(trainingArea);
    }

   
    if (allFieldsValid) {
        showPopup();
    }
    if (!allFieldsValid) {
        scrollToError();
    }
};
document.getElementById('closePopupBtn').addEventListener('click', closePopup);
