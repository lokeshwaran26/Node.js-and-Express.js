const express = require('express'); //import express
const  app = express(); 

const { people } = require('./data'); //import data
const login = require('./routes/auth'); // import auth

app.use(express.static('./methods-public')) //use the static to route the files!
app.use(express.urlencoded({ extended : false}))
app.use(express.json())

app.use('/login', login );
const PORT = 5000;

app.listen(PORT , () => {
    console.log(`server listening on port ${PORT}...`)
})