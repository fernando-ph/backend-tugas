# Backend untuk tugas web lanjutan.

## Penggunaan
export backend-tugas_products.sql ke MySql Workbench
atur username dan password db pada db.js
lalu jalankan

## Endpoint
http://localhost:8080/products (POST)
http://localhost:8080/products (DELETE)
http://localhost:8080/products (GET)

## Curl untuk Testing
curl --header "Content-Type: application/json" --request GET http://localhost:8080/products
curl --header "Content-Type: application/json" --request DELETE http://localhost:8080/products/[productId]
curl --header "Content-Type: application/json" --request POST --data '{"name": "", stock: 0}' http://localhost:8080/products
