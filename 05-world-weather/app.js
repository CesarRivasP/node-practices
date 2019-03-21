const argv = require('./config/yargs').argv;
const axios = require('axios');

// console.log(argv.address); //after
const encodedURL = encodeURI(argv.address); //trnasforma en una palabra escapada?
console.log(encodedURL);

// Para usar la api hay que hacer una modificacion en los headers de la peticion
// Si esa peticion no require ningun header especial, se podria hacer la llamada de la manera indicada en
// la documentacion de la pagina. Pero como se necesita configurar los headers:
// Creating an instance
const instance = axios.create({ //Esta es la instancia de la peticion
  baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
  headers: {
    // key: value
    'X-RapidAPI-Key': '4de39d5102msh47bdb2b925d4401p138b06jsnce33309bc05c'
  }
});

// Para ejecutar la instancia
instance.get()
  .then((response) => console.log(response.data.Results[0]))
  .catch((err) => console.log('Errorr', err))

// encodeURI es una funcion de JS que convierte el parametro de un URL en un URL seguro, es decir,
// caracteres especiales los va a transformar. Asi nuestro servicio deberia funcionar
