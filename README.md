## weathertime is a node CLI program which returns current time and weather

### **How to run**
- Clone the repo
- Go to the repo directory
- run `npm i`
- run `node index.js --wak [api key for weather] --tak [api key for time] [list of cities or zip codes]`

### **How to get the API keys**
- For weather API key signup at [OpenWeatherMap](https://openweathermap.org/) 
- For time API key signup at [TimeZoneDB](https://timezonedb.com/)

### **Example**

Input
```
node index.js --wak weatherApiKey --tak timeApiKey london delhi
```

output
```
{ name: 'London',
  weather: 'Clouds',
  description: 'scattered clouds',
  time: '2019-02-12 04:26:31' }

{ name: 'Delhi',
  weather: 'Fog',
  description: 'fog',
  time: '2019-02-12 09:56:31' }
```