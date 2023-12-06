

const recipesPageRender = () => {
    let pizzaArray = []; 
    // cand avem mai multe mancaruri, le punem in array-ul pizzaArray
    // pizzaArray.forEach(function(foodObject){createFoodCard(foodObject)});

    class Pizza {
        productType = "Pizza";
        basePizzaIngredients = ["Pizza de baza"];
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
    let card1 = createFoodCard(pizzaCarnivora);
    recipesContentDiv.appendChild(card1);
    let card2 = createFoodCard(pizzaCarnivora);
    recipesContentDiv.appendChild(card2);
    let card3 = createFoodCard(pizzaCarnivora);
    recipesContentDiv.appendChild(card3);
    let card4 = createFoodCard(pizzaCarnivora);
    recipesContentDiv.appendChild(card4);

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
    productIngredients.textContent = foodObj.ingredients.join(", ");

    var isSpicy = foodObj.spicy ? "Da" : "Nu";
    const spicyDiv = document.createElement("div");
    spicyDiv.textContent = "Picant : " + isSpicy;

    cardDiv.append(productName, productIngredients, spicyDiv);
    return cardDiv;
}

