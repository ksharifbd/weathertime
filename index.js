const time = require('./time');
const weather = require('./weather');

const args = process.argv.slice(2);

args.forEach(async argument => {
    const weatherData = await weather(argument);
    const timeeData = await time(weatherData.name);

    const result = {
        name: weatherData.name,
        weather: weatherData.weather[0].main,
        description: weatherData.weather[0].description,
        time: timeeData.time,
    };

    console.log('\n', result);
});
