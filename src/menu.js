function createMenuItem(name, description, price) {
    const menuItem = document.createElement("article");
    menuItem.classList.add("menu-item");

    const itemHeader = document.createElement("div");
    itemHeader.classList.add("menu-item-header");

    const itemName = document.createElement("h3");
    itemName.textContent = name;

    const itemPrice = document.createElement("span");
    itemPrice.textContent = price;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;

    itemHeader.append(itemName, itemPrice);
    menuItem.append(itemHeader, itemDescription);

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
            "Eggs, toast, grilled tomato, mushrooms and breakfast potatoes.",
            "R95"
        ),
        createMenuItem(
            "Avocado Toast",
            "Sourdough toast topped with avocado, feta and poached eggs.",
            "R85"
        ),
        createMenuItem(
            "French Toast",
            "Brioche, fresh berries, cinnamon and maple syrup.",
            "R78"
        )
    );

    const mainsHeading = document.createElement("h2");
    mainsHeading.textContent = "Main Meals";

    const mainsGrid = document.createElement("div");
    mainsGrid.classList.add("menu-grid");

    mainsGrid.append(
        createMenuItem(
            "Harvest Burger",
            "Beef patty, cheddar, caramelised onions and house sauce.",
            "R125"
        ),
        createMenuItem(
            "Creamy Chicken Pasta",
            "Grilled chicken, parmesan and herbs in a creamy sauce.",
            "R135"
        ),
        createMenuItem(
            "Garden Bowl",
            "Roasted vegetables, grains, avocado and herb dressing.",
            "R110"
        )
    );

    const drinksHeading = document.createElement("h2");
    drinksHeading.textContent = "Coffee & Drinks";

    const drinksGrid = document.createElement("div");
    drinksGrid.classList.add("menu-grid");

    drinksGrid.append(
        createMenuItem(
            "Cappuccino",
            "Espresso with steamed milk and a smooth layer of foam.",
            "R38"
        ),
        createMenuItem(
            "Iced Latte",
            "Espresso, chilled milk and ice.",
            "R42"
        ),
        createMenuItem(
            "Fresh Lemonade",
            "House-made lemonade served over ice.",
            "R35"
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