// import http
const http = require('http');

// create server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); //header
  res.write('Hello, World!');  //large response
  res.end(); //end response
});

const port = 3000;  //select port

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
