document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission for validation

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '' || password === '') {
            errorMessage.textContent = 'Fill this box';
            errorMessage.style.color = 'red';
        } else {
            // Simulate a successful login
            errorMessage.textContent = 'Logging in...';
            errorMessage.style.color = 'green';
            
            // You would typically send the data to your server here
            // For example, using fetch() to POST to your login endpoint
            // fetch('/login', {
            //     method: 'POST',
            //     body: JSON.stringify({ username, password }),
            //     headers: { 'Content-Type': 'application/json' }
            // }).then(response => {
            //     if (response.ok) {
            //         // Handle successful login
            //     } else {
            //         // Handle login failure
            //     }
            // });
        }
    });
});