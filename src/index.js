import "./styles/styles.css";
import "./styles/menu.css";
import "./styles/home.css";
import "./styles/specials.css";

import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";


const contentBox = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about")
const contactButton = document.querySelector("#contact");
const reserveButton = document.querySelector("#reserve");
const header = document.querySelector("header");
const headerStartPosition = header.offsetTop;

window.addEventListener("scroll", () => {
    const hasScrolledPastHeader =
        window.scrollY > headerStartPosition;

    header.classList.toggle(
        "scrolled",
        hasScrolledPastHeader
    );
});

homeButton.addEventListener("click", () => {
    contentBox.innerHTML = "";
    loadHomePage();

    const heroSection = document.getElementById("hero-section");

    if (heroSection) {
        heroSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
});

menuButton.addEventListener("click", e => {
    contentBox.innerHTML = "";
    loadMenuPage();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

aboutButton.addEventListener("click", () => {
    function scroll() {
        const aboutSection = document.querySelector(".about-section");

        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }

    if (document.querySelector(".about-section")) {
        scroll();
    }
    else {
        contentBox.innerHTML = "";
        loadHomePage();
        scroll();
    }
});

const contactButtons = [contactButton, reserveButton];

contactButtons.forEach(button => {
    button.addEventListener("click", () => {
        function scroll() {
            const contactSection = document.querySelector(".contact-section");

            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }

        if (document.querySelector(".contact-section")) {
            scroll();
        }
        else {
            contentBox.innerHTML = "";
            loadHomePage();
            scroll();
        }
    }
    )
});

loadHomePage();
