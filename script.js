document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const name = document.getElementById('name');
    const rollNumber = document.getElementById('roll-number');
    const mobileNumber = document.getElementById('mobile-number');

    const nameValid = validateName(name);
    const rollNumberValid = validateRollNumber(rollNumber);
    const mobileNumberValid = validateMobileNumber(mobileNumber);

    if (nameValid && rollNumberValid && mobileNumberValid) {
        // Submit the form or perform the desired action
    }
}

function validateName(input) {
    const re = /^[A-Za-z\s]+$/;
    if (!re.test(input.value.trim() == "")) {
        showError(input, 'No Special Characters allowed');
        return false;
    } else {
        showSuccess(input);
        return true;
    }
}

function validateRollNumber(input) {
    const re = /^[0-9]{9}$/;
    if (!re.test(input.value.trim() == "")) {
        showError(input, 'Length must be only 9 characters long. Roll Number format must be proper');
        return false;
    } else {
        showSuccess(input);
        return true;
    }
}

function validateMobileNumber(input) {
    const re = /^[0-9]{10}$/;
    if (!re.test(input.value.trim() == "")) {
        showError(input, 'Length must be only 10 digits long');
        return false;
    } else {
        showSuccess(input);
        return true;
    }
}

function showError(input, message) {
    const inputGroup = input.parentElement;
    const span = inputGroup.querySelector('span');
    small.innerText = message;
    small.style.display = 'block';
}

function showSuccess(input) {
    const inputGroup = input.parentElement;
    const span = inputGroup.querySelector('span');
    small.style.display = 'none';
}
