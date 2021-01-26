var url = config.MY_API_URL
async function getWeather() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.weather[0].main)
    if(data.weather[0].main == "Clouds"){
        document.getElementById("background-image").src = "images/clouds.jpg"
    } else if (data.weather[0].main == "Thunderstorm"){
        document.getElementById("background-image").src = "images/thunderstorm.jpg"
    } else if (data.weather[0].main == "Drizzle"){
        document.getElementById("background-image").src = "images/drizzle.jpg"
    } else if (data.weather[0].main == "Rain"){
        document.getElementById("background-image").src = "images/rain.jpg"
    } else if (data.weather[0].main == "Snow"){
        document.getElementById("background-image").src = "images/snow.jpg"
    } else if (data.weather[0].main == "Clear") {
        document.getElementById("background-image").src = "images/clear.jpg"
    } else{
        document.getElementById("background-image").src = "images/default.jpg"
    }
    
    document.getElementById("weather").innerHTML = `${data.weather[0].description}`
    document.getElementById('temperatureValue').innerHTML = `${data.main.temp}°C`
};

window.onload = getWeather();