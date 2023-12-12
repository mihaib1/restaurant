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
    // function that creates the form HTML 
    
    contactGrid.append(timetableDiv, contactDetails, contactForm);

    contactPageContent.append(pageTitle, contactGrid);

    return contactPageContent;
}

export {contactPageRender};


// having separate functions is also important for security. We would not export them, so they are not accessible outside.

// should add some PNGs with links to my social media. Also, could add a fake phone number / email to make it look like a contact page.
// delivery times and how far (in KM) should be shown.
// maybe even add a map, just for fun.

// should create functions to generate some parts of HTML. atm code is extremely dirty

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



// form creation below: 
function generateContactForm(){
    const attributes = elementAttributesContainer();
    let formElement = document.createElement("form");

    let firstName = createFormElement(attributes.firstName, "First Name");
    formElement.append(firstName.label, firstName.formInput);

    let lastName = createFormElement(attributes.lastName, "Last Name");
    formElement.append(lastName.label, lastName.formInput);

    let email = createFormElement(attributes.email, "Email");
    formElement.append(email.label, email.formInput);

    let message = createFormElement(attributes.message, "Your message", "textarea");
    formElement.append(message.label, message.formInput); 

    return formElement;
}

function createFormElement(inputObject, labelText, htmlTag = "input"){
    let label = document.createElement("label");
    label.textContent = labelText + ": ";
    label.setAttribute("for", inputObject.id);

    let formInput = document.createElement(htmlTag);
    setElementAttributes(formInput, inputObject);
    return {
        label: label,
        formInput: formInput
    }
}

function setElementAttributes(element, attributes){
    Object.keys(attributes).forEach(function(key){
        element.setAttribute(key, attributes[key]);
    })
}

// could move this container to a new module

function elementAttributesContainer(){
    let firstName = {
        "id": "firstName",
        "name": "firstName",
        "type": "text"
    };

    let lastName = {
        "id": "lastName",
        "name": "lastName",
        "type": "text"
    };

    let email = {
        "id": "email",
        "name": "email",
        "type": "email"
    };

    let message = {
        "id" : "message",
        "name": "message",
        "type": "textarea"
    }

    return {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
    }
}