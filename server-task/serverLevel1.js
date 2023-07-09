const http = require('http');
const server = http.createServer((req,res)=>{
if(req.url==='/users'){
    res.setHeader('content-Type','text/plain');
    res.end("welcome to the users endpoint");
    }
    else{
    res.statusCode=404;
    res.setHeader('content-Type','text/plain');
    res.end('404 not found')

    }
});

server.listen(8080,"localhost",()=>{
console.log('listening for request on port 8080')
})