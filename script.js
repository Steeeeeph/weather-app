"use strict"; 

const city = document.querySelector("#city");

city.addEventListener('click', (event) => {
   event.preventDefault();

   // TODO Get Data through API (One day forecast)
      const cityValue = city.value;
      const apiKeyWeather = '12ce9e55f98edc446d7b88a0a9db3845';
      const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKeyWeather}` 
      // TODO Make a promise statement 
         // TODO fetch data from url
      fetch(urlWeather)
      // TODO convert results in json format
         .then(response => {
            return response.json();
         })
         // TODO then get the wanted data from the object list
         .then(collect => {
            console.log(collect);
         })
         // TODO if rejected: display what's wrong
      // TODO collect data in variables

   // TODO Overview for 5 days

   // TODO Get data to be visible in HTML > cards container

});
