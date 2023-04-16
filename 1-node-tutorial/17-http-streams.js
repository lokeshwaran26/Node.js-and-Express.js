var http = require('http');

var fs = require('fs');

http.createServer(( req, res )=>{
    const text = fs.readFileSync('E:/Node.js and Epress.js/1-node-tutorial/content/subfolder/big.txt')
    res.end(text);
}
).listen(5000)