const dns=require('dns');
const hostname='www.google.com';
dns.resolve4(hostname,(err,adresses)=>{
    if(err){
    console.log(err.message);
    return;
    }
console.log(`IP adress for the ${hostname}is ${adresses}`)
})