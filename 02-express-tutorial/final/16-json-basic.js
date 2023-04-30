const express = require('express');
const { products } = require('./data')

const  app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send("<h1>Welcome to home page!</h1> <a href='/api/products1'>Products</a>")
})

app.get('/api/products', (res, req) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })

    res.json(newProducts)
}
)

app.get('/api/products1', (res, req) => {
    const singleProduct = products.find((product)=> product.id === 1)

    res.json(singleProduct)
})

app.listen(PORT , () => {
    console.log(`server listening on port ${PORT}...`)
})