//Use the http module to create a simple server that returns "Hello, World!" for the root route.
const http =require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url , req.method);
    res.setHeader('content-Type','text/plain');
    res.write('hello world from server on port 8080!')
    res.end();
})
server.listen(8080,'localhost',()=>{
console.log('listening for request on port 8080')
});