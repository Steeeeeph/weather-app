"use strict";

// TODO get value form
const submit = document.getElementById("run");
const cityInput = document.getElementById("city");
let city;

let title = document.getElementById("title");

submit.addEventListener("click", (event) => {
   event.preventDefault();
   city = cityInput.value;
   console.log(city);
   title.innerText = `in ${city}`; // Adding city to title

   getWeather(city); // Calling function
});
// fetch the data from api
function getWeather (city) {
      //  get api weather
   const apiKey = '0a7a8cc34dca40e79c96b44fed053223';
   const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${apiKey}&units=M&days=6`;
   console.log(url);

   fetch(url)
      .then(response => {
         return response.json();
      })
      .then(data => {
         // console.log(data);
         displayWeather(data);
         // displayForecast(data);
      })
}

function displayWeather (data) {
   let weatherDescription = data.data[0].weather.description;
   let weatherIcon = data.data[0].weather.icon;
   let minTemperature = Math.floor(data.data[0].low_temp)+ '°C';
   let maxTemperature = Math.floor(data.data[0].max_temp)+ '°C';
   let dayTemperature = Math.floor(data.data[0].temp)+ '°C';
   console.log(dayTemperature);

   document.getElementById("logo1").src = `https://www.weatherbit.io/static/img/icons/${weatherIcon}.png`;
   document.getElementById("description1").innerHTML = weatherDescription;
   document.getElementById("temperature1").innerHTML = dayTemperature ;
   document.getElementById("min-temp1").innerHTML = minTemperature;
   document.getElementById("max-temp1").innerHTML = maxTemperature;
}
// TODO get the data to display 1 day
// TODO get dates
// TODO get data to display next 5 days



