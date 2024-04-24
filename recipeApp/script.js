const result = document.getElementById("result")
const searchBtn = document.getElementById("search-btn")
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="


searchBtn.addEventListener("click", () =>{
    let searchInp = document.getElementById("search-inp").value
    fetch(url + searchInp)
        .then((response) => response.json())
        .then((data) => {
            let myMeal = data.meals[0]
            console.log(myMeal);

        })

})


