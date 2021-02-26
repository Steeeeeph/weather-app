"use strict";
// require("./style.css");
import './style.scss';
import { createApi } from "unsplash-js";
// import img from './file.png';

const submit = document.getElementById("run");
const cityInput = document.getElementById("city");
let title = document.getElementById("queriedCity");
const weather = document.getElementById('weather');
const forecast = document.getElementById('forecast');
const date = new Date();

let city;
const weatherDescriptions = [];
const weatherIcons = [];
const minTemperatures = [];
const maxTemperatures = [];
const dayTemperatures = [];
const datetimes = [];
const daysOfWeek = [
   'Sunday',
   'Monday',
   'Tuesday',
   'Wednesday',
   'Thursday',
   'Friday',
   'Saturday'
];
const days = [];
const dayNumbers = [];
const monthNumbers = [];
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


/*
const unsplash = createApi({
   accessKey:"UrsGm-KmBSCSn1BXyGEdpatCBTej2tCwOjQSzshx_vY",
});

function getbackgroundImage (city) {
   unsplash.photos.get(city).then(response=> {
      return response.json();
   })
   .then(data => {
      console.log(data);
   });
} */



submit.addEventListener("click", (event) => {
   event.preventDefault();
   city = cityInput.value.split(' ').join('');
   console.log(city);
   title.innerText = ` ${city}`; // Adding city to title

   getWeather(city);
   if (days.length < 6) {

      getForecastDates();
   }
   console.log(days);
   // TODO 
   getbackgroundImage(city);

});


function getbackgroundImage (city) {
   const accessKey="UrsGm-KmBSCSn1BXyGEdpatCBTej2tCwOjQSzshx_vY";

   const urlUnsplash = `https://api.unsplash.com/search/photos&query=${city}&client_id=${accessKey}`;

   fetch(urlUnsplash)
   .then(response=> {
      return response.json();
   })
   .then(data => {
      console.log(data);
   });
}
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
         // displayWeather(data);
         displayForecast(data);
      });
}

// get data to display today and next 5 days
function displayForecast (data) {
   let i;
   let j;

   for (i=0; i < 6; i++) {
      datetimes.push(data.data[i].datetime);
      weatherDescriptions.push(data.data[i].weather.description);
      weatherIcons.push(data.data[i].weather.icon);
      minTemperatures.push('&#8711;' + Math.floor(data.data[i].low_temp)+ '°C');
      maxTemperatures.push('&#8711;' + Math.floor(data.data[i].max_temp)+ '°C');
      dayTemperatures.push(Math.floor(data.data[i].temp)+ '°C');
   }
   console.log(datetimes);
   datetimes.forEach(datetime => {
      let object = datetime.split('-');
      dayNumbers.push(Number(object[2]));
      monthNumbers.push(Number(object[1])-1);
   });
   console.log(typeof(monthNumbers[0]));

   todaysWeather(0);

   for (j=1; j < 6; j++) {
      forecasting(j);
   }
}

function todaysWeather(i) {
   // weather.innerHTML += `<div class="card" id="day ${i}">`;
   weather.innerHTML += '<h3>Today</h3>';
   weather.innerHTML += `<h3 id="date ${i}">${days[i]} ${dayNumbers[i]} ${months[monthNumbers[i]].substr(0, 3)}</h3>`; //TODO day indication
   weather.innerHTML += `<img id="logo${i}" src="https://www.weatherbit.io/static/img/icons/${weatherIcons[i]}.png" alt="weather-icon">`;
   weather.innerHTML += `<h4 id="description ${i}">${weatherDescriptions[i]}</h4>`;
   weather.innerHTML += `<h4 id="temperature ${i}">${dayTemperatures[i]}</h4>`;
   weather.innerHTML += `<h6> <span id="min-temp ${i}">${minTemperatures[i]}</span> <span id="max-temp ${i}">${maxTemperatures[i]}</span></h6>`;
   // weather.innerHTML += '</div>';
}

function forecasting(j){
   let cardDiv = document.createElement('div');
   cardDiv.classList.add('card');
   forecast.appendChild(cardDiv);
   // forecast.innerHTML += `<div class="card" id="day ${j}">`;
   cardDiv.innerHTML += `<h3 id="date ${j}">${days[j]} ${dayNumbers[j]} ${months[monthNumbers[j]].substr(0, 3)}</h3>`; //TODO day indication
   cardDiv.innerHTML += `<img id="logo${j}" src="https://www.weatherbit.io/static/img/icons/${weatherIcons[j]}.png" alt="weather-icon">`;
   cardDiv.innerHTML += `<h4 id="description ${j}">${weatherDescriptions[j]}</h4>`;
   cardDiv.innerHTML += `<h4 id="temperature ${j}">${dayTemperatures[j]}</h4>`;
   cardDiv.innerHTML += `<h6> <span id="min-temp ${j}">${minTemperatures[j]}</span> <span id="max-temp ${j}">${maxTemperatures[j]}</span></h6>`;
   // forecast.innerHTML += '</div>';
}

// TODO get dates
function getForecastDates() {
   handleDaysOfTheWeek();
   handleDayNumber();
}

function handleDaysOfTheWeek() {
   const dayRaw = date.getDay();
   let day = dayRaw;
   if (days.length < 6) {
      for (let k = 0; k < daysOfWeek.length ; k++) {
         if ((day+k) < daysOfWeek.length){
            pushToArray(days, daysOfWeek[day+k]);
         } else {
            day = 0;
            k = 0;
            pushToArray(days, daysOfWeek[day+k]);
         }
      }
   }
}
function handleDayNumber() {
   const dayNumberRaw = date.getDate();
   let dayNumber = dayNumberRaw;

}
function pushToArray(array, index) {
   array.push(index);
}

