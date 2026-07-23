import "./styles/styles.css";
import "./styles/menu.css";
import "./styles/home.css";

import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";


const contentBox = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about")
const contactButton = document.querySelector("#contact");
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

homeButton.addEventListener("click", e => {
    contentBox.innerHTML = "";
    loadHomePage();
});

menuButton.addEventListener("click", e => {
    contentBox.innerHTML = "";
    loadMenuPage();
});


loadHomePage();
