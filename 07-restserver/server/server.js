const express = require('express');
const app = express()

app.get('/', (request, resolve) => {
  resolve.send('Hello world');
})

app.listen(3000);
