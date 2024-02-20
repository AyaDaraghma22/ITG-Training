$(document).ready(function () {
    // Retrieve the last entered username from sessionStorage
    var lastEnteredUsername = sessionStorage.getItem('lastEnteredUsername');
    // Set the last entered username as the default value for the username input
    $('#username').val(lastEnteredUsername);

    // Update sessionStorage dynamically as the user types
    $('#username').on('input', function() {
        var enteredUsername = $(this).val();
        sessionStorage.setItem('lastEnteredUsername', enteredUsername);
    });

    $("#signup-form").validate({
        rules: {
            username: {
                minlength: 5,
                required: true
            },
            email: {
                email: true,
                required: true
            },
            password: {
                minlength: 8,
                required: true,
                lettersonly: true
            },
            phone: {
                minlength: 10,
                maxlength: 10,
                required: true,
                digits: true
            }
        },
        messages: {
            username: {
                minlength: "Username should be at least 5 characters",
                required: "Please enter your username"
            },
            email: {
                email: "Please enter a valid email address",
                required: "Please enter your email address"
            },
            password: {
                minlength: "Password should be at least 6 characters",
                required: "Please enter your password",
                lettersonly: "Password must contain at least one letter"
            },
            phone: {
                minlength: "Phone number should be 10 digits",
                maxlength: "Phone number should be 10 digits",
                required: "Please enter your phone number",
                digits: "Please enter only digits"
            }
        },
        // make red error and green success border according to validation. 
        highlight: function(element) {
            $(element).closest('.input-control').addClass('error');
            $(element).closest('.input-control').removeClass('success');
        },
        unhighlight: function(element) {
            $(element).closest('.input-control').removeClass('error');
            $(element).closest('.input-control').addClass('success');
        },
        // Handler for invalid form submission, focuses on the first invalid element
        invalidHandler: function (event, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                var firstInvalidElement = $(validator.errorList[0].element);
                $('html, body').animate({
                    // Find the first invalid element and scroll to it with a 50 pixels offset from the top
                    scrollTop: firstInvalidElement.offset().top - 50
                }, 500);
                firstInvalidElement.focus();
            }
        },
        submitHandler: function (form) {
            // Retrieve the entered username
            var enteredUsername = $('#username').val();
            // Store the username in sessionStorage
            sessionStorage.setItem('username', enteredUsername);
            // Redirect to Order.html
            window.location.href = 'Order.html';
            return false; // Prevent the form from submitting
        },
        
    });

    // Custom method for password to check at least one letter
    $.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /[a-zA-Z]/.test(value);
    }, "Please enter at least one letter.");
});
