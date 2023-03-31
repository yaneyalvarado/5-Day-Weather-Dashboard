var searchValue = $('#search-value').val("");
var searchHistoryList = $('#search-history-list');
// var today = dayjs().format("MM, DD, YYYY");
var currentTemperature = $("#current-temp");
var currentHumidity = $("#current-humidity");
var windSpeed = $("#current-wind-speed");
var forecast = $("#forecast");
searchHistoryList = function (cityName) {
    $('.past-search:contains("' + cityName + '")').remove();
}

// Creating entry with City name
searchButton.addClass(".btn btn-primary");
searchButton.text(cityName);

// obtain and use data from open weather current weather API end point
var weatherInfo = function(cityName) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=9f112416334ce37769e5c8683b218a0d')
  // obtain response and convert to objects
  .then(function(response) {
    return response.json();
  })

} 

// obtain and use data from open weather current weather API end point

var forecast = function(searchButton) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=9f112416334ce37769e5c8683b218a0d')
      .then(function(response) {
        return response.json();
      })
}

// calling as the btn is clicked
var seachButton = $("#search-button")

function submission(event) {
    event.preventDefault();
    console.log("search-button-clicked")
    if (searchButton === "") {
        alert("Please enter a valid city name");
        event.preventDefault();
    } else {
        weatherInfo(cityName);
        forecast(cityName);
    }
}
seachButton.on("click" , submission)