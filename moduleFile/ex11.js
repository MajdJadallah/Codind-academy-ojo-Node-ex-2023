const {exec}=require('child_process');
const command ='dir'
 exec(command,(err,stdout,stderr)=>{
if(err){
console.log(`error:${err.message}`)
return;
}
if(stderr){
console.log(`stderr:${stderr}`)
return
}
console.log(`commad output:${stdout}`)
 })