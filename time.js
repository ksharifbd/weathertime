const fetch = require('isomorphic-fetch');

async function fetchTime(apiKey, lat, lon) {
    const url = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lon}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch(err) {
        return err;
    }
}

module.exports = fetchTime;
