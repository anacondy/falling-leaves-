// Wait for the document to be fully loaded
// This is the standard way to make sure JS runs *after* the HTML is ready
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Get all our HTML elements ---
    const container = document.getElementById('ui-container');
    const slides = document.querySelectorAll('.slide');
    const menuItems = document.querySelectorAll('.menu-list li');
    const playButton = document.getElementById('play-button');
    
    // --- 2. Set up variables ---
    let currentSlide = 0; // Index of the currently active slide
    let isPlaying = true; // Slideshow is active by default
    let slideInterval;      // Variable to hold our setInterval timer
    const slideDuration = 5000; // 5 seconds per slide

    // --- 3. Core Function: showSlide(index) ---
    // This function handles changing the active slide and menu item
    function showSlide(index) {
        // Remove 'active' class from the *current* slide and menu item
        slides[currentSlide].classList.remove('active');
        menuItems[currentSlide].classList.remove('active');
        
        // Update the currentSlide index
        currentSlide = index;
        
        // Add 'active' class to the *new* slide and menu item
        slides[currentSlide].classList.add('active');
        menuItems[currentSlide].classList.add('active');
    }

    // --- 4. Core Function: nextSlide() ---
    // Calculates the next slide index and calls showSlide
    function nextSlide() {
        // Use the modulo operator (%) to loop back to 0 when we reach the end
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    // --- 5. Slideshow Timer Controls ---
    function startSlideshow() {
        // Start the timer
        slideInterval = setInterval(nextSlide, slideDuration);
        isPlaying = true;
        // Remove 'paused' class from container (this shows the play icon)
        container.classList.remove('paused');
    }

    function stopSlideshow() {
        // Stop the timer
        clearInterval(slideInterval);
        isPlaying = false;
        // Add 'paused' class to container (this shows the pause icon)
        container.classList.add('paused');
    }

    // --- 6. Event Listeners ---

    // Play/Pause Button Click
    playButton.addEventListener('click', () => {
        if (isPlaying) {
            stopSlideshow();
        } else {
            startSlideshow();
        }
    });

    // Menu Item Clicks
    // Loop over each menu item and add a click listener
    menuItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // If the user clicks an item, show that slide immediately
            showSlide(index);
            
            // If the slideshow was playing, reset the timer
            // This prevents a quick "double-change" of the slide
            if (isPlaying) {
                clearInterval(slideInterval);
                startSlideshow();
            }
        });
    });

    // --- 7. Initialize ---
    showSlide(0);      // Show the first slide (index 0)
    startSlideshow();  // Start the slideshow
});
