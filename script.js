"use strict"; 

const city = document.querySelector("#city");
const submit = document.getElementById("run");
const cards = document.querySelector(".cards");
const title = document.querySelector("span");
let temperature;
let weather;
let latitude;
let longitude;
let date = new Date();
let todayNumber = date.getDay();
let date = date.getDate();
let year = date.getFullYear();

const days = [
   'Sunday',
   'Monday',
   'Tuesday',
   'Wednesday',
   'Thursday',
   'Friday',
   'Saturday'
];
const months = [
   'January',
   'February',
   'March',
   'April',
   'May',
   'June',
   'July',
   'August',
   'September',
   'October',
   'November',
   'December'
]
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
            latitude = collect.coord.lat;
            longitude = collect.coord.lon;
            return temperature, weather, latitude, longitude;
         });
         // TODO if rejected: display what's wrong

      // TODO display one day in HTML
      const displayCard = () => {
         let card;
         card = '<div class="card">';
         card += '<h2>'+ day() + '</h2>';
         card += '<h3>'+
         card += '<p>' + temperature + '</p>';
         card += '<p>' + weather + '</p>';
         card += '</div>';
         cards.innerHTML = card;
      }
      displayCard();
   // TODO Overview for 5 days
      const urlWeatherDays = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKeyWeather}&units=metric`
      fetch(urlWeatherDays)
         .then(response => {
            return response.json();
         })
         .then(collect => {
            console.log(collect);
         })
      console.log(urlWeatherDays);
   // TODO Get data to be visible in HTML > cards container

});
/*
var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];
*/