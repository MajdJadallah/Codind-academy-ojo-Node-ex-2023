const net =require('net');
const server = net.createServer((socket)=>{
socket.write('hello,client/r/n');
socket.end();
});
server.listen(8000,()=>{
    console.log('The TCP server running on port 8000');
})