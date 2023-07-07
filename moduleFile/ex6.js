//6. Use the url module to parse a URL and access its components. 
const url = require('url');
let x = url.parse('http://www.example.com:8080/path?query=value#fragment');
console.log(x)