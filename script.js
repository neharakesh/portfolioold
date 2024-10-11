
// Initialize Typed.js for typing effect
var typed = new Typed(".typing", {
    strings: ["", "Web Designer"],
    typeSpeed: 100,   // Corrected to typeSpeed
    backSpeed: 60,    // Corrected to backSpeed
    loop: true
});

// Select the navigation element and its list items
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll(".li");
const totalNavList = navList.length;

// Log each navigation list item
for (let i = 0; i < totalNavList; i++) {
    console.log(navList[i]);
}
console .log(hii);