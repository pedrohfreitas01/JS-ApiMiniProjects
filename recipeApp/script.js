const result = document.getElementById("result")
const searchBtn = document.getElementById("search-btn")
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="


searchBtn.addEventListener("click", () =>{
    let searchInp = document.getElementById("search-inp").value
    fetch(url + searchInp)
        .then((response) => response.json())
        .then((data) => generateReceipeContainer(data))
})


let generateReceipeContainer = (data) => {
    console.log(data);
    let myMeal = data.meals[0]

    const imgDish = myMeal.strMealThumb
    const nameDish = myMeal.strMeal
    const areaDish = myMeal.strArea
    const howToMake = myMeal.strInstructions
    
    
    //TENHO QUE ENTENDER ESSE CODIGO AINDA 
    let count = 1;
    let ingredients = []
    for(let i in myMeal){
        let ingredient = ""
        let measure = ""
        if(i.startsWith("strIngredient") && myMeal[i]){
            ingredient = myMeal[i]
            measure = myMeal[`strMeasure` + count]
            count += 1
            ingredients.push(`${measure}   ${ingredient}`)
        }
    }

    console.log(ingredients);

    result.innerHTML = `<img src=${imgDish}>
    
    <div class="details">
        <h2>${myMeal.strMeal}</h2>
        <h4>${myMeal.strArea}</h4>
        <div id="ingredient-con"></div>
        <div id="recipe">
            <button id="hide-recipe">X</button>
            <pre id="instructions">${myMeal.strInstructions}</pre>
        </div>
    </div>
    <button id="show-recipe">View Recipe</button>
    
    `;

    let ingredientCon = document.getElementById("ingredient-con")

    let parent = document.createElement("ul")
    let recipe = document.getElementById("recipe")
    let hideRecipe = document.getElementById("hide-recipe")
    let showRecipe = document.getElementById("show-recipe")

    ingredients.forEach((i) => {
        let child = document.createElement("li")
        child.innerHTML = i 
        parent.appendChild(child)
        ingredientCon.appendChild(parent)
    })

    hideRecipe.addEventListener("click", () => {
        recipe.style.display = "none"
    })

    showRecipe.addEventListener("click" , () => {
        recipe.style.display = "block"
    })

}
