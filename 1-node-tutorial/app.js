const http = require('http');
const PORT = 5000;
const server =http.createServer((req, res)=>{
    console.log(req)
    if( req.url === '/'){
        res.end("Welcome to Home Page!")
    }
    else if( req.url === '/about'){
        res.end("Hi this is lokesh a full-stack developer!")
    }
    else {
        res.end(
        `
        <h1> Oops!</h1>
        <p> Sorry this Page is currenty not availabe</p>
        <a href='/' >Home</a>
        `
    )
        }   
})

server.listen(PORT, ()=>{
    console.log(` The Server listening on port ${PORT}`)
})

