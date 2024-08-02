// Import the http module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Check the request URL
  if (req.url === '/') {
    // Respond with "Hello, World!" for the root route
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
  } else {
    // Respond with "Page Not Found" for any other route
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page Not Found\n');
  }
});

// Start the server and listen on the specified port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
