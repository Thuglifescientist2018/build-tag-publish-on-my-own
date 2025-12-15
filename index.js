const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<H1>ThuglifeScientist Version 2.0 with nodemon</h1>');
});

const PORT = 80; 
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});