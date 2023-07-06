const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/file') {
    fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Internal Server Error');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(8000, () => {
  console.log('Server running at http://localhost:8000/');
});

