let searchBox = document.querySelector(".search-input");
let temperature = document.querySelector(".temperature");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind_speed");
let btnSearch = document.querySelector(".btn-search")
let city = document.querySelector(".city");
let condiImg = document.querySelector(".condi-img");
let weather = document.querySelector(".weather");
let day = document.querySelector(".day")

let apiKey = "886705b4c1182eb1c69f28eb8c520e20";
let api ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 
async function checkWeather(cit){
    const response = await fetch(api + cit + `&appid=${apiKey}`);
    if(response.status == 404 ){
        searchBox.classList.add("check");
        alert("Your city name is invalid");
    }else if(searchBox.value == ""){
        alert("Please enter a city name");
    }
    else{
        searchBox.classList.remove("check");
        weather.style.display = "block";
        let data = await response.json();  
        console.log(data);
            const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            const dt = new Date();
            let da = dt.getDay();
            day.innerHTML = weekday[da];
            temperature.innerHTML = Math.round(data.main.temp) + " °C";
            if(data.weather[0].main == "Clouds"){
                condiImg.src = "images/clouds.png";
            }else if(data.weather[0].main == "Rain"){
                condiImg.src = "images/rain.png";
            }else if(data.weather[0].main == "Snow"){
                condiImg.src = "images/snow.png";
            }else if(data.weather[0].main == "Mist"){
                condiImg.src = "images/mist.png";
            }else if(data.weather[0].main == "Drizzle"){
                condiImg.src = "images/drizzle.png";
            }else if(data.weather[0].main == "Clear"){
                condiImg.src = "images/clear.png";
            }
            city.innerHTML =" " + data.name;
            humidity.innerHTML = data.main.humidity + " %";
            windSpeed.innerHTML = data.wind.speed + " Km/h";
    }
}

btnSearch.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});

