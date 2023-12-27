import {elementAttributesContainer} from './htmlAttributes'

const attributes = elementAttributesContainer();

let contactPageRender = () => {

    let contactPageContent = document.createElement("div");
    contactPageContent.classList.add("contact");
    contactPageContent.setAttribute("id", "contactPage");

    let pageTitle = document.createElement("h1");
    pageTitle.classList = "contact-page-title";
    pageTitle.textContent = "How to reach us";

    let contactGrid = document.createElement("div"); 
    contactGrid.classList.add("contact-grid");

    let timetableDiv = document.createElement("div");
    timetableDiv.classList.add("timetable");
    timetableDiv.textContent = "Timetable grid";
    // create a function that generates the timetable and returns the html;
    
    let contactDetails = document.createElement("div");
    contactDetails.classList.add("contact-details");
    contactDetails.textContent = "Contact details grid - phone, email, address etc";
    // function that creates the contact grid HTML

    let contactForm = document.createElement("div");
    contactForm.classList.add("contact-form");
    contactForm.textContent = "Contact form in case the user doesn't want to use phone.";
    let formHTML = generateContactForm();
    contactForm.appendChild(formHTML);
    
    contactGrid.append(timetableDiv, contactDetails, contactForm);

    contactPageContent.append(pageTitle, contactGrid);

    return contactPageContent;
}

export {contactPageRender};


// should add some PNGs with links to my social media. Also, could add a fake phone number / email to make it look like a contact page.
// delivery times and how far (in KM) should be shown.

/*

    let git = document.createElement("div");
    git.textContent = "Click ";
    
        
    let gitLink = document.createElement("a");
    gitLink.setAttribute("id", "githubLink");
    gitLink.setAttribute("href", "https://github.com/mihaib1");
    gitLink.textContent = "GitHub link!";

    git.appendChild(gitLink);
    contactPageContent.appendChild(git);

*/


// #region form creation

function generateContactForm(){

    let formContainer = document.createElement("div");
    formContainer.classList.add("formContainer");

    let formElement = createFormDiv();

    formContainer.appendChild(formElement);

    return formContainer;
};

function createFormDiv() {
    var formElement = document.createElement("form");

    Object.keys(attributes).forEach(function(attribute){
        var elementObj = attributes[attribute];
        let inputElement = createFormElement(elementObj);
        formElement.append(inputElement);
    });
    let submitBtn = createSubmitBtn();
    formElement.append(submitBtn);

    return formElement;
}

function createFormElement(elementObject){
    let elementDiv = document.createElement("div");
    elementDiv.classList.add(elementObject.name, "row");

    let label = document.createElement("label");
    label.textContent = elementObject.label ? elementObject.label : "Camp de test";
    label.setAttribute("for", elementObject.id);
    label.classList.add("col-25");

    let inputType = elementObject.htmlTag ? elementObject.htmlTag : "input";
    let formInput = document.createElement(inputType);

    formInput.classList.add("col-70");

    setElementAttributes(formInput, elementObject);
    elementDiv.append(label, formInput);

    return elementDiv;
}

function createSubmitBtn() {
    let btn = document.createElement("button");
    btn.classList.add("submitBtn");
    return btn;
}

function setElementAttributes(element, attributes){
    Object.keys(attributes).forEach(function(key){
        element.setAttribute(key, attributes[key]);
    });
}

// #endregion