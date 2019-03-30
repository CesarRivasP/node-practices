const express = require('express');
const app = express();  //Esto nos permite utilizar express

//Aqui se esta configurando una solicitud get cuando el path sea '/'
//todas las peticiones que entren por '/' van a ejercutar el callback
app.get('/', (request, response) => {
  // response.send('hello world')
  let back = {
    name: 'Cesar',
    age: 23,
    url: request.url
  }

  response.send(back)
});
// Example for other url
// app.get('/data', (request, response) => {
//   response.send('hello world: data');
// });

//El app.listen tambien recibe un callback
// app.listen(3000); before
app.listen(3000, () => {
  console.log('escuchando peticiones en el puerto 3000');
  //Se despliega cuando el app.listen se levante
});


/*
- Este ejercicio solo es valido para una direccion con url '/'
- Si se le quiere agregar algo a la url hay que crear otro servicio o configuracion para esa url en especifico
*/
