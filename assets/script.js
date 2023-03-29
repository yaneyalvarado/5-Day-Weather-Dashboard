var searchButton = $('#search-button');
var searchHistoryList = $('#search-history-list');

searchHistoryList = function (cityName) {
    $('.past-search:contains("' + cityName + '")').remove();
}

searchButton.addClass(".btn btn-primary");