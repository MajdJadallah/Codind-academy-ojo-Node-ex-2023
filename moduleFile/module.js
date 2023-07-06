//Use the fs module to read a file and print its contents to the console
const fs =require('fs');
fs .readFile('./moduleFile/theFirstQ.txt',(error,data)=>{
if(error){
console.log(error)
}
console.log(data.toString());
});
//2. Use the fs module to write a string to a file.
fs.writeFile('./moduleFile/theSecond.txt',' A file named "the second.txt" with the text "Hello, World!',()=>{
    console.log('the file was written')
})
//3. Use the http module to create a simple server that returns "Hello, World!" for the root route.
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
//5
const path = require('path');

const filePath1 = '/path/to/file1';
const filePath2 = '/path/to/file2';
const joinedPath = path.join(filePath1, filePath2);

console.log(joinedPath);
//6
const url = require('url');

const urlString = 'http://www.example.com:8080/path?query=value#fragment';
const parsedUrl = url.parse(urlString, true);

console.log(parsedUrl);
//7
const os = require('os');

const homeDirectory = os.homedir();

console.log(homeDirectory);
//8
const crypto = require('crypto');

const randomNumber = crypto.randomInt(100);

console.log(randomNumber);
//9
const crypto = require('crypto');

const inputString = 'Hello, World!';
const hash = crypto.createHash('sha256').update(inputString).digest('hex');

console.log(hash);
//10
const querystring = require('querystring');

const queryString = 'name=value&key=value2';
const parsedQuery = querystring.parse(queryString);

console.log(parsedQuery);
//11
const { exec } = require('child_process');

const command = 'ls -l';
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Command execution returned an error: ${stderr}`);
    return;
  }
  console.log(`Command output:\n${stdout}`);
});
//12 
const { spawn } = require('child_process');

const command2 = 'ping';
const args = ['www.google.com'];

const childProcess = spawn(command2, args);

childProcess.stdout.on('data', (data) => {
  console.log(`Ping response:\n${data}`);
});

childProcess.stderr.on('data', (data) => {
  console.error(`Error while pinging: ${data}`);
});

childProcess.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});
//13
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {

  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end('Hello, World!');
    })
    .listen(8000);

  console.log(`Worker ${process.pid} started`);
}
//14
const dns = require('dns');

const hostname = 'www.google.com';

dns.resolve4(hostname, (err, addresses) => {
  if (err) {
    console.error(`Error resolving hostname: ${err.message}`);
    return;
  }
  console.log(`IP addresses for ${hostname}: ${addresses}`);
});

//15
const net = require('net');

const server2 = net.createServer((socket) => {
  socket.write('Hello, client!\r\n');
  socket.end();
});

server2.listen(8080, () => {
  console.log('TCP server running on port 8080');
});
//16
const net = require('net');

const client = net.connect({ port: 8080 }, () => {
  console.log('Connected to server!');
});

client.on('data', (data) => {
  console.log(`Received data from server: ${data.toString()}`);
});

client.on('end', () => {
  console.log('Disconnected from server');
});
