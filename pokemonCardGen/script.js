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
}

let appendTypes = (types) => {
    types.forEach((item) => {
        let span = document.createElement("SPAN")
        span.textContent = item.type.name
        document.querySelector(".types").appendChild(span)
    })
}









btn.addEventListener("click", getPokeData)
window.addEventListener("load", getPokeData)



