# Backend untuk tugas web lanjutan.

## Penggunaan
export backend-tugas_products.sql ke MySql Workbench <br/>
atur username dan password db pada db.js <br/>
lalu jalankan <br/>

## Endpoint
http://localhost:8080/products (POST) <br/>
http://localhost:8080/products (DELETE) <br/>
http://localhost:8080/products (GET) <br/>

## Curl untuk Testing
curl --header "Content-Type: application/json" --request GET http://localhost:8080/products <br/>
curl --header "Content-Type: application/json" --request DELETE http://localhost:8080/products/[productId] <br/>
curl --header "Content-Type: application/json" --request POST --data '{"name": "", stock: 0}' http://localhost:8080/products <br/>
