// Global variables
let currentSlide = 0;
let slides;
let totalSlides;

// Function to show the current slide
function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // Show the current slide
    if (slides[index]) {
        slides[index].style.display = 'block';
    } else {
        console.error('Slide not found at index:', index);
    }
}

// Function to move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide after the last one
    showSlide(currentSlide);
}

// Function to move to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop back to the last slide after the first one
    showSlide(currentSlide);
}

// Initialize the slider
document.addEventListener('DOMContentLoaded', () => {
    slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;

    console.log('Slides:', slides); // Debugging: Check if slides are found

    if (totalSlides === 0) {
        console.error('No slides found. Check the DOM and query selector.');
        return;
    }

    // Auto-rotate slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Show the first slide initially
    showSlide(currentSlide);
});