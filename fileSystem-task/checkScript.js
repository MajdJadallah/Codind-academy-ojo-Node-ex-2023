const fs = require('fs');
const readline = require('readline');

const inputFilePath = 'input.txt';
const outputFilePath = 'output.txt';

if (!fs.existsSync(inputFilePath)) {
  console.error('Error: input.txt file does not exist.');
  process.exit(1);
}

if (fs.existsSync(outputFilePath)) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('output.txt file already exists. Do you want to overwrite it? (yes/no): ', (answer) => {
    rl.close();

    if (answer.toLowerCase() === 'yes') {
      writeOutputFile();
    } else {
      console.log('Operation cancelled. output.txt file was not overwritten.');
      process.exit(0);
    }
  });
} else {
  writeOutputFile();
}

function writeOutputFile() {
  fs.copyFileSync(inputFilePath, outputFilePath);
  console.log('output.txt file updated successfully.');

  fs.unlinkSync(inputFilePath);
  console.log('input.txt file deleted successfully.');

  process.exit(0);
}
