const {flow} = require('lodash');

const fetcher = require('./fetcher');

function constructApiUrl(apiKey, location) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
}

const fetchWeather = flow([
    constructApiUrl,
    fetcher,
]);

module.exports = fetchWeather;
