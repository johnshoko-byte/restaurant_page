import restaurantSrc from "./img/restaurant.webp";
import aboutSrc from "./img/about.webp";
import loadMenuPage from "./menu.js";

import createContactSection from "./contact.js";
import createSpecialsSection from "./specials.js";

function createAboutSection() {
    const aboutSection = document.createElement("section");
    aboutSection.classList.add("about-section");
    aboutSection.id = "#about-section";

    const image = document.createElement("img");
    image.src = aboutSrc;
    image.alt = "Inside our café and restaurant";
    image.classList.add("about-image");

    const textContainer = document.createElement("div");
    textContainer.classList.add("about-text");

    const label = document.createElement("span");
    label.classList.add("section-label");
    label.textContent = "Our Story";

    const heading = document.createElement("h2");
    heading.textContent =
        "A Place Made for Good Food and Good Company";

    const paragraph = document.createElement("p");
    paragraph.textContent =
        "We bring together freshly brewed coffee, comforting meals and a warm atmosphere. Whether you are stopping by for breakfast, meeting friends for lunch or enjoying dinner with family, we want every visit to feel special.";

    const button = document.createElement("button");
    button.classList.add("about-btn");
    button.textContent = "Learn More";

    textContainer.append(
        label,
        heading,
        paragraph,
        button
    );

    aboutSection.append(
        image,
        textContainer
    );

    return aboutSection;
}

function createHeroSection() {
    const heroSection = document.createElement("section");
    heroSection.classList.add("hero-section");
    heroSection.id = "hero-section";

    const leftSection = document.createElement("div");
    leftSection.classList.add("left");

    const heading = document.createElement("h1");
    heading.textContent =
        "Good Food. Great Coffee. Better Moments.";

    const description = document.createElement("p");
    description.textContent =
        "From freshly brewed coffee and light bites to satisfying meals, " +
        "we serve comforting flavours in a warm space made for every part of your day.";

    const menuButton = document.createElement("button");
    menuButton.classList.add("menu-btn");
    menuButton.textContent = "Menu";

    menuButton.addEventListener("click", e => {
        content.innerHTML = "";
        loadMenuPage();
    });

    const reserveButton = document.createElement("button");
    reserveButton.classList.add("reserve-btn");
    reserveButton.textContent = "Reserve a Table";

    leftSection.append(
        heading,
        description,
        menuButton,
        reserveButton
    );

    const rightSection = document.createElement("div");
    rightSection.classList.add("right");

    const restaurantImage = document.createElement("img");
    restaurantImage.src = restaurantSrc;
    restaurantImage.alt = "Restaurant interior";
    restaurantImage.classList.add("restaurant");

    const dishImage = document.createElement("div");
    dishImage.classList.add("dish");
    dishImage.setAttribute(
        "aria-label",
        "Freshly prepared dish"
    );
    dishImage.setAttribute("role", "img");

    rightSection.append(
        restaurantImage,
        dishImage
    );

    heroSection.append(
        leftSection,
        rightSection
    );

    return heroSection;
}

function loadHomePage() {
    const content = document.querySelector("#content");

    const homePage = document.createElement("main");
    homePage.classList.add("home-page");

    const heroSection = createHeroSection();
    const specialsSection = createSpecialsSection();
    const aboutSection = createAboutSection();
    const contactSection = createContactSection();

    homePage.append(
        heroSection,
        specialsSection,
        aboutSection,
        contactSection
    );

    content.append(homePage);
}

export default loadHomePage;