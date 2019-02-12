const fetch = require('isomorphic-fetch');

async function fetcher(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch(err) {
        return err;
    }
}

module.exports = fetcher;
