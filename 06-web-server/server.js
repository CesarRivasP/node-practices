const express = require('express');
const app = express();  //Esto nos permite utilizar express

const hbs = require('hbs');

// middleware -> use(especificar un callback -> express.static(folder que se quiere servir o que sea publico))
app.use(express.static(__dirname + '/public'));

//Para indicarle a hbs que hay un directorio que va a contener todos los parciales
hbs.registerPartials(__dirname + '/views/partials');
// Express hbs
app.set('view engine', 'hbs');

/*app.get('/', (request, response) => {  BEFORE, first example
  // response.send('hello world')
  let back = {
    name: 'Cesar',
    age: 23,
    url: request.url
  }

  response.send(back)
});*/

//After - Second Example
app.get('/', (request, response) => {

  response.render('home', {
    name: 'César',
    anio: new Date().getFullYear()  //Para generar un año de forma dinamica
  });
});

app.get('/about', (request, response) => {
  
  response.render('about', {
    anio: new Date().getFullYear()  //Para generar un año de forma dinamica
  })
});

app.listen(3000, () => {
  console.log('escuchando peticiones en el puerto 3000');
});
