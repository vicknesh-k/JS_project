const apikey = "7da37ddb4f9f07ae5987f7af1750b293";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const button = document.querySelector(".search button");
const weatherIcon = document.querySelector(".Weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src= "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src= "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src= "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src= "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src= "images/mist.png";
    }
    document.querySelector(".Weather").style.display ="block";
    document.querySelector(".error").style.display = "none";
    }
    
}
button.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});
