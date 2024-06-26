const jokeContaier = document.getElementById("joke")
const btn = document.getElementById("btn")
const url = "https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky,Christmas?lang=en&blacklistFlags=racist,sexist&type=single";

let getJoke = () => {
    jokeContaier.classList.remove('fade')
    fetch(url)
        .then(data => data.json())
        .then(item => {
            jokeContaier.textContent = `${item.joke}`;
            jokeContaier.classList.add("fade")
        })
}

btn.addEventListener('click', getJoke)

getJoke()

