var searchButton = $('#search-button');
var searchHistoryList = $('#search-history-list');

searchHistoryList = function (cityName) {
    $('.past-search:contains("' + cityName + '")').remove();
}

// Creating entry with City name
searchButton.addClass(".btn btn-primary");
searchButton.text(cityName);

var apiKey = "1b18ce13c84e21faafb19c931bb29331"
// obtain and use data from open weather current weather API end point
var weatherInfo = function(cityName) {

}