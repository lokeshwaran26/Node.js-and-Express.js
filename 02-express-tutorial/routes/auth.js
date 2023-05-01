const express = require('express');

const router = express.Router();

router.post('/', (req, res)=>{
    const { name } = req.body;
    if(name){
        return res.send(`Welcome ${name}`)
    }

    res.status(401).send("Please Provide Credencials")

})

module.exports = router;