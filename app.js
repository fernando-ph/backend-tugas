const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const {connection} = require('./db');

// menggunakan middleware cors untuk mengatasi maasalah share origin
app.use(cors());
// menggunakan express.json() untuk memudahkan proses marshaling
app.use(express.json());

// endpoint untuk mendapatkan data product
app.get('/products', async function(req, res) {
    connection.query("SELECT id, name, stock FROM products", function(err, rows, fields) {
        if (err) {
            res.status(500).send({
                status: 500,
                message: 'Terjadi kesalahan'
            });
            return
        }
        if (rows.length !== 0 && rows.length !== null) {
            res.json({
                status: 200,
                rows
            });
            return
        } else if (rows.length === 0) {
            res.status(404).send({
                status: 404,
                message: 'Data product tidak ada.',
            });
            return
        }
    });
});

// endpoint untuk menambahkan product
app.post('/products', function(req, res) {
    res.setHeader('Content-Type', 'application/json');

    const body = [
        req.body.name,
        req.body.stock
    ];

    // pastikan nama product tidak kosong
    if (body[0] === null || body[0].length == "") {
        res.status(400).send({
            status: 400,
            message: "Pastikan nama product di-isi."
        })
        else if (body === null && body==""){
             res.status(400).send({
            status: 400,
            message: "Pastikan nama product di-isi."
            
        }
        return
    }

    // pastikan stock tidak minus
    if (body[1] == null || body[1] < 0) {
        res.status(400).send({
            status: 400,
            message: "Pastikan stock product minimal 0"
        })
        return
    }

    connection.query(`INSERT INTO products (name, stock) VALUES (?)`, [body], function(err, rows, fields) {
        if (err) {
            console.log(err);
            res.status(500).send({
                message: 'Terjadi kesalahan'
            });
            return
        }
        res.json({
            status: 200,
            message: 'Berhasil menambahkan product'
        });
        return
    });
})

app.delete('/products/:id', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    const productId = req.params.id;

    if (productId == null || isNaN(productId)) {
        res.status(400).send({
            status: 400,
            message: 'Pastikan product id valid'
        })
        return
    }

    connection.query("DELETE FROM products WHERE id = ?", [productId], function(err, rows, fields) {
        if (err) {
            console.log(err);
            res.status(500).send({
                message: 'Terjadi kesalahan'
            });
            return
        }

        const affectedRows = rows.affectedRows;
        if (affectedRows == 0) {
            res.status(404).send({
                status: 404,
                message: `Tidak terdapat product dengan id: ${productId}`
            })
            return
        }

        // response ini akan terpanggil jika terdapat id yang sama dalam table (affected > 1)
        if (affectedRows != 1) {
            res.status(500).send({
                status: 404,
                message: 'Terdapat kesahalan.'
            })
            return
        } else if (affectedRows == 1) {
            res.json({
                status: 200,
                message: `Berhasil menghapus product dengan id: ${productId}`
            })
        }
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
