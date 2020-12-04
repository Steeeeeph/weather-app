"use strict"; 

const city = document.querySelector("#city");
const submit = document.getElementById("run");
const cards = document.querySelector(".cards");
const title = document.querySelector("span");
let temperature;
let weather;
let date = new Date();
let todayNumber = date.getDay();

const days = [
   'Sunday',
   'Monday',
   'Tuesday',
   'Wednesday',
   'Thursday',
   'Friday',
   'Saturday'
];
let day = () => {
   days[todayNumber];
   if (days[todayNumber]) {
      return 'Today';
   }
};

// for (let i = today+1; i< days.length; i++) {
//    let 
// }


submit.addEventListener('click', (event) => {
   event.preventDefault();

   // TODO Get Data through API (One day forecast) => 5days
      const cityValue = city.value;
      const apiKeyWeather = '12ce9e55f98edc446d7b88a0a9db3845';
      const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKeyWeather}&units=metric`;

      title.innerText = `in ${cityValue}`;
   
      fetch(urlWeather)
         .then(response => {
            return response.json();
         })
         .then(collect => {
            console.log(collect);
            temperature = collect.main.temp + '°C';
            weather = collect.weather[0].main;
            return temperature, weather;
         });
         // TODO if rejected: display what's wrong
      
      // TODO display one day in HTML
      const displayCard = () => {
         let card;
         card = '<div class="card">';
         // card += '<h1>'+ cityValue + '</h1>';
         card += '<h2>'+ day() + '</h2>';
         card += '<p>' + temperature + '</p>';
         card += '<p>' + weather + '</p>';
         card += '</div>';
         cards.innerHTML = card;
      }
      displayCard();
   // TODO Overview for 5 days

   // TODO Get data to be visible in HTML > cards container

});
