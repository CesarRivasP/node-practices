const express = require('express');
const app = express()

app.get('/', (request, resolve) => {
  // resolve.send('Hello world');
  resolve.json('Hello world');
})

app.listen(3000, () => {
  console.log(`Èscuchando por el puerto: 3000`);
});
