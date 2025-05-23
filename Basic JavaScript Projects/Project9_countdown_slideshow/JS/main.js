//Slideshow code
let slideIndex = 1;
// Show the first slide by default
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    // Change the slide index by n (1 or -1)
    // and show the corresponding slide
    showSlides(slideIndex += n);
}

// Thumbnail image controls
// This function is called when the user clicks on a thumbnail image
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// This function is called to show the current slide based on the slide index
function showSlides(n) {
    // Declare variables to hold the slide index, slides, and dots
    // The slideIndex variable is used to keep track of the current slide being displayed.
    let i;
    // The slides variable is used to hold all the slides in the slideshow.
    let slides = document.getElementsByClassName("mySlides");
    // The dots variable is used to hold all the dots in the slideshow.
    // The dots are used to indicate the current slide being displayed.
    let dots = document.getElementsByClassName("dot");
    // The if statement checks if the slide index is greater than the number of slides or less than 1.
    // If it is, it resets the slide index to 1 or the number of slides respectively.
    // This ensures that the slideshow loops back to the first slide when it reaches the end or goes back to the last slide when it goes past the first slide.
    if (n > slides.length) {slideIndex = 1}
    // If the slide index is less than 1, it sets the slide index to the number of slides.
    // This ensures that the slideshow loops back to the last slide when it goes past the first slide.
    if (n < 1) {slideIndex = slides.length}
    // The for loop iterates through all the slides and sets their display style to "none", hiding them from view.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    // The for loop iterates through all the dots and removes the "active" class from them.
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // The current slide is displayed by setting its display style to "block".
    slides[slideIndex-1].style.display = "block";  
    // The "active" class is added to
    dots[slideIndex-1].className += " active";
}


function Count_Down(){
    //declaring a variable Seconds and assigning it a value of 10
    var seconds = document.getElementById("seconds").value;
    var timer = document.getElementById("timer");

    //function to count down from the value of seconds to 0
    function tick(){
        //decrementing the value of seconds by 1
        seconds = seconds - 1;
        //updating the HTML element with id "seconds" to display the current value of seconds
        
        timer.innerHTML= seconds + " seconds remaining";
        //if the value of seconds is less than 0, clear the timeout and display an alert message
        var time = setTimeout(tick, 1000);
        if (seconds == -1){
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    //
    tick();
}