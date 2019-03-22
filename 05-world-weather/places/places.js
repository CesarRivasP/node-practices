const axios = require('axios');


//Esta funcion permite reutilizar el codigo de abajo mas facilmente
const getPlacesLngLat = async(addr) => {

  // const encodedURL = encodeURI(argv.address); //transforma en una palabra escapada?
  const encodedURL = encodeURI(addr);
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
  // instance.get() asi se realiza sin el async await
  // .then((response) => console.log(response.data.Results[0]))
  // .catch((err) => console.log('Errorr', err))

  // With async await
  const response = await instance.get();

  if (response.data.Results.length === 0){  //No existe una direccion
    throw new Error(`No hay resultados para ${address}`)
  }

  const data    = response.data.Results[0];
  const address = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {
    address,
    lat,
    lng
  }
}

module.exports = {
  getPlacesLngLat
}

// encodeURI es una funcion de JS que convierte el parametro de un URL en un URL seguro, es decir,
// caracteres especiales los va a transformar. Asi nuestro servicio deberia funcionar
// La forma de asignar funciones como constantes de funciones de flecha es mejor porque de esa manera
// no se reemplaza o no va a ser posible que dicha funcion deje de ser una funcion porque es una constante
// y no se va a poder reasignar
