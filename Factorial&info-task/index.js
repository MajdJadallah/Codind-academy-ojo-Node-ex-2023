const factorial = require('./factorial');
const { name, major } = require('./info');
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
console.log(`Name: ${name}`);
console.log(`Major: ${major}`);