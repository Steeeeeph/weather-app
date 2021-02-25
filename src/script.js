"use strict";
require("./style.css");

const submit = document.getElementById("run");
const cityInput = document.getElementById("city");
let title = document.getElementById("queriedCity");
const weather = document.getElementById('weather');
const forecast = document.getElementById('forecast');

let city;
const weatherDescriptions = [];
const weatherIcons = [];
const minTemperatures = [];
const maxTemperatures = [];
const dayTemperatures = [];

const daysOfWeek = [
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
];

submit.addEventListener("click", (event) => {
   event.preventDefault();
   city = cityInput.value.split(' ').join('');
   console.log(city);
   title.innerText = ` ${city}`; // Adding city to title

   getWeather(city);
   getDay(daysOfWeek);
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
         // displayWeather(data);
         displayForecast(data);
      })
}

// get data to display today and next 5 days
function displayForecast (data) {
   let i;
   let j;

   for (i=0; i < 6; i++) {
      weatherDescriptions.push(data.data[i].weather.description);
      weatherIcons.push(data.data[i].weather.icon);
      minTemperatures.push('&#8711;' + Math.floor(data.data[i].low_temp)+ '°C');
      maxTemperatures.push('&#8711;' + Math.floor(data.data[i].max_temp)+ '°C');
      dayTemperatures.push(Math.floor(data.data[i].temp)+ '°C');
   }

   todaysWeather(0);

   for (j=1; j < 6; j++) {
      forecasting(j);
   }
}
   
function todaysWeather(i) {
   weather.innerHTML += `<div class="card" id="day ${i}">`;
   weather.innerHTML += `<h3 id="date ${i}">Date ${i}</h3>`; //TODO day indication
   weather.innerHTML += `<img id="logo${i}" src="https://www.weatherbit.io/static/img/icons/${weatherIcons[i]}.png" alt="weather-icon">`;
   weather.innerHTML += `<h4 id="description ${i}">${weatherDescriptions[i]}</h4>`;
   weather.innerHTML += `<h4 id="temperature ${i}">${dayTemperatures[i]}</h4>`;
   weather.innerHTML += `<h6> <span id="min-temp ${i}">${minTemperatures[i]}</span> <span id="max-temp ${i}">${maxTemperatures[i]}</span></h6>`;
   weather.innerHTML += '</div>';
}

function forecasting(j){
   forecast.innerHTML += `<div class="card" id="day ${j}">`;
   forecast.innerHTML += `<h3 id="date ${j}">Date ${j}</h3>`; //TODO day indication
   forecast.innerHTML += `<img id="logo${j}" src="https://www.weatherbit.io/static/img/icons/${weatherIcons[j]}.png" alt="weather-icon">`;
   forecast.innerHTML += `<h4 id="description ${j}">${weatherDescriptions[j]}</h4>`;
   forecast.innerHTML += `<h4 id="temperature ${j}">${dayTemperatures[j]}</h4>`;
   forecast.innerHTML += `<h6> <span id="min-temp ${j}">${minTemperatures[j]}</span> <span id="max-temp ${j}">${maxTemperatures[j]}</span></h6>`;
   forecast.innerHTML += '</div>';
}

// TODO get dates
function getDay(daysOfWeek) {
   const days = [];
   const date = new Date();
   let day = date.getDay();
   console.log(daysOfWeek[day]);
   console.log(daysOfWeek.length);

   for (let i= 0; i< daysOfWeek.length ; i++){
      days.push(daysOfWeek[day+i]);

      if (i=daysOfWeek.length){
         i=0;
      }
      // dates[i].innerHTML = `${daysOfWeek[day+i]}`;

   }
   console.log(days);
}
// function getDates (day, dayNumber, month, year) {


//    const date = new Date();
//    day = date.getDay();
//    dayNumber = Number(date.getDate());
//    month = date.getMonth();
//    year = date.getFullYear();
//    console.log(days[day],dayNumber, months[month],year);
//    for (let i= 0; i<6 ; i++){
//       if (days[day+i] == 'Saturday'){ 
//          i=0;
//          i++;
//       } else if (months[month+i] == 'December'){
//          i=0;
//          i++;
//       }
//    }
//    dates[i].innerHTML = `${days[day+i]} ${dayNumber+i} ${months[month+i]} ${year}`;

// }

// getDates()


