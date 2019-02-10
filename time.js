const fetch = require('isomorphic-fetch');
const {TIMEZONE_API_KEY} = require('./credentials.json');

async function fetchTime(lat, lon) {
    const url = `http://api.timezonedb.com/v2.1/get-time-zone?key=${TIMEZONE_API_KEY}&format=json&by=position&lat=${lat}&lng=${lon}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch(err) {
        return err;
    }
}

module.exports = fetchTime;
