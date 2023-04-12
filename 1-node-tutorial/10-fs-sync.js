const { readFileSync,  writeFileSync } = require('fs');

const first = readFileSync('./content/subfolder/first.txt','utf8');
const second = readFileSync('./content/subfolder/second.txt', 'utf8');

writeFileSync(
    './content/subfolder/Myresult.txt',
     `Here this is the result: ${first} , ${second}`
)

console.log('Done with the task!');
console.log('starting the new task!')