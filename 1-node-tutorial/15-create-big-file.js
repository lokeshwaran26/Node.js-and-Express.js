const { writeFileSync } = require('fs');

for ( let i =0; i<10000; i++){
    writeFileSync("E:/Node.js and Epress.js/1-node-tutorial/content/subfolder/big.txt", `Hello World ${i}\n`,{ flag: 'a'})
}