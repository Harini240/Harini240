const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const port = 4000;

const server = http.createServer((req, res) => {
    // Serve the index.html file for GET requests to root
    if (req.method === 'GET' && req.url === '/') {
        fs.readFile(path.join(__dirname, 'page.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } 
    // Handle the POST request for survey submission
    else if (req.method === 'POST' && req.url === '/post') {
        let body = '';
        
        // Collect the form data
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const formData = querystring.parse(body);

            // Generate a response message
            const responseMessage = `
                <h1>Thank you for submitting the survey!</h1>
                <p>Name: ${formData.name}</p>
                <p>Age: ${formData.age}</p>
                <p>Gender: ${formData.gender}</p>
                <p>Marital Status: ${formData['marital-status']}</p>
            `;

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(responseMessage);
        });
    } 
    // Handle unsupported methods
    else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
