//2. Use the fs module to write a string to a file. 
const fs =require('fs');
fs.writeFile('./moduleFile/theSecond.txt',' A file named "the second.txt" with the text "Hello, World!',()=>{
console.log('written is done')
})