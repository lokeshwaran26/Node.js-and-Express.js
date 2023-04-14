const http = require('http');
const PORT = 5000;
const server =http.createServer((req, res)=>{
    console.log(req)
    if( req.url === '/'){
        res.end("Welcome to Home Page!")
    }
    if ( req.url === '/about'){
        //BLOCK CODING
        for(let i=0; i<1000;i++){
            for( let j = 0 ;  j<1000; j++){
                console.log(`${i} , ${j}`);
            }

        }

        res.end("Hi this is lokeshwaran a full-stack developer!")
    }
    
})

server.listen(PORT, ()=>{
    console.log(` The Server listening on port ${PORT}`)
})

const { readFile } = require('fs');
const { reject, result } = require('lodash');
const { resolve } = require('path');