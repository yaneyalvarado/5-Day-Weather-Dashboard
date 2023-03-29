var searchButton = $('#search-button');
var searchHistoryList = $('#search-history-list');

searchHistoryList = function (cityName) {
    $('.past-search:contains("' + cityName + '")').remove();
}

// Creating entry with City name
searchButton.addClass(".btn btn-primary");
searchButton.text(cityName);