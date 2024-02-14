document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let phone = document.getElementById('phone').value;
    let errorMsg = '';

    if (!validateEmail(email)) {
        errorMsg += 'Invalid email format.\n';
    }

    if (!validatePassword(password)) {
        errorMsg += 'Password must be at least 8 characters long and contain at least one letter.\n';
    }

    if (!validatePhone(phone)) {
        errorMsg += 'Invalid phone number format.\n';
    }

    if (errorMsg !== '') {
        alert(errorMsg);
    } else {
        sessionStorage.setItem('username', username);
        window.location.href = 'Order.html';
    }
});

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function validatePassword(password) {
    return password.length >= 8 && /[a-zA-Z]/.test(password);
}

function validatePhone(phone) {
    return /^\d{10}$/.test(phone);
}
