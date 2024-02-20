//Aya Daraghma
//Function validator in JQuery 
$(document).ready(function () {
    $("#form2").validate({
        rules: {
            firstName: {
                minlength: 2,
                required: true,
                lettersonly: true
            },
            lastName: {
                minlength: 2,
                required: true
            },
            phoneNumber: {
                minlength: 10,
                maxlength: 10,
                required: true,
                digits: true
            },
            email: {
                email: true,
                required: true
            },
            major: {
                minlength: 4,
                required: true
            },
            trainingArea: {
                required: true
            }
        },
        messages: {
            firstName: {
                minlength: "Name should be at least 2 characters",
                required: "Please enter your first name",
                lettersonly: "Please enter only letters for the first name"

            },
            lastName: {
                minlength: "Last name should be at least 2 characters",
                required: "Please enter your last name"
            },
            phoneNumber: {
                minlength: "Phone number should be 10 digits",
                maxlength: "Phone number should be 10 digits",
                required: "Please enter your phone number",
                digits: "Please enter only digits"
            },
            email: {
                email: "Please enter a valid email address",
                required: "Please enter your email address"
            },
            major: {
                minlength: "Major should be at least 4 characters",
                required: "Please enter your major"
            },
            trainingArea: {
                required: "Please select a training area"
            }
        },
        // make red error and green sucess border according to validation. 
        highlight: function(element) {
            $(element).closest('.input-control').addClass('error');
            $(element).closest('.input-control').removeClass('success');
        },
        unhighlight: function(element) {
            $(element).closest('.input-control').removeClass('error');
            $(element).closest('.input-control').addClass('success');
        },
        // When the form is submitted successfully, show the popup
        submitHandler: function (form) {
            $("#popup").removeClass("hidden");           
             return false;
        },   errorPlacement: function (error, element) {
            error.appendTo(element.closest('.input-control'));
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
        }
    });

         // Add custom method for letters only to first name
    $.validator.addMethod("lettersonly", function(value, element) {
        return /^[a-zA-Z]+$/.test(value);});

         // Reset form and remove borders on close after a short delay
    window.closePopup = function () {
        $("#popup").addClass("hidden");
        setTimeout(function () {
            $("#form2")[0].reset();
            $(".input-control input, .input-control select").css('border-color', '#f0f0f0');
            $("#form2").validate().resetForm();
        }, 100);
    };
});
