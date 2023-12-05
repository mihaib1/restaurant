let contactPageRender = () => {
    console.log("Contact page imported!");
    let contactPageContent = document.createElement("div");
    contactPageContent.classList.add("contact");
    contactPageContent.textContent = "You can find us on twitter!";
    return contactPageContent;
}

export {contactPageRender};