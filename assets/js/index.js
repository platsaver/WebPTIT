// Filter functionality
$(document).ready(function () {
    $('.filter-item').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.post-box').show('1000');
        } else {
            $('.post-box').not('.' + value).hide('1000');
            $('.post-box').filter('.' + value).show('1000');
        }
    });

    // Adding active class to the clicked filter button
    $('.filter-item').click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

// Header background change on scroll
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

// Handle login and update header
document.addEventListener('DOMContentLoaded', function () {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const userGreeting = document.getElementById('userGreeting');
    const loginLink = document.getElementById('loginLink');

    if (loggedInUser) {
        // If a user is logged in, display "Welcome, [Username]" and "Logout"
        userGreeting.innerHTML = `
            <span class="welcome-message">Welcome, ${loggedInUser}</span>
            <a href="#" id="logoutLink" class="logout">Logout</a>
        `;

        // Add logout functionality
        const logoutLink = document.getElementById('logoutLink');
        logoutLink.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            localStorage.removeItem('loggedInUser'); // Clear the logged-in user
            window.location.href = '/pages/main_function/login.html'; // Redirect to login page
        });
    } else {
        // If no user is logged in, keep the "Login" button
        loginLink.style.display = 'block';
    }
});