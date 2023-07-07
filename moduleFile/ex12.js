const {spawn}=require('child_process');
const child =spawn('ping',['www.google.com']);
child.stdout.on('data', (data) => {
    console.log(`Ping response:\n${data}`);
  });
  child.stderr.on('data', (data) => {
    console.error(`Error while pinging: ${data}`);
  });
  child.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
  });