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
