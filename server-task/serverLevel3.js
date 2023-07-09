const http = require('http');
const { parse } = require('querystring');

// Static array of users
let users = [];

// Static array of trainecues
const trainees = [
  { name: 'Ahmad', age: 22 },
  { name: 'majd', age: 23 },
  { name: 'nasser', age: 28 }
];

const server = http.createServer((req, res) => {
  if (req.url === '/users') {
    if (req.method === 'GET') {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(users));
    } else if (req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const user = parse(body);
        users.push(user);
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(user));
      });
    }
  } else if (req.url === '/trainees' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(trainees));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
