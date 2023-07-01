/*================ toggle icon navbar ================*/
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});


/*================ scroll sections active link ================*/
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive);
window.onscroll = function () {
/*======== sticky navbar ===========*/
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
/*======== remove toggle icon and navbar when clicking link (scroll) ===========*/
    navToggler.classList.remove("active");
    navMenu.classList.remove("open");
};
/*======== scroll reveal  ===========*/
window.sr = ScrollReveal();
sr.reveal(".animate-left", {
    origin: "left",
    duration: 1000,
    distance: "25rem",
    delay: 300,
});
/*======== typed js  ===========*/
var typed = new Typed(".typing", {
    strings: ["Data Scientist", "Researcher", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});