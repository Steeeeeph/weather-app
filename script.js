"use strict"; 

const city = document.querySelector("#city");

city.addEventListener('click', (event) => {
   event.preventDefault();

   console.log(city.value);

   // TODO Get Data through API (One day forecast)
      // TODO Get appropriate API key and url
      // TODO Make a promise statement 
         // TODO fetch data from url
         // TODO convert results in json format
         // TODO then get the wanted data from the object list
         // TODO if rejected: display what's wrong
      // TODO collect data in variables

   // TODO Overview for 5 days

   // TODO Get data to be visible in HTML > cards container

});
