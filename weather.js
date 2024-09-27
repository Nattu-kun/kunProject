
const apikey = "8ab575325f53cbf2ef1439bb756d480b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {

        var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed+ " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "icon & image/icons8-partly-cloudy-day-96.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "icon & image/sun.png";
    }
    
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "icon & image/icons8-rain-96.png";
    }
    
    else if(data.weather[0].main == "mist"){
        weatherIcon.src = "icon & image/mist.png";
    }
    
    else if(data.weather[0].main == "drizzle"){
        weatherIcon.src = "icon & image/drizzle.png";
    }
    else if(data.weather[0].main == "snow"){
        weatherIcon.src = "icon & image/snow.png";
    }
    else if(data.weather[0].main == "night"){
        weatherIcon.src = "icon & image/icons8-night-96.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    
    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})