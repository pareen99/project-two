/*Navbar*/

//ge the hamburger element 
var hamburger = document.getElementById("hamburger");

//get the menu element 
var menu = document.getElementById("menu");

//get the overlay element 
var overlay = document.getElementById("overlay");
// define toggle function 
function toggleMenu() {
    menu.classList.toggle("show");
    overlay.classList.toggle("show");
}
//execute toggle function from hambruger on click
hamburger.addEventListener("click", toggleMenu);
// execute toggle function from menu on click
menu.addEventListener("click", toggleMenu);
//execute toggle function from overlay on click
overlay.addEventListener("click", toggleMenu);
/*Navbar*/

/*Accordion*/

//get the accordion element 
var accordion = document.getElementsByClassName("accordion");
var i;

for (i=0; i<accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
     /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");   

     /* Toggle between hiding and showing the active panel */
     var panel = this.nextElementSibling;
     if (panel.style.display === "block") {
         panel.style.display = "none";
     } else {
         panel.style.display = "block";
     }
    });

}

var acc = document.getElementsByClassName("accordion");
var i;

for (i=0; i< acc.length;i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
