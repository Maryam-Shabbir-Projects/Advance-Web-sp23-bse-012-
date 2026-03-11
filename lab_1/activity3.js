const http = require('http');
const server = http.createServer((req, res) => {
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 if (req.url === '/') {
 res.write('Welcome to the Home Page!');
 } else if (req.url === '/about') {
 res.write('About Us');
 } else if (req.url === '/contact') {
    res.write('Contact Us');
 } else {
 res.writeHead(404, { 'Content-Type': 'text/plain' }); // 404 for Not Found
 res.write('404: Page Not Found');
 }
 res.end();
});
const port = 3000;
server.listen(port, () => {
 console.log(`Server listening on port ${port}`);
});
