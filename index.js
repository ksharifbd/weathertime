const commander = require('commander');

const time = require('./time');
const weather = require('./weather');

let apiKey = {
    commands: ['wak', 'tak'],
    wak: ['weather'],
    tak: ['time'],
};

commander
    .version('0.1.0', '-v, --version')
    .option(`--${apiKey.commands[0]}`, 'provide weather api key')
    .option(`--${apiKey.commands[1]}`, 'provide time api key')
    .parse(process.argv);

const args = process.argv.slice(2);

const removableValuesFromArgs = apiKey.commands.map(command => `--${command}`);

const storeApiKey = command => {
    if(commander[command]) {
        apiKey[command].push(args[args.indexOf(`--${command}`) + 1]);
        removableValuesFromArgs.push(apiKey[command][1]);
    }
};

const showMissingArgMessage = command => {
    if(!commander[command]) {
        console.log(`Please provide api key for ${apiKey[command][0]} using --${command}`);
    }
}

apiKey.commands.forEach(command => {
    storeApiKey(command);
    showMissingArgMessage(command);
});

args
    .filter(arg => !removableValuesFromArgs.includes(arg))
    .forEach(async argument => {

    try {
        const weatherData = await weather(apiKey.wak[1], argument);

        const {lat, lon} = weatherData.coord;
    
        const timeData = await time(apiKey.tak[1], lat, lon);
    
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
