//Filter js 
$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter');
        if(value=='all'){
            $('.post-box').show('1000');
        }
        else{
            $('.post-box').not('.'+value).hide('1000');
            $('.post-box').filter('.'+value).show('1000');
        }
    });
    /*Adding active to button*/
    $('.filter-item').click(function(){
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

/*Header background changed on scroll*/
let header = document.querySelector('header');

window.addEventListener('scroll',()=>{
   header.classList.toggle("shadow",window.scrollY > 0); 
});


/*Handling login request*/
document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const userGreeting = document.getElementById('userGreeting');
    const loginLink = document.getElementById('loginLink');

    if (loggedInUser) {
        // If a user is logged in, display "Welcome, [Username]"
        userGreeting.innerHTML = `<span class="welcome-message">Welcome, ${loggedInUser}</span>`;
    } else {
        // If no user is logged in, keep the "Login" button
        loginLink.style.display = 'block';
    }
});