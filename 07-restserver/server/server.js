const express = require('express');
const app = express()

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.get('/user', (request, resolve) => {
  // resolve.send('Hello world');
  resolve.json('getUser');
});

app.post('/user', (request, resolve) => {
  // resolve.json('postUser');

// El body es lo que va a aparecer cuando el body Parser procese cualquier payload que reciba en las peticiones
// funciona para las peticiones post, put, delete
  let body = request.body;

  resolve.json({
    user: body
  })
});

app.put('/user/:id', (request, resolve) => {
  let id = request.params.id; //para obtener el id que llega desde la url

  // resolve.json('putUser');
  resolve.json({
    id
  });
});

app.delete('/user', (request, resolve) => {
  resolve.json('deleteUser');
});

app.listen(3000, () => {
  console.log(`Èscuchando por el puerto: 3000`);
});
