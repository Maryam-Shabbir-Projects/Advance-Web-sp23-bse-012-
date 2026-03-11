const http = require('http');

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Home Page!');
  }

  else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About Us');
  }

  else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Contact Us');
  }

   // 🔥 API ROUTE (JSON RESPONSE)
  else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      message: 'Hello, API!',
      status: 'success'
    }))}

   else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <body>
          <h1>404 - Page Not Found</h1>
          <a href="/">Go Back Home</a>
        </body>
      </html>
    `);
  }

});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
