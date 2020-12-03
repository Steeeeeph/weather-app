"use strict"; 

const city = document.querySelector("#city");

city.addEventListener('click', (event) => {
   event.preventDefault();

   // TODO Get Data through API (One day forecast)
      const cityValue = city.value;
      const apiKeyWeather = '12ce9e55f98edc446d7b88a0a9db3845';
      const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKeyWeather}&units=metric` 
      // TODO Make a promise statement 
      fetch(urlWeather)
         .then(response => {
            return response.json();
         })
         .then(collect => {
            console.log(collect);
            let temperature = collect.main.temp + '°C';
            let weather = collect.weather[0].main;
         });
         console.log(urlWeather);
         // TODO if rejected: display what's wrong
      // TODO collect data in variables

   // TODO Overview for 5 days

   // TODO Get data to be visible in HTML > cards container

});
