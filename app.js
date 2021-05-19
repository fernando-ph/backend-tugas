const express = require('express');
const app = express();
const port = 3000;
const {connection} = require('./db');


app.get('/products', async function(req, res) {
    connection.query("SELECT name, stock FROM products", function(err, rows, fields) {
        if (err) {
            res.status(500).send({
                status: 500,
                message: 'Terjadi kesalahan'
            });
        }
        if (rows.length !== 0) {
            res.json({
                status: 200,
                rows
            });
        } else if (rows.length === 0) {
            res.status(404).send({
                status: 404,
                message: 'Data product tidak ada.',
            });
        }
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});