

const recipesPageRender = () => {
    let recipesContentDiv = document.createElement("div");
    recipesContentDiv.setAttribute("id", "recipes");
    recipesContentDiv.textContent = "Aici vor fi retetele";
    console.log("recipes div is here!");
    return recipesContentDiv;
}


export {recipesPageRender};
