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

        // Hardcoded credentials (for demo purposes)
        const validUsername = 'user';
        const validPassword = 'password';

        // Get input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        console.log('Username:', username); // Debugging line
        console.log('Password:', password); // Debugging line

        // Check credentials
        if (username === validUsername && password === validPassword) {
            console.log('Credentials valid'); // Debugging line

            // Store the username in localStorage
            localStorage.setItem('loggedInUser', username);

            // Redirect to the homepage
            window.location.href = '/pages/main_function/category.html';
        } else {
            console.log('Invalid credentials'); // Debugging line
            document.getElementById('error-message').style.display = 'block'; // Show error message
        }
    });
});