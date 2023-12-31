function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  let losAngelesTime = moment().tz("America/Los_Angeles");


  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss:SSS [<small>]A[</small>]");


//Sydney
let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");

let sydneyTime = moment().tz("Australia/Sydney");


sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do, YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss:SSS [<small>]A[</small>]");
 
  //Lisbon
  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDateElement = lisbonElement.querySelector(".date");
  let lisbonTimeElement = lisbonElement.querySelector(".time");
  
  let lisbonTime = moment().tz("Europe/Lisbon");
  
  
  lisbonDateElement.innerHTML = lisbonTime.format("MMMM Do, YYYY");
  lisbonTimeElement.innerHTML = lisbonTime.format("h:mm:ss:SSS [<small>]A[</small>]");
   

}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone); 
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city"<div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
  </div>
  <div class="time">${cityTime.format("h:mm:ss:SSS")} <small>${cityTime.format("A")}</small></div>
</div>
  `;
}

updateTime();
setInterval(updateTime, 1);
//SSS=milliseconds also 1=milliseconds. 1000=just every second=ss

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);



