document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        document.getElementById('error-message').style.display = 'block'; // Show error message
    } else {
        alert('Registration successful!');
        window.location.href = '/pages/main_function/login.html'; // Redirect to login page
    }
});