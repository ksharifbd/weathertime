const commander = require('commander');

const time = require('./time');
const weather = require('./weather');

const commands = ['--wak', '--tak'];

commander
    .version('0.1.0', '-v, --version')
    .option(commands[0], 'provide weather api key')
    .option(commands[1], 'provide time api key')
    .parse(process.argv);

const args = process.argv.slice(2);
const removableValuesFromArgs = [...commands];

let weatherApiKey;
let timeApiKey;

if(commander.wak) {
    weatherApiKey = args[args.indexOf('--wak') + 1];
    removableValuesFromArgs.push(weatherApiKey);
} else {
    console.log('please provide weather api key using --wak');
}

if(commander.tak) {
    timeApiKey = args[args.indexOf('--tak') + 1];
    removableValuesFromArgs.push(timeApiKey);
} else {
    console.log('please provide time api key using --tak');
}

args
    .filter(arg => !removableValuesFromArgs.includes(arg))
    .forEach(async argument => {

    try {
        const weatherData = await weather(weatherApiKey, argument);

        const {lat, lon} = weatherData.coord;
    
        const timeData = await time(timeApiKey, lat, lon);
    
        const output = {
            name: weatherData.name,
            weather: weatherData.weather[0].main,
            description: weatherData.weather[0].description,
            time: timeData.formatted,
        };
    
        console.log('\n', output);
    } catch(err) {
        console.error(err);
    }
});
