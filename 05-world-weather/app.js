const argv = require('./config/yargs').argv;
// const places = require('./places/places');
// const weather = require('./weather/weather');
const info = require('./information/info');

// console.log(argv.address); //after

info.getInfo(argv.address)
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
