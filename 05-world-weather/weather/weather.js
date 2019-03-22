const axios = require('axios');
const key = require('../constants/constants');

const getWeather = async (lat, lng) => {
  //Solo es una peticion get, no hay que configurar headers porque el api key se indica en la URL
  const response = await axios.get(`http://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key.API_KEY}`)

  return response.data.main.temp;
}

module.exports = {
  getWeather
}
