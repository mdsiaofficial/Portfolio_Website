"use strict";

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            // active navbar links
            navLinks.forEach(links => {
                
            });
        }
    });
    
    // sticky header
    // This code makes the header sticky when the user scrolls down the page
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
    
}
