// Import the fs module from node.js
const fs = require('fs');

// Define the file paths
const inputFile = 'input.txt';
const outputFile = 'output.txt';

// Read the content from the input file
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the file ${inputFile}:`, err);
    return;
  }

  // Write the content to the output file
  fs.writeFile(outputFile, data, (err) => {
    if (err) {
      console.error(`Error writing to the file ${outputFile}:`, err);
      return;
    }

    console.log(`Content successfully copied from ${inputFile} to ${outputFile}`);
  });
   });