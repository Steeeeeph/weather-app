"use strict";

// get value form
window.onload = function (){
   document.querySelector("#weather").style.visibility ='hidden';
}
const submit = document.getElementById("run");
const cityInput = document.getElementById("city");
let logos = [
document.getElementById("logo1"),
document.getElementById("logo2"),
document.getElementById("logo3"),
document.getElementById("logo4"),
document.getElementById("logo5"),
document.getElementById("logo6")
]
let descriptions = [
   document.getElementById("description1"),
   document.getElementById("description2"),
   document.getElementById("description3"),
   document.getElementById("description4"),
   document.getElementById("description5"),
   document.getElementById("description6")
]
let temperatures = [
   document.getElementById("temperature1"),
   document.getElementById("temperature2"),
   document.getElementById("temperature3"),
   document.getElementById("temperature4"),
   document.getElementById("temperature5"),
   document.getElementById("temperature6")
]
let minTemps = [
   document.getElementById("min-temp1"),
   document.getElementById("min-temp2"),
   document.getElementById("min-temp3"),
   document.getElementById("min-temp4"),
   document.getElementById("min-temp5"),
   document.getElementById("min-temp6"),

]
let maxTemps = [
   document.getElementById("max-temp1"),
   document.getElementById("max-temp2"),
   document.getElementById("max-temp3"),
   document.getElementById("max-temp4"),
   document.getElementById("max-temp5"),
   document.getElementById("max-temp6")
]
const dates = [
   document.getElementById("date1"),
   document.getElementById("date2"),
   document.getElementById("date3"),
   document.getElementById("date4"),
   document.getElementById("date5"),
   document.getElementById("date6"),
]

let city;
let title = document.getElementById("title");

submit.addEventListener("click", (event) => {
   event.preventDefault();
   document.querySelector("#weather").style.visibility ='visible';

   city = cityInput.value.split(' ').join('');
   console.log(city);
   title.innerText = `in ${city}`; // Adding city to title

   getWeather(city); // Calling function
   getDay(days,day);

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
   let weatherDescription1 = data.data[0].weather.description;
   let weatherDescription2 = data.data[1].weather.description;
   let weatherDescription3 = data.data[2].weather.description;
   let weatherDescription4 = data.data[3].weather.description;
   let weatherDescription5 = data.data[4].weather.description;
   let weatherDescription6 = data.data[5].weather.description;
   let weatherDescriptions = [
      weatherDescription1,
      weatherDescription2,
      weatherDescription3,
      weatherDescription4,
      weatherDescription5,
      weatherDescription6
   ];
   let weatherIcon1 = data.data[0].weather.icon;
   let weatherIcon2 = data.data[1].weather.icon;
   let weatherIcon3 = data.data[2].weather.icon;
   let weatherIcon4 = data.data[3].weather.icon;
   let weatherIcon5 = data.data[4].weather.icon;
   let weatherIcon6 = data.data[5].weather.icon;
   let weatherIcons = [
      weatherIcon1,
      weatherIcon2,
      weatherIcon3,
      weatherIcon4,
      weatherIcon5,
      weatherIcon6
   ];
   let minTemperature1 = '&#8711;' + Math.floor(data.data[0].low_temp)+ '°C';
   let minTemperature2 = '&#8711;' + Math.floor(data.data[1].low_temp)+ '°C';
   let minTemperature3 = '&#8711;' + Math.floor(data.data[2].low_temp)+ '°C';
   let minTemperature4 = '&#8711;' + Math.floor(data.data[3].low_temp)+ '°C';
   let minTemperature5 = '&#8711;' + Math.floor(data.data[4].low_temp)+ '°C';
   let minTemperature6 = '&#8711;' + Math.floor(data.data[5].low_temp)+ '°C';
   let minTemperatures = [
      minTemperature1,
      minTemperature2,
      minTemperature3,
      minTemperature4,
      minTemperature5,
      minTemperature6
   ];
   let maxTemperature1 = '&#8710;' + Math.floor(data.data[0].max_temp)+ '°C';
   let maxTemperature2 = '&#8710;' + Math.floor(data.data[1].max_temp)+ '°C';
   let maxTemperature3 = '&#8710;' + Math.floor(data.data[2].max_temp)+ '°C';
   let maxTemperature4 = '&#8710;' + Math.floor(data.data[3].max_temp)+ '°C';
   let maxTemperature5 = '&#8710;' + Math.floor(data.data[4].max_temp)+ '°C';
   let maxTemperature6 = '&#8710;' + Math.floor(data.data[5].max_temp)+ '°C';
   let maxTemperatures = [
      maxTemperature1,
      maxTemperature2,
      maxTemperature3,
      maxTemperature4,
      maxTemperature5,
      maxTemperature6
   ];
   let dayTemperature1 = Math.floor(data.data[0].temp)+ '°C';
   let dayTemperature2 = Math.floor(data.data[1].temp)+ '°C';
   let dayTemperature3 = Math.floor(data.data[2].temp)+ '°C';
   let dayTemperature4 = Math.floor(data.data[3].temp)+ '°C';
   let dayTemperature5 = Math.floor(data.data[4].temp)+ '°C';
   let dayTemperature6 = Math.floor(data.data[5].temp)+ '°C';
   let dayTemperatures = [
      dayTemperature1,
      dayTemperature2,
      dayTemperature3,
      dayTemperature4,
      dayTemperature5,
      dayTemperature6
   ];
   console.log(weatherDescriptions);
   console.log(weatherIcons);
   let i = 0;
   while (i<6){
      logos[i].src = `https://www.weatherbit.io/static/img/icons/${weatherIcons[i]}.png`;
      descriptions[i].innerHTML = weatherDescriptions[i];
      temperatures[i].innerHTML = dayTemperatures[i] ;
      minTemps[i].innerHTML = minTemperatures[i];
      maxTemps[i].innerHTML = maxTemperatures[i];
      i++;
   }
}
// TODO get dates
/*
function getDates (day, dayNumber, month, year) {
   // const days = [
   //    'Sunday',
   //    'Monday',
   //    'Tuesday',
   //    'Wednesday',
   //    'Thursday',
   //    'Friday',
   //    'Saturday'
   // ];
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
   // const dates = [
   //    document.getElementById("date1"),
   //    document.getElementById("date2"),
   //    document.getElementById("date3"),
   //    document.getElementById("date4"),
   //    document.getElementById("date5"),
   //    document.getElementById("date6"),
   // ]
   const date = new Date();
   day = date.getDay();
   dayNumber = Number(date.getDate());
   month = date.getMonth();
   year = date.getFullYear();
   console.log(days[day],dayNumber, months[month],year);
   for (let i= 0; i<6 ; i++){
      if (days[day+i] == 'Saturday'){ 
         i=0;
         i++;
      } else if (months[month+i] == 'December'){
         i=0;
         i++;
      }
   }
   dates[i].innerHTML = `${days[day+i]} ${dayNumber+i} ${months[month+i]} ${year}`;

}

getDates()
*/
function getDay(days,day) {
   days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
   ];
   const date = new Date();
   day = date.getDay();
   console.log(days[day]);
   for (let i= 0; i< days.length ; i++){
      dates[i].innerHTML = `${days[day+i]}`;

   }
}
