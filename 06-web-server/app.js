const http = require('http');

// Para crear el server
//         (callback con los request y las respuestas que el server va a enviar )
http.createServer((request, response) => {
  // response.write('Hello World')

  // Si el despliegue regresara un JSON y fuera un servicio
  response.writeHead(200, { 'Content-Type': 'application/json'});

  let back = {
    name: 'Cesar',
    age: 23,
    url: request.url
  }

  response.write(JSON.stringify(back));

  //Para indicar que ya se termino de crear la respuesta
  response.end();
})
.listen(8080);

console.log('Listen for port 8080');
