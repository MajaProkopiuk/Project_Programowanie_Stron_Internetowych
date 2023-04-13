const form = document.getElementById('contact-form');

const nameInput = document.getElementById('name');
const subjectInput = document.getElementById('subject');
const contentInput = document.getElementById('content');

const nameError = document.getElementById('name-error');
const subjectError = document.getElementById('subject-error');
const contentError = document.getElementById('content-error');

const successModal = new bootstrap.Modal(document.getElementById('success-modal'));

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    function validateInput(input, errorElement, errorMessage) {
        if (input.value.trim() === '') {
            errorElement.textContent = errorMessage;
            isValid = false;
        } else {
            errorElement.textContent = '';
        }
    }

    validateInput(nameInput, nameError, 'Please enter your name');
    validateInput(subjectInput, subjectError, 'Please enter a subject');
    validateInput(contentInput, contentError, 'Please enter your message');

    if (isValid) {
        const subject = `${subjectInput.value.trim()}`;
        const body = `Hi my name is: ${nameInput.value.trim()}\nAnd I want to let you know: ` +
            `: ${contentInput.value.trim()} \nThis message was prepared using form`;

        const mailtoUrl = `mailto:maja.prokopiuk@uth.pl?subject=` +
            `${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;

        successModal.show();
    }
});