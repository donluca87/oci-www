const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

app.use('/request-type', (req, res, next) => {
  console.log('Request type: ', req.method);
  next();
});

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(4000, "0.0.0.0", () => console.log('Example app is listening on port 4000.'));