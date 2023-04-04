var searchValue = $('#search-value');
var searchHistoryList = $('#search-history-list');
var currentTemperature = $("#current-temp");
var currentHumidity = $("#current-humidity");
var windSpeed = $("#current-wind-speed");
var forecastEl = $("#forecast");
searchHistoryList = function (nameOfCity) {
    $('.past-search:contains("' + nameOfCity + '")').remove();
}
var apiKey = bd598c9d6cb7b9c64a74124c930dbdcc

// obtain and use data from open weather current weather API end point
var weatherInfo = function(nameOfCity) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + nameOfCity + '&appid=9f112416334ce37769e5c8683b218a0d')
  // obtain response and convert to objects
  .then(function(response) {
    return response.json();
  })
.then(function(response) {
  console.log(response)
  currentTemperature.text(response.main.temp)
  currentHumidity.text(response.main.humidity)
  windSpeed.text(response.wind.speed)
})
} 

// obtain and use data from open weather current weather API end point

var forecast = function(nameOfCity) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + nameOfCity + '&appid=9f112416334ce37769e5c8683b218a0d')
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response)
        for (let i = 0; i < 40; i+=8) {
         forecastEl.append( $(`
          <div>
          <p class="mb-0">Date: <span class="current-temp">${response.list[i].dt_txt.slice(0 , 10)}</span></p>
          <p class="mb-0">Temperature: <span class="current-temp">${response.list[i].main.temp}</span></p>
          <p class="mb-0">Humidity: <span class="current-humidity">${response.list[i].main.humidity}</span></p>
          <p class="mb-0">Wind Speed: <span class="current-wind-speed">${response.list[i].wind.speed}</span></p>
          </div>
          `))
          
        }

      })
}

// calling as the btn is clicked
var seachButton = $("#search-button")

function submission(event) {
    event.preventDefault();
    var nameOfCity = searchValue.val()
    console.log(nameOfCity)
    if (nameOfCity === "") {
        alert("Please enter a valid city name");
    } else {
        weatherInfo(nameOfCity);
        forecast(nameOfCity);
    }
}
seachButton.on("click" , submission)