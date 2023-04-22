const { error } = require('console');
const { createReadStream } = require('fs');
const { result } = require('lodash');

const stream = createReadStream('E:/Node.js and Epress.js/1-node-tutorial/content/subfolder/big.txt', {
    highWaterMark : 90000
})

stream.on('data', (result)=>{
    console.log(result)
})

stream.on('error', (error) => console.log(error));