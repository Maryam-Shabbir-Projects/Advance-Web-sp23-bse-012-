const url = require('url');
const fs = require('fs');
const path = require('path');

function handleRequest(req, res) {

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // 5️⃣ Home Route
  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end("Hello, World!");
  }

  // 5️⃣ API Route
  if (pathname === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ message: "API Working" }));
  }

  // 6️⃣ Query Parsing
  if (pathname === '/product') {
    const { id, category } = parsedUrl.query;
    return res.end(`Product ID: ${id}, Category: ${category}`);
  }

  // 8️⃣ Static Files
  if (pathname.startsWith('/public')) {
    const filePath = path.join(__dirname, '..', pathname);

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404);
        return res.end("File Not Found");
      }

      res.writeHead(200);
      res.end(content);
    });

    return;
  }

  // 🔟 Video Streaming
  if (pathname === '/video') {
    const videoPath = path.join(__dirname, '..', 'video', 'sample.mp4');
    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (!range) {
      res.writeHead(400);
      return res.end("Requires Range header");
    }

    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunkSize = (end - start) + 1;
    const file = fs.createReadStream(videoPath, { start, end });

    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': 'video/mp4'
    });

    file.pipe(res);
    return;
  }

  // 7️⃣ 404 Error
  res.writeHead(404);
  res.end("404 - Not Found");
}

module.exports = { handleRequest };
