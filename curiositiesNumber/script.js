const getFactBtn = document.getElementById("getFactBtn")
const ranFactBtn = document.getElementById("ran-ract-btn")
const fact = document.querySelector(".fact")
const url = "http://numbersapi.com/"


let fetchFact = (num) => {
    let finalUrl = url + num

    fetch(finalUrl)
        .then((response) => response.text())
        .then((data) => {
            fact.style.display ="block"
            fact.innerHTML = `<h2>${num}</h2>
            <p>${data}</p>`;
            document.querySelector(".container").append(fact)
        
        
        })
    }


let getFact = () => {
    let num = document.getElementById("num").value
    //check if inp is not empty
    if(num) {
        if(num >= 0 && num <= 300){
            fetchFact(num)
        } else{
                fact.style.display = "block"
                fact.innerHTML = `<p class="msg">Please enter a number between 0 to 300</p>`
        }

    } else{
            fact.style.display = "block"
            fact.innerHTML = `<p class="msg">The input field cannot be empty</p>`
    }
}



let getRandomFact = () =>{
    let num = Math.floor(Math.random() *301)
    fetchFact(num)
}



getFactBtn.addEventListener("click",getFact)
ranFactBtn.addEventListener("click", getRandomFact)



