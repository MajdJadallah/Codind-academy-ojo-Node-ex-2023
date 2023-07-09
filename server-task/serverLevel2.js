const http = require('http');
const fs = require ('fs')
const server = http.createServer((req,res)=>{
if(req.url==='/trainees'){
    res.setHeader('content-Type','text/html');
    fs.readFile("./server-task/traniees.html",(error,data)=>{
        if(error){
            console.log(error)
            res.end();
        }
        else{
        res.write(data);
        res.end()
        }
    })
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