const {flow} = require('lodash');

const fetcher = require('./fetcher');

function constructApiUrl(apiKey, lat, lon) {
    return `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lon}`;
}

const fetchTime = flow([
    constructApiUrl,
    fetcher,
]);

module.exports = fetchTime;
