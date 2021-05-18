const express = require('express');
const app = express();
const port = 3000;
const {connection} = require('./db');

app.get('/products', (req, res) => {
    connection.connect();
    const products = [];
    connection.query('SELECT name, stock FROM products', function (err, rows, fields) {
        if (err) throw err
        // console.log('The solution is: ', row)
        // res.json(rows);

        rows.forEach(product => {
            // products.push(product);
            console.log(product.name, product.stock);
        });
    });
    connection.end()
    res.send('Berhasil');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})