const fetch = require('isomorphic-fetch');
const {WEATHER_API_KEY} = require('./credentials.json');

async function fetchWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch(err) {
        return err;
    }
}

module.exports = fetchWeather;
