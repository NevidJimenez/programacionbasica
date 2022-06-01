const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('CHINGA TU COLA !!! ')
})

app.listen(3000);