const axios = require('axios');
const apiWeatherKey = require('../constants/constants');

const getWeather = async (lat, lng) => {
  //Solo es una peticion get, no hay que configurar headers porque el api key se indica en la URL
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiWeatherKey.WEATHER_API_KEY}`)

  return response.data.main.temp;
}

module.exports = {
  getWeather
}
