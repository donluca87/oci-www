const express = require('express');

const app = express();
const path = require('path');

app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

app.use('/request-type', (req, res, next) => {
  console.log('Request type: ', req.method);
  next();
});

app.get('/', (req, res) => {
  //res.send('Successful response.');
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.listen(8080, () => console.log('Example app is listening on port 8080.'));
