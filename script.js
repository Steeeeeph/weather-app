"use strict"; 

const city = document.querySelector("#city");
const submit = document.getElementById("run");
const cardsPosition = document.querySelector(".cards");
const title = document.querySelector("span");
let temperature = [];
let weather = [];
let weatherIcon = [];
let countryValue;
let latitude;
let longitude;

let date = new Date();
let dayNumberToday = date.getDay();


let dateNumber = date.getDate();
let month = date.getMonth();
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
console.log(days[dayNumberToday], dayNumberToday, months[month], year)

let dayName = () => {
   days[dayNumberToday];
   if (days[dayNumberToday]) {
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
      title.innerText = `in ${cityValue}`; // Adding city to title
 
      fetch(urlWeather)
         .then(response => {
            return response.json();
         })
         .then(collect => {
            console.log(collect);
            temperature.push(collect.main.temp + '°C');
            weather.push(collect.weather[0].description);
            weatherIcon.push(collect.weather[0].icon);
            latitude = collect.coord.lat;
            longitude = collect.coord.lon;
            return temperature, weather, weatherIcon, latitude, longitude;
         });
         console.log(urlWeather);
         console.log(temperature);

         // TODO if rejected: display what's wrong

      // TODO display one day in HTML
      // const displayCard = () => {
      //    let card;
      //    card = '<div class="card">';
      //    card += '<h2>'+ dayName() + '</h2>';
      //    card += `<h3>${dayNumberToday} ${months[month]} ${year}</h3>`
      //    card += '<p>' + weather + '</p>';
      //    card += `<image src="http://openweathermap.org/img/wn/${weatherIcon}.png">`;
      //    card += '<p>' + temperature + '</p>';
      //    card += '</div>';
      //    cards.innerHTML = card;
      // }
      // displayCard();

   // TODO Overview for 5 days

      // TODO get data per day
      const urlWeatherDays = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=${apiKeyWeather}&units=metric`
      // const urlWeatherDays = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKeyWeather}&units=metric`
      fetch(urlWeatherDays)
         .then(response => {
            return response.json();
         })
         .then(collect => {
            console.log(collect);
            for (let i = 0; i < 5; i++) {
               temperature.push(collect.daily[i].temp.day + '°C');
               weather.push(collect.daily[i].weather[0].description);
               weatherIcon.push(collect.daily[i].weather[0].icon);
               return temperature, weather, weatherIcon;
            }
         })
      console.log(urlWeatherDays);
      console.log(temperature);

   // TODO Get data to be visible in HTML > cards container
         // TODO display multiple cards

         const displayCards = () => {
            let cards;
            cards = '<div class= "card-container">'
                  for(let i = 0; i < 4; i++){
                  cards += `<div class=" card card${i}">`;
                  // card += '<h2>'+ dayName() + '</h2>';
                  cards += `<h3>${dayNumberToday} ${months[month]} ${year}</h3>`
                  cards += '<p>' + weather + '</p>';
                  cards += `<image src="http://openweathermap.org/img/wn/${weatherIcon}.png">`;
                  cards += '<p>' + temperature + '</p>';
                  cards += '</div>';
               }
            cards += '</div>';

            cardsPosition.innerHTML = cards;
         }
         displayCards();
         /*
            const target = document.getElementById('forecast');
            const html = (`
               <div class="card">
                     <div class="card-body">
                        <p class="title">${aeris.utils.dates.format(date, 'dddd')}</p>
                        <p><img class="icon" src="${icon}"></p>
                        <p class="wx">${weather}</p>
                        <p class="temps"><span>High:</span>${maxTempF} <span>Low:</span>${minTempF}</p>
                     </div>
               </div>
            `);

            target.insertAdjacentHTML('afterbegin', html);
            */
         // TODO display the different dates per cards
         /*
         for (let day = 0; day < 5; day++){

         };
         let dayNumberForecast = () => {
            for (let i=dayNumberToday; i<7; i++){
               return dayNumberToday += i;
            }
         }
         console.log(dayNumberForecast());
         // TODO display the different data per cards
*/

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