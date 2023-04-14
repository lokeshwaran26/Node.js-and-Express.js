const http = require('http');

const PORT = 5000;

const server = http.createServer((req, res) => {
    console.log("Hello world");
    res.end("Hello, this is lokesh!")
    })

server.listen(PORT, () => {
    console.log(`The Server listening on port ${PORT}`)
    })