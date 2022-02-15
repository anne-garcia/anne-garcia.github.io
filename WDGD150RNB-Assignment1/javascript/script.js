//NAV Bar Font Colour Change
var navBarLinks = document.getElementsByClassName("navbar-links");
//console.log to check my data
console.log(navBarLinks);

function mouseOverNav(event) {
    event.target.style.color = "#B96427";
}

function mouseOutNav(event) {
    event.target.style.color = "#335284";
}

//added "for" loop to add font colour to nav elements
for(var link of navBarLinks) {
    link.addEventListener("mouseover", mouseOverNav);
    link.addEventListener("mouseout", mouseOutNav);
}

//HERO SLIDER
//This variable is called images, and have these four images in a loop
//This is an array of four strings
var images = [
    "images/ellaBlanket.png",
    "images/anneLaughing.png",
    "images/ellaCouch.png",
    "images/anneElla.png",
]

//Loop, where i=0, so the images will start from 0 (one)
//This is an integer variable "var i=0"
var i=0;
//This is a funciton
function slide() {
    //this will get all images from the "var image =[]"
    document.getElementById("slider-first-image").src = images[i];
    //this is the image length, in this case there are four images
    if(i<(images.length-1)) {
        //if i reaches the fourth image, it will go back to 0 (the first image)
        i++;
    }
    else {
        i=0;
    }
}
//this is the slider timer, 3000=3seconds to call the next image
setInterval(slide,3000);

//OnClick Event
function emailMessage() {
    alert ("What do you call someone who can talk to the mail? A parceltongue.");
}

function ponyMessage() {
    alert ("What did the mother horse say to her foal? It's pasture bed time!");
}

function ghibliMessage() {
    alert ("These Studio Ghibli movies have great redemption arcs. Its like the characters went zero Chihiro.");
}

function waffleMessage() {
    alert ("What did Sigmund Freud say when his patient wouldn’t unhand his waffle? 'Leggo my ego!'");
}

//MouseOver Event
//Use of "document.getElementById" to change h2 font colours
function mouseOver() {
    document.getElementById("subheadingColorChange").style.color = "#B96427";
}

function mouseOut() {
    document.getElementById("subheadingColorChange").style.color = "#335284";
}