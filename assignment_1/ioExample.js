const fs = require('fs');

console.log("Start");

// Non-blocking file read (I/O operation)
fs.readFile('ioExample.js', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("File Read Completed");
});

console.log("End");
