// ===========================
// Portfolio JavaScript
// ===========================

// Loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});

// Typing Effect
const text = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Frontend Developer",
    "JavaScript Developer"
];

let index = 0;
let charIndex = 0;
let typing = true;

const typingElement = document.getElementById("typing");

function typeEffect() {

    if (!typingElement) return;

    if (typing) {

        typingElement.textContent =
            text[index].substring(0, charIndex++);

        if (charIndex > text[index].length) {
            typing = false;
        }

    } else {

        typingElement.textContent =
            text[index].substring(0, charIndex--);

        if (charIndex < 0) {
            typing = true;
            index++;

            if (index >= text.length) {
                index = 0;
            }
        }

    }

}

setInterval(typeEffect, 120);

// ===========================
// Sticky Navbar
// ===========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "#111827";

        navbar.style.boxShadow =
            "0 10px 20px rgba(0,0,0,.3)";

    } else {

        navbar.style.background =
            "rgba(17,24,39,.7)";

        navbar.style.boxShadow = "none";
    }

});

// ===========================
// Dark Mode
// ===========================

const themeToggle =
    document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (
        document.body.classList.contains("light-mode")
    ) {

        themeToggle.innerHTML =
            '<i class="fas fa-sun"></i>';

    } else {

        themeToggle.innerHTML =
            '<i class="fas fa-moon"></i>';

    }

});

// ===========================
// Back To Top
// ===========================

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ===========================
// Scroll Progress
// ===========================

window.addEventListener("scroll", () => {

    const winScroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (winScroll / height) * 100;

    document.getElementById("progressBar")
        .style.width = progress + "%";

});

// ===========================
// Mobile Menu
// ===========================

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

// ===========================
// Active Navigation
// ===========================

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});

// ===========================
// Contact Form
// ===========================

const form =
    document.querySelector(".contact-form");

form.addEventListener("submit", e => {

    e.preventDefault();

    alert(
        "Thank you! Your message has been sent successfully."
    );

    form.reset();

});

// ===========================
// Reveal Animation
// ===========================

const revealElements =
    document.querySelectorAll(
        ".skill-card,.service-card,.project-card,.timeline-item,.testimonial-card"
    );

function reveal() {

    revealElements.forEach(item => {

        const top =
            item.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (top < windowHeight - 100) {

            item.style.opacity = "1";

            item.style.transform =
                "translateY(0)";

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

// ===========================
// Console Message
// ===========================

console.log(
    "Portfolio Website Loaded Successfully 🚀"
);