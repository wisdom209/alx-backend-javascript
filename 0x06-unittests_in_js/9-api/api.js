const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get(/^\/cart\/(\d+)$/, (req, res) => {
  const id = req.params[0];

  res.send(`Payment methods for cart ${id}`);
});

const port = 7865;

app.listen(port, 'localhost', () => {
  console.log(`API avalilable on localhost port ${port}`);
});

module.exports = app;
