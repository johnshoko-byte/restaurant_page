import restaurantSrc from "./img/restaurant.webp";

function loadHomePage() {
    const content = document.querySelector("#content");

    // Create the left section
    const leftSection = document.createElement("div");
    leftSection.classList.add("left");

    const heading = document.createElement("h1");
    heading.textContent = "Good Food. Great Coffee. Better Moments.";

    const description = document.createElement("p");
    description.textContent =
        "From freshly brewed coffee and light bites to satisfying meals, " +
        "we serve comforting flavours in a warm space made for every part of your day.";

    const menuButton = document.createElement("button");
    menuButton.classList.add("menu-btn");
    menuButton.textContent = "Menu";

    const reserveButton = document.createElement("button");
    reserveButton.classList.add("reserve-btn");
    reserveButton.textContent = "Reserve a Table";

    leftSection.append(
        heading,
        description,
        menuButton,
        reserveButton
    );

    // Create the right section
    const rightSection = document.createElement("div");
    rightSection.classList.add("right");

    const restaurantImage = document.createElement("img");

    restaurantImage.src = restaurantSrc;
    restaurantImage.alt = "Restaurant interior";
    restaurantImage.classList.add("restaurant");

    restaurantImage.addEventListener("load", () => {
        console.log("Restaurant image loaded:", restaurantSrc);
    });

    restaurantImage.addEventListener("error", () => {
        console.error("Restaurant image failed:", restaurantSrc);
    });

    const dishImage = document.createElement("div");
    dishImage.alt = "Freshly prepared dish";
    dishImage.classList.add("dish");

    rightSection.append(
        restaurantImage,
        dishImage
    );

    // Add both sections to #content
    content.append(
        leftSection,
        rightSection
    );
}

export default loadHomePage;