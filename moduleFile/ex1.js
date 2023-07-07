//1. Use the fs module to read a file and print its contents to the console. 
const fs =require('fs');
fs.readFile('./moduleFile/theFirstQ.txt',(err,data)=>{
if (err){
console.log(err)
}
console.log(data.toString())
});
