const express = require('express');
const  app = express();

const { people } = require('./data');
const login = require('./routes/auth');


app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended : false}))
app.use(express.json())
app.use('/login', login );
const PORT = 5000;



app.listen(PORT , () => {
    console.log(`server listening on port ${PORT}...`)
})