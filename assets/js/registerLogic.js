document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    if (!registerForm) {
        console.error('Register form not found!');
        return;
    }

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const username = document.getElementById('regUsername').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;

        // Clear previous error messages
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';

        // Validate inputs
        if (!username || !email || !password || !confirmPassword) {
            errorMessage.textContent = 'All fields are required.';
            errorMessage.style.display = 'block';
            return;
        }

        if (password !== confirmPassword) {
            errorMessage.textContent = 'Passwords do not match.';
            errorMessage.style.display = 'block';
            return;
        }

        // Optional: Add password complexity validation
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // At least 8 characters, 1 number, 1 uppercase, 1 lowercase
        if (!passwordRegex.test(password)) {
            errorMessage.textContent = 'Password must be at least 8 characters long and include at least one number, one uppercase letter, and one lowercase letter.';
            errorMessage.style.display = 'block';
            return;
        }

        // Store user data in localStorage
        const user = {
            username: username,
            email: email,
            password: password
        };

        // Retrieve existing users or initialize an empty array
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user); // Add the new user
        localStorage.setItem('users', JSON.stringify(users)); // Save updated users array

        // If all validations pass
        alert('Registration successful!');
        window.location.href = '/pages/main_function/login.html'; // Redirect to login page
    });
});