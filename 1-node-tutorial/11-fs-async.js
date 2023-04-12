const { readFile, writeFile} = require('fs');
console.log('start')
readFile('./content/subfolder/first.txt', (err, result)=>{
    if (err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/subfolder/second.txt', (err,  result)=>{
        if (err){
            console.log(err);
            return
        }
        const second = result;
        writeFile(
            './content/subfolder/result-async.txt',
            `Here is the result: ${first}, ${second}.`,
            (err, result)=>{
                if (err){
                    console.log(err)
                    return
                }
                console.log('Done with the task!');
            }  
        )
    })
})
console.log('Staring new task!')
