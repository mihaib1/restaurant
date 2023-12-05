import './style.css';
import HeaderLogo from './logo.png'
import {mainPageRender} from './home.js';
import {recipesPageRender} from './recipes.js';
import {contactPageRender} from './contact.js';


const contentDiv = document.getElementById("content");

// header image region

const headerLogo = new Image();
headerLogo.src = HeaderLogo;
headerLogo.classList.add("header-logo");

headerLogo.addEventListener("click", function(e){
    displayPage("Landing");
});
// end header image region

// title region

const titleDiv = document.createElement("div");
titleDiv.classList.add("title");
titleDiv.appendChild(headerLogo);
contentDiv.appendChild(titleDiv);

// end title region



// navbar region

const navbar = document.createElement("div");
navbar.classList.add('navbar');
contentDiv.appendChild(navbar);
const navigationList = document.createElement("ul");
navigationList.classList.add("navigation");
navbar.appendChild(navigationList);
const navbarElements = ["Home", "Menu", "Contact"];
navbarElements.forEach(function(element){
    let li = document.createElement("li");
    li.classList.add(element.toLowerCase());
    li.setAttribute("id", element.toLowerCase() + "-page");
    li.textContent = element;
    navigationList.appendChild(li);
});

// end navbar region

// navbar buttons region

const homeButton = document.getElementById("home-page");
homeButton.classList.add("selected");
homeButton.addEventListener("click", function(e){
    removeSelectedClassForAll();
    homeButton.classList.add("selected");
    displayPage("Landing");
});

const contactButton = document.getElementById("contact-page");
contactButton.addEventListener("click", function(e){
    removeSelectedClassForAll();
    contactButton.classList.add("selected");
    displayPage("Contact");
});

const menuButton = document.getElementById("menu-page");
menuButton.addEventListener("click", function(e){
    removeSelectedClassForAll();
    menuButton.classList.add("selected");
    displayPage("Recipes");
})

// end navbar buttons region

// create a div in which we have the content of the page 

// page-content div region

const pageContent = document.createElement("div");
pageContent.setAttribute("id", "page-content");
pageContent.textContent = "Sa vedem daca merge mai intai. Asta va fi div-ul in care incarc html-ul din fiecare modul, deci va trebui sa ramana in index.js";
contentDiv.appendChild(pageContent);

const testBtn = document.createElement("button");
testBtn.innerText = "Buton pentru testat diverse functii";
testBtn.addEventListener("click", function(event){
    displayPage("Contact");
})
pageContent.appendChild(testBtn);

// end page-content div region

// should add event listeners for each element in navbar so that they call a function to clear html and display only desired content
// other modules will return the HTML content in a variable -> pageContent.innerHTML = that variable;
// page title, navbar and pageContent initialization should stay inside index.js; 
// clearPage function should remain inside index.js;
// also, I could add a fallback option to display a page when anything else couldn't be loaded (an error page); -> will stay inside index.js

function clearPage() {
    pageContent.innerHTML = "";
    console.log("Page is clear");
    pageContent.appendChild(testBtn);
}


// for rendering the other pages, I should only have one function which is given a parameter.
// inside the function the decision should be made for which page to display, depending on the given parameter;
// idea #1: switch case -> create a const object with all the page options -> easy to maintain and add future pages
// should never give a string as a param to the function -> there should be another object for the options
// below should be a structure: 

const options = {
    CONTACT_PAGE: "Contact",
    LANDING_PAGE: "Landing",
    RECIPES_PAGE: "Recipes"
};

function displayPage(pageOption){
    clearPage();
    var contentToDisplay;
    switch(pageOption){
        case options.CONTACT_PAGE : contentToDisplay = contactPageRender();
        break;
        
        case options.LANDING_PAGE: contentToDisplay = mainPageRender();
        break;

        case options.RECIPES_PAGE: contentToDisplay = recipesPageRender();
        break;

        default : contentToDisplay = errorPageRender();
        break;
    }
    // there should also be a validation which checks contentToDisplay so that it's not null;
    pageContent.appendChild(contentToDisplay);
}

function errorPageRender(){
    console.log("Error - pages couldn't be rendered!");
}

function removeSelectedClassForAll(){
    let navbarIds = ["home-page", "contact-page", "menu-page"];
    navbarIds.forEach(function(element){
        let navbarElement = document.getElementById(element);
        navbarElement.classList.remove("selected");
    });
}

// functie care sa faca urmatoarele lucruri la intrare: 

// incarca pagina home 
// pune clasa "selected" pe home
// default-ul va fi pagina de eroare, INAINTE DE INCARCAREA PAGINII HOME

// pe 01.12.2023 -> pus img in header, facut navbar un pic mai estetic, adaugat cod pentru sters clasa de selected
