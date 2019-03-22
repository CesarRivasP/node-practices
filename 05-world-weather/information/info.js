const axios = require('axios');
const places = require('../places/places');
const weather = require('../weather/weather');


const getInfo = async (address) => {
  try {
    const placesData =  await places.getPlacesLngLat(address)

    const weatherData = await weather.getWeather(placesData.lat, placesData.lng)

    return `En la ciudad ${address} el clima es de ${weatherData}`
  }
  catch(err) {
    return `No se pudo determinar el clima de la ${address}`
  }
}

module.exports = {
  getInfo
}
