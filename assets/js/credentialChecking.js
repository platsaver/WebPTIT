document.addEventListener('DOMContentLoaded', function() {
    console.log('credentialChecking.js loaded'); // Debugging line

    const loginForm = document.getElementById('loginForm');
    if (!loginForm) {
        console.error('Login form not found!');
        return;
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        console.log('Form submitted'); // Debugging line

        // Get input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        console.log('Username:', username); // Debugging line
        console.log('Password:', password); // Debugging line

        // Retrieve stored users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check credentials
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            console.log('Credentials valid'); // Debugging line

            // Store the username in localStorage for session management
            localStorage.setItem('loggedInUser', username);

            // Redirect to the homepage
            window.location.href = '/index.html';
        } else {
            console.log('Invalid credentials'); // Debugging line
            document.getElementById('error-message').textContent = 'Invalid username or password.';
            document.getElementById('error-message').style.display = 'block'; // Show error message
        }
    });
});