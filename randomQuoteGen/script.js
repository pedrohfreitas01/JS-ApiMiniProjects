const quote = document.getElementById("container")
const author = document.getElementById("author")
const btn = document.getElementById("btn")

const url = "https://api.quotable.io/random"


let getQuote = () => {
    fetch(url)
        .then((data) => data.json())
        .then((item) =>{
            console.log(item.content);
            console.log(item);
            quote.innerHTML = `
            
            <p id="quote">
            ${item.content}
            </p>
            <h3 id="author">${item.author}</h3>
            
            `
        
        })
}


btn.addEventListener("click", getQuote)