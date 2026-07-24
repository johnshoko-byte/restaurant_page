import steak from "./img/menu/steak.jpg";
import duck from "./img/menu/duck.jpg";
import lambFillet from "./img/menu/LambFillet.jpg";
import porkMedallions from "./img/menu/porkMedallions.jpg";

function createSpecial(name, image, price) {
    const item = document.createElement("div");
    item.className = "special-item";

    const itemName = document.createElement("h3")
    itemName.className = "item-name";
    itemName.textContent = name;

    const itemImage = document.createElement("img");
    itemImage.className = "item-image";
    itemImage.src = image;

    const itemPrice = document.createElement("span")
    itemPrice.className = "item-price";
    itemPrice.textContent = price;

    item.append(
        itemImage,
        itemName,
        itemPrice
    );

    return item
}
const container = document.createElement("div");
container.className = "specials-container";

const leftArrow = document.createElement("button");
leftArrow.className = "special-arrow";
leftArrow.textContent = "←";

const specialsList = document.createElement("div");
specialsList.className = "specials-list";

const rightArrow = document.createElement("button");
rightArrow.className = "special-arrow";
rightArrow.textContent = "→";

function createSpecialsSection() {
    const specialsSection = document.createElement("section");
    specialsSection.className = "specials-section";

    const item1 = createSpecial("Steak And Fries", steak, "R120");
    const item2 = createSpecial("Duck", duck, "R135");
    const item3 = createSpecial("Lamb Fillet", lambFillet, "R150");
    const item4 = createSpecial("Pork Medallions", porkMedallions, "R145");

    container.append(
        leftArrow,
        specialsList,
        rightArrow
    );

    specialsSection.append(container);
    specialsSection.append(
        item1,
        item2,
        item3,
        item4
    );

    return specialsSection;
}

const scrollAmount = 300;

rightArrow.addEventListener("click", () => {
    specialsList.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});

leftArrow.addEventListener("click", () => {
    specialsList.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});

export default createSpecialsSection;