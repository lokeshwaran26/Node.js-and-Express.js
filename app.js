const { readFile } = require('fs')

const getText = (path) =>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data)=>{
            if(err){
                reject(err)
                }
                else{
                    resolve(data)
                    }
        })
    })
}

getText('E:/Node.js and Epress.js/1-node-tutorial/content/subfolder/first.txt').then( result => console.log(result)).catch( err => console.log(err));