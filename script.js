// -------------------- PagePositionChange -----------------------

function toTop() {
    var time = setInterval(
    function () {
        document.documentElement.scrollTop -= 40;
        if (document.documentElement.scrollTop === 0) {
            clearInterval(time);
        }
    }, 1);
}

function toCer() {
    var time = setInterval(
        function () {
            document.documentElement.scrollTop += 10;
            if (document.documentElement.scrollTop === 670) {
                clearInterval(time);
            }
        }, 1);
}

// -------------------- btnMiss ----------------------

window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() {
    if (document.documentElement.scrollTop > 300) {
        document.getElementById("scrollDown").style.display = "none";
    } 
    else {
        document.getElementById("scrollDown").style.display = "block";
    }
}

// -------------------- Sildes -----------------------

var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = " none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = " block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); 
}