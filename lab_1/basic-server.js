// 1. Import http module
const http = require('http');

// 2. Create the server
const server = http.createServer((req, res) => {

  // Create full URL object using request headers
  const reqUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = reqUrl.pathname;

  // HOME ROUTE
  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Welcome to the homepage.");
  }

  // ABOUT ROUTE
  else if (pathname === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("This is a simple Node.js server.");
  }

  // GREET ROUTE
  else if (pathname === '/greet') {
    const name = reqUrl.searchParams.get('name');
    console.log("Query Parameters:", Object.fromEntries(reqUrl.searchParams));

    if (name) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Hello, ${name}!`);
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end("Please provide a name parameter, e.g., /greet?name=John");
    }
  }

  // MATH ROUTE
  else if (pathname === '/math') {
    const a = parseFloat(reqUrl.searchParams.get('a'));
    const b = parseFloat(reqUrl.searchParams.get('b'));

    if (!isNaN(a) && !isNaN(b)) {
      const sum = a + b;
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`The sum of ${a} and ${b} is ${sum}`);
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end("Please provide valid numbers for a and b, e.g., /math?a=5&b=10");
    }
  }

  // 404 ROUTE
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end("404 - Page Not Found");
  }

});

// 3. Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
