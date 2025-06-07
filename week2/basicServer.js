const http = require('http'); //import the http module

// Create a server instance
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world 879!');
});

// Listen on a specific port
const port = 3000;
server.listen(port,() => {
  console.log(`Server is listening on port ${port}`);
});