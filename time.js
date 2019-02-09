const fetch = require('isomorphic-fetch');
const {TIMEZONE_API_KEY} = require('./credentials.json');

async function fetchTime(location) {
    const url = `https://www.amdoren.com/api/timezone.php?api_key=${TIMEZONE_API_KEY}&loc=${location}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch(err) {
        return err;
    }
}

module.exports = fetchTime;
