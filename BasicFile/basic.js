//1.Create a basic Node.js script that prints "Hello, World!" to the console.
console.log('"Hello, World!"')

//2. Use the process global variable to access command-line arguments passed to the script.
console.log(process.argv.slice(2));

//3. Use the setTimeout() function to print "Hello, World!" after 2 seconds.
global.setTimeout(()=>{
    console.log("Hello ,world!")
},2000)

//4. Use the setInterval( ) function to print "Hello, World!" every 2 seconds.
const intervalId = setInterval(function() {
    console.log("Hello, World!");
  }, 2000);

  setTimeout(function() {
    clearInterval(intervalId);
  }, 10000);

//5. Use the console global object to print a warning message. Input: None; Output: "Warning:
console.warn('Something went wrong')