function mainPageRender() {
    console.log("Main page created!");
    const landingDiv = document.createElement("div");
    landingDiv.textContent = "Suntem pe pagina acasa";
    return landingDiv;
    // could be called landing page;
}

export {mainPageRender};