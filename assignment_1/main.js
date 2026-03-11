const fs = require('fs');              // Core module
const { logMessage } = require('./utils/logger'); // Custom module

console.log("Reading file...");

// Read file using fs
const content = fs.readFileSync('data.txt', 'utf8');

console.log("File Content:");
console.log(content);

// Log the file access
logMessage("data.txt was accessed.");

console.log("Log entry created successfully.");
