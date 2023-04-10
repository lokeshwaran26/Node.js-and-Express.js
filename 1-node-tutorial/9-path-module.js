
const path = require('path');

const currentPath = path.join('content', 'subfolder', 'file.txt');
console.log(currentPath);

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'file.txt');
console.log(absolutePath)