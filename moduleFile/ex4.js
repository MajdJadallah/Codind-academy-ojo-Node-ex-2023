const http = require('http');
const fs =require('fs');

const server = http.createServer((req,res)=>{
console.log(req.url , req.method);

res.setHeader('content-Type','text/html');

let path = './moduleFile/view/';

switch(req.url){
case '/':
path+='file.html';
res.statusCode=200
break;

case '/file':
res.statusCode=301
res.setHeader('Location','/file')
res.end();
break;

case '/about':
path+='about.html';
res.statusCode=200
break;

default :
path+='error.html'
res.statusCode=404
break ;
}


fs.readFile(path,(err,data)=>{
    if(err){
    console.log(err)
    res.end()
    }
    else{
    res.write(data)
    res.end();
    }
})
})
server.listen(7050,'localhost',()=>{
console.log('listening for requst on port 7050')
})