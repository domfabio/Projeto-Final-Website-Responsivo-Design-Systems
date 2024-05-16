const form = document.getElementById('form');
const submitBtn = document.getElementById('submitBtn');
const emailInput = document.getElementById('email');

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const inputs = form.querySelectorAll('input, select, textarea');
    let isValid = true;
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value) {
            input.classList.add('pulse');
            input.style.outline = '2px solid red';
            isValid = false;
        }
    });
    if (isValid && !validateEmail(emailInput.value)) {
        emailInput.classList.add('pulse');
        emailInput.style.outline = '2px solid red';
        isValid = false;
    }
    if (isValid) {
        form.submit();
    }
});

form.addEventListener('input', function (event) {
    const input = event.target;
    input.classList.remove('pulse');
    input.style.outline = '';
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}