let result = document.getElementById("result")
let searchBtn = document.getElementById("src-button")
let cityRef = document.getElementById("city")


let getWeather = () =>{
    let cityValue = cityRef.value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`;
    
    cityRef.value = ""
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let dataWeather = data.weather[0]
            let dataMain = data.main

            console.log(data);
            

            result.innerHTML = `
            
            <h2>${cityValue}</h2>
            <h4 class="weather">${dataWeather.main}</h4>
            <h4 class="descri">${dataWeather.description}</h4>
            <img src="https://openweathermap.org/img/w/${dataWeather.icon}.png" alt="">
            <h1>${dataMain.temp} &#176;</h1>
            
            <div class="temp-container">
                <div>
                    <h4 class="title">max</h4>
                    <h4 class="temp">${dataMain.temp_max}</h4>
                </div>
                <div>
                    <h4 class="title">min</h4>
                    <h4 class="temp">${dataMain.temp_min}</h4>
                </div>
            </div>
            `;
        })
        //if city name is NOT valid
        .catch(() => {
            result.innerHTML = `<h3 class="msg">City not found</h3>`
        })


    }


searchBtn.addEventListener("click" , getWeather)







/* 



*/