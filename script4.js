document.getElementById('create-account-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Simple validation
    if (username === '' || email === '' || password === '') {
        message.textContent = 'All fields are required.';
        return;
    }

    if (!validateEmail(email)) {
        message.textContent = 'Please enter a valid email address.';
        return;
    }

    message.textContent = ''; // Clear previous messages

    // Normally, you would send the data to the server here
    console.log('Form submitted successfully!');
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
