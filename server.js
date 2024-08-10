const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
    // Serve the index.html file for GET requests to root
    if (req.method === 'GET' && req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.method === 'POST' && req.url === '/post') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is a POST request.');
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
