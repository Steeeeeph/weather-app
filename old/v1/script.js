"use strict";

// todo: onclick: get the value from te form and compare to database
//  todo: displaying the data to the html
(() => {


   // paths to html directories
   const form = document.querySelector(".top-banner form");
   const input = document.querySelector(".top-banner input");
   const msg = document.querySelector(".top-banner .msg");
   const list = document.querySelector(".ajax-section .cities");
   let CurrentTemp;
   let weather;


   // api key and url
   const apiKeyGoogleGeo = 'AIzaSyB07Ap9NAvpsYBiqat5076lJ-55navWd8o';
   const apiKeyOpenWeather = '932b6a5aaef12ca57adc53b420b05fe3';

   // submit action without page refreshing
   form.addEventListener("submit", (event) => {
      event.preventDefault();
      let inputValue = input.value;
      
      // AJAX
      // Geocoding Google Maps
      const urlGeo = `https://maps.googleapis.com/maps/api/geocode/json?address=${inputValue}&key=${apiKeyGoogleGeo}`
      // todo longitude/latitude
      fetch(urlGeo)
      .then(response => {
         response.json();

      })
      .then(data => {
         let latitude = data.results.geometry.location.lat;
      })
      .catch(() => {
         // msg.textContent = 'Please search for a valid city 😩';
      });
      console.log(urlGeo);
      console.log(data.latitude);


      
/*
      // Openweather
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=apiKeyOpenWeather}&units=metric`;
      fetch(url)
         .then(response => {response.json();})
         .then(data => {
         })
         .catch(() => {
            msg.textContent = 'Please search for a valid city 😩';
         });

         console.log(url);
*/
   });

// end of function
})();
