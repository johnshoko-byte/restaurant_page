import loadHomePage from "./home.js";

function createContactDetail(title, text) {
    const detail = document.createElement("div");
    detail.classList.add("contact-detail");

    const heading = document.createElement("h3");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    detail.append(heading, paragraph);

    return detail;
}

function createContactSection() {
    const contactSection = document.createElement("div");
    contactSection.classList.add("contact-section");

    const heading = document.createElement("h1");
    heading.textContent = "Visit Us";

    const intro = document.createElement("p");
    intro.classList.add("page-intro");
    intro.textContent =
        "Join us for breakfast, lunch, dinner or a freshly brewed cup of coffee.";

    const contactCard = document.createElement("section");
    contactCard.classList.add("contact-card");

    contactCard.append(
        createContactDetail(
            "Address",
            "24 Market Street, Johannesburg"
        ),
        createContactDetail(
            "Phone",
            "+27 11 555 0142"
        ),
        createContactDetail(
            "Email",
            "hello@harvestcafe.co.za"
        ),
        createContactDetail(
            "Opening Hours",
            "Monday–Sunday: 07:00–21:00"
        )
    );

    const form = document.createElement("form");
    form.classList.add("contact-form");

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "contact-name");
    nameLabel.textContent = "Name";

    const nameInput = document.createElement("input");
    nameInput.id = "contact-name";
    nameInput.name = "name";
    nameInput.type = "text";
    nameInput.required = true;

    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "contact-email");
    emailLabel.textContent = "Email";

    const emailInput = document.createElement("input");
    emailInput.id = "contact-email";
    emailInput.name = "email";
    emailInput.type = "email";
    emailInput.required = true;

    const messageLabel = document.createElement("label");
    messageLabel.setAttribute("for", "contact-message");
    messageLabel.textContent = "Message";

    const messageInput = document.createElement("textarea");
    messageInput.id = "contact-message";
    messageInput.name = "message";
    messageInput.rows = 6;
    messageInput.required = true;

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Send Message";

    form.append(
        nameLabel,
        nameInput,
        emailLabel,
        emailInput,
        messageLabel,
        messageInput,
        submitButton
    );

    contactSection.append(
        heading,
        intro,
        contactCard,
        form
    );
    return contactSection;
}

export default createContactSection;