const argv = require('./config/yargs').argv;
const places = require('./places/places');
const weather = require('./weather/weather');
// console.log(argv.address); //after

// places.getPlacesLngLat(argv.address)
//   .then((response) => console.log(response));

weather.getWeather(35.02, 139.01)
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
