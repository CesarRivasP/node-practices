const express = require('express');
const app = express();  //Esto nos permite utilizar express

// middleware -> use(especificar un callback -> express.static(folder que se quiere servir o que sea publico))
app.use(express.static(__dirname + '/public'));

// app.get('/', (request, response) => {
//   // response.send('hello world')
//   let back = {
//     name: 'Cesar',
//     age: 23,
//     url: request.url
//   }
//
//   response.send(back)
// });

app.listen(3000, () => {
  console.log('escuchando peticiones en el puerto 3000');
});
