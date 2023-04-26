const express = require('express');
const { products } = require('./data')

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Welcome to home page!</h1> <a href='/api/products'>Products</a>")
})

app.get('/api/products', (res, req) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })

    res.json(newProducts)
})

app.listen(5000, () => {
    console.log("server listening on port 5000...")
})