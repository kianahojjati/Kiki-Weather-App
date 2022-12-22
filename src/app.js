function displayTemperature(response) {
  console.log(response.data);

  let temperatureElement = document.querySelector("#temperature");
  let cityEelement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityEelement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "a0c5ab4cfba44d5ef82tbo6836cd895a";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Tehran&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
