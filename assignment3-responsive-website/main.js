//NAVIGATION MENU

const menuIconCont = document.querySelector(".icon-cont");
const navMenu = document.querySelector(".nav-menu");
const menuIconAnchor = document.getElementById("menu-icon-anchor");

menuIconCont.addEventListener("click", mobileMenu);

function mobileMenu() {
    menuIconCont.classList.toggle("active");
    navMenu.classList.toggle("active");

    var isOpen = navMenu.classList.contains("active");
    if (isOpen) {
        menuIconAnchor.innerHTML = '<i class="fa fa-times"></i>';
    }
    else {
        menuIconAnchor.innerHTML = '<i class="fa fa-bars"></i>';
    }
 }

// close menu on item click

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    menuIconCont.classList.remove("active");
    navMenu.classList.remove("active");
    menuIconAnchor.innerHTML = '<i class="fa fa-bars"></i>';
}