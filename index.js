function renderWeather(weather) {
    console.log(weather);
    var resultsContainer = document.querySelector("#weather-results");
    var city = document.createElement("h2")
    city.textContent = weather.name;
    resultsContainer.append(city);

    var temp = document.createElement("p");
    temp.textContent = "Temp: " + weather.main.temp + " °F";
    resultsContainer.append(temp);

    var humidity = document.createElement("p");
    humidity.textContent = "Humidity: " + weather.main.humidity + "%";
    resultsContainer.append(humidity);

    var wind = document.createElement("p");
    wind.textContent = "Wind: " + weather.wind.speed + " mph ";
    resultsContainer.append(wind);

    var weatherDetails = weather.weather[0];
    if (weatherDetails && weatherDetails.description) {
        var description = document.createElement("p");
        description.textContent = weatherDetails.description;
        resultsContainer.append(description);
    }

}


function getWeather() {
    var cityInput = document.getElementById("cityInput").value;

    if (cityInput.trim() === "") {
        alert("Please enter a city.");
        return;
    }

    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=imperial&appid=7286e01433d7ba81ded27b304e6a19b7";

    fetch(url)
        .then((response) => response.json())
        .then((data) => renderWeather(data))
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            alert("Error, please try again later.");
        });
}