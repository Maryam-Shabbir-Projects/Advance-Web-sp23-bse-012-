const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4000;

const server = http.createServer((req, res) => {

    if (req.url === '/video') {

        const videoPath = path.join(__dirname, 'videos', 'sample.mp4');
        const stat = fs.statSync(videoPath);
        const fileSize = stat.size;

        // Check if client requested a range
        const range = req.headers.range;

        if (range) {
            // Example: "bytes=0-"
            const parts = range.replace(/bytes=/, "").split("-");
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

            const chunkSize = (end - start) + 1;
            const file = fs.createReadStream(videoPath, { start, end });

            const head = {
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunkSize,
                'Content-Type': 'video/mp4',
            };

            res.writeHead(206, head); // 206 = Partial Content
            file.pipe(res);

        } else {
            // No range header, send full video
            const head = {
                'Content-Length': fileSize,
                'Content-Type': 'video/mp4',
            };
            res.writeHead(200, head);
            fs.createReadStream(videoPath).pipe(res);
        }

    } else {
        // Not found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Video streaming server running at http://localhost:${PORT}`);
});
