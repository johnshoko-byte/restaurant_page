import {
    english,
    avocado,
    french,
    burger,
    cappuccino,
    garden,
    latte,
    lemonade,
    pasta
} from "./menuImages.js";



function createMenuItem(name, price, image) {
    const menuItem = document.createElement("article");
    menuItem.classList.add("menu-item");

    const itemHeader = document.createElement("div");
    itemHeader.classList.add("menu-item-header");

    const itemImage = document.createElement("img");
    itemImage.src = image;
    itemImage.alt = name;

    const itemName = document.createElement("h3");
    itemName.textContent = name;

    const itemPrice = document.createElement("span");
    itemPrice.textContent = price;

    itemHeader.append(itemName, itemPrice);
    menuItem.append(itemImage, itemHeader);

    return menuItem;
}

function loadMenuPage() {
    const content = document.querySelector("#content");

    const menuPage = document.createElement("main");
    menuPage.classList.add("menu-page");

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";

    const intro = document.createElement("p");
    intro.classList.add("page-intro");
    intro.textContent =
        "Fresh ingredients, comforting flavours and something for every part of your day.";

    const breakfastHeading = document.createElement("h2");
    breakfastHeading.textContent = "Breakfast";

    const breakfastGrid = document.createElement("div");
    breakfastGrid.classList.add("menu-grid");

    breakfastGrid.append(
        createMenuItem(
            "Classic Breakfast",
            "R95",
            english
        ),
        createMenuItem(
            "Avocado Toast",
            "R85",
            avocado
        ),
        createMenuItem(
            "French Toast",
            "R78",
            french
        )
    );

    const mainsHeading = document.createElement("h2");
    mainsHeading.textContent = "Main Meals";

    const mainsGrid = document.createElement("div");
    mainsGrid.classList.add("menu-grid");

    mainsGrid.append(
        createMenuItem(
            "Harvest Burger",
            "R125",
            burger
        ),
        createMenuItem(
            "Creamy Chicken Pasta",
            "R135",
            pasta
        ),
        createMenuItem(
            "Garden Bowl",
            "R110",
            garden
        )
    );

    const drinksHeading = document.createElement("h2");
    drinksHeading.textContent = "Coffee & Drinks";

    const drinksGrid = document.createElement("div");
    drinksGrid.classList.add("menu-grid");

    drinksGrid.append(
        createMenuItem(
            "Cappuccino",
            "R38",
            cappuccino
        ),
        createMenuItem(
            "Iced Latte",
            "R42",
            latte
        ),
        createMenuItem(
            "Fresh Lemonade",
            "R35",
            lemonade
        )
    );

    menuPage.append(
        heading,
        intro,
        breakfastHeading,
        breakfastGrid,
        mainsHeading,
        mainsGrid,
        drinksHeading,
        drinksGrid
    );

    content.append(menuPage);
}

export default loadMenuPage;