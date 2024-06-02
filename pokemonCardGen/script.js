/**
 bug: "#26de8l",
dragon: "#ffeaa7",
electric: "#fed330",
fairy: "#FF0069",
fighting: "#30336b",
fire: "#f0932b",
flying: "#8lecec",
grass: "#00b894",
ground: "#EFB549",
ghost: "#a55eea",
ice: "#74b9ff",
normal: "#95afc0",
poison: "#6c5ce7",
psychic: "#a29bfe",
rock: "#2d3436",
water: "#0190FF
 */

const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#8lecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF"
}
const url = "https://pokeapi.co/api/v2/pokemon/"
const card = document.getElementById("card")
const btn = document.getElementById("btn")

let getPokeData = () => {
    // Generate a random number betwen 1 and 150
    let id = Math.floor(Math.random() * 150) + 1
    //pokeApi + randomNumber
    const finalUrl = url + id
    console.log(finalUrl);

    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => generateCard(data))

}



let generateCard = (data) =>{
    console.log(data);
    const hp = data.stats[0].base_stat
    const name = data.species.name
    const attack = data.stats[1].base_stat
    const defense = data.stats[2].base_stat
    const speed = data.stats[5].base_stat
    const imgSrc = data.sprites.other.showdown.front_default
    
    //set theme color based on pokeType

    const themeColor = typeColor[data.types[0].type.name]
    console.log(themeColor);
    
    card.innerHTML = `
            <p class="hp">
                <span>HP :</span>
                <span>${hp}</span>
                
            </p>
            <img src="${imgSrc}" alt="">
            <h2 class="poke-name">${name}</h2>
            <div class="types">
                
            </div>
            <div class="stats">
                <div>
                    <h3>${attack}</h3>
                    <p>Attack</p>
                </div>
                <div>
                    <h3>${defense}</h3>
                    <p>Defense</p>
                </div>
                <div>
                    <h3>${speed}</h3>
                    <p>Speed</p>
                </div>
            </div>
    `;

    appendTypes(data.types);
    styleCard(themeColor)
}

let appendTypes = (types) => {
    types.forEach((item) => {
        let span = document.createElement("SPAN")
        span.textContent = item.type.name
        document.querySelector(".types").appendChild(span)
    })
}


let styleCard = (color) => {
    card.style.background = `radial-gradient(
        circle at 50% 0%, ${color} 36%, white 36%
    )`;
    card.querySelectorAll(".types span").forEach(typeColor => {
        typeColor.style.backgroundColor = color
    })
}






btn.addEventListener("click", getPokeData)
window.addEventListener("load", getPokeData)



