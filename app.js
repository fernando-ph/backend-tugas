const express = require('express')
const app = express()
const port = 3000
const {Conneciton, Request} = require('./db');

app.get('/products', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})