

const recipesPageRender = () => {
    let pizzaArray = []; 
    // cand avem mai multe mancaruri, le punem in array-ul pizzaArray
    // pizzaArray.forEach(function(foodObject){createFoodCard(foodObject)});

    class Pizza {
        productType = "Pizza";
        basePizzaIngredients = ["pizza de baza"];
        sizes = ["small", "medium", "large", "family"];
        constructor(name, ingredients, prices, spicy){
            this.name = name;
            this.ingredients = this.basePizzaIngredients.concat(ingredients);
            this.prices = prices;
            this.spicy = spicy;
        }
        getProductName = function(){
            return this.productType + " " + this.name;
        }
    }

    let recipesContentDiv = document.createElement("div");
    recipesContentDiv.setAttribute("id", "recipes");    

    let carnivoraPrices = {
        "small": 30,
        "medium": 40,
        "large": 50,
        "family": 60
    };

    let pizzaCarnivora = new Pizza("Carnivora", ["carnaciori taranesti", "sunca", "bacon", "pepperoni"], carnivoraPrices, false);
    pizzaArray.push(pizzaCarnivora);
    for(let i = 0; i < 10; i++){
        let card = createFoodCard(pizzaCarnivora);
        recipesContentDiv.appendChild(card);
    }

    return recipesContentDiv;
}


export {recipesPageRender};


// create a function that makes a div for each element 

function createFoodCard(foodObj){
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("food-card");
    cardDiv.setAttribute("id", foodObj.name.toLowerCase());

    const productName = document.createElement("div");
    productName.classList.add("product-name");
    productName.textContent = foodObj.getProductName();

    const productIngredients = document.createElement("div");
    productIngredients.classList.add("product-description");
    productIngredients.textContent = "Ingrediente: " + foodObj.ingredients.join(", ");

    var isSpicy = foodObj.spicy ? "Da" : "Nu";
    const spicyDiv = document.createElement("div");
    spicyDiv.textContent = "Picant : " + isSpicy;

    var prices = foodObj.prices;
    console.log(foodObj.prices);
    const pricesDiv = document.createElement("div");
    pricesDiv.textContent = "Pret: de la " + prices.small + " de lei.";

    cardDiv.append(productName, productIngredients, spicyDiv, pricesDiv);
    return cardDiv;
}

