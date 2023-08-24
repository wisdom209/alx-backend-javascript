const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get(/^\/cart\/(\d+)$/, (req, res) => {
  const id = req.params[0];

  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post('/login', (req, res) => {
  const username = req.body.userName;
  if (username) res.send(`Welcome ${username}`);
  else res.sendStatus(400);
});

const port = 7865;

app.listen(port, 'localhost', () => {
  console.log(`API avalilable on localhost port ${port}`);
});

module.exports = app;
