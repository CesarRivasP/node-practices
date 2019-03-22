const argv = require('./config/yargs').argv;
const places = require('./places/places')
// console.log(argv.address); //after

places.getPlacesLngLat(argv.address)
  .then((response) => console.log(response));
