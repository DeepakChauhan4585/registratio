document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('feedback');

    if (name === '' || email === '' || message === '') {
        feedback.textContent = 'Please fill in all fields.';
        feedback.style.color = 'red';
        feedback.style.display = 'block';
    } else if (!validateEmail(email)) {
        feedback.textContent = 'Please enter a valid email address.';
        feedback.style.color = 'red';
        feedback.style.display = 'block';
    } else {
        feedback.textContent = 'Thank you for your message. We will get back to you soon.';
        feedback.style.color = 'green';
        feedback.style.display = 'block';

        // Clear form
        document.getElementById('contactForm').reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
