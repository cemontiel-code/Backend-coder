const http = require('http');

const server = http.createServer((resq,resp)=>{
    resp.end(`<div  style='border-radius:50%;background:blue'> 
        gay
    </div>`)
})

const connectedServer = server.listen(8080,
    ()=>{
        console.log(`Server htto escuando en el puerto ${ connectedServer.address().port }`);   
    })