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
    if (document.documentElement.scrollTop > 1) {
        document.getElementById("scrollDown").style.display = "none";
    } 
    else {
        document.getElementById("scrollDown").style.display = "block";
    }
}

// -------------------- In-Out -----------------------

window.onload = function() {
	const cons = document.querySelectorAll('.con');
	window.addEventListener("scroll",checkInOut);
	function checkInOut() {
		cons.forEach(con=> {
			const offSetBottom = window.innerHeight + window.scrollY;
            const offSet = window.scrollY;                 
			const diversion1 = con.offsetTop;                   
            const diversion2 = con.offsetTop + con.height/3;    
            const diversion3 = con.offsetTop + 2*con.height/3;     
            const diversion4 = con.offsetTop + con.height;         
			if (offSetBottom>=diversion1 && offSetBottom<diversion2 || offSet>=diversion3 && offSet<diversion4) {
			    con.classList.replace("active1");
			}
			else if (offSetBottom>=diversion2 && offSetBottom<diversion3 || offSet>=diversion2 && offSet<diversion3) {
			    con.classList.replace("active2");
            }
            else if (offSetBottom>=diversion3 && offSetBottom<diversion4 || offSet>=diversion1 && offSet<diversion2) {
                con.classList.replace("active3");
            }
        });
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
    setTimeout(showSlides, 2500); 
}