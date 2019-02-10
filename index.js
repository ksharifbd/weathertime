const time = require('./time');
const weather = require('./weather');

const args = process.argv.slice(2);

args.forEach(async argument => {
    const weatherData = await weather(argument);

    const {lat, lon} = weatherData.coord;

    const timeData = await time(lat, lon);

    const result = {
        name: weatherData.name,
        weather: weatherData.weather[0].main,
        description: weatherData.weather[0].description,
        time: timeData.formatted,
    };

    console.log('\n', result);
});
