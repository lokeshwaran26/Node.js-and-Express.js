const express = require('express');
const { products } = require('./data')

const  app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send("<h1>Welcome to home page!</h1> <a href='/api/products'>Products</a>")
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })

    res.json(newProducts)
}
)

app.get('/api/products/:productID', (req, res) => {
    // console.log(req);
    // console.log(req.params);
    const { productID } = req.params;
    const singleProduct = products.find((product)=> product.id === Number(productID));
    if(!singleProduct){
        res.status(400).send("Product Not Found!")
    }
    res.json(singleProduct);
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    // console.log(req);
    console.log(req.params);
    res.send("Hello world")
    
})

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query
    let sortedProducts = [ ...products]

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }

    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit)); 
    }

    if(sortedProducts < 1){
        res.status(200).send("Product Does Not Exist!")
    }

    res.status(200).json(sortedProducts)
    
})

app.listen(PORT , () => {
    console.log(`server listening on port ${PORT}...`)
})