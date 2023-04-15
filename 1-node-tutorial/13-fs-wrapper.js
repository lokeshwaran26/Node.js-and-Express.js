const { readFile, writeFile } = require('fs').promises



const start = async ()=>{

    try {
        const first =  await readFile('E:/Node.js and Epress.js/1-node-tutorial/content/subfolder/first.txt', "utf8");
        const second =  await readFile('E:/Node.js and Epress.js/1-node-tutorial/content/subfolder/second.txt', "utf-8");
        await writeFile (
            'E:/Node.js and Epress.js/1-node-tutorial/content/subfolder/Myresult2.txt',
            `Here this is the result: ${first} , ${second}`
        )
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }
    }
        

start();


// const getText = (path) =>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err, data)=>{
//             if(err){
//                 reject(err)
//                 }
//                 else{
//                     resolve(data)
//                     }
//         })
//     })
// }


// getText('E:/Node.js and Epress.js/1-node-tutorial/content/subfolder/first.txt').then( result => console.log(result)).catch( err => console.log(err));