const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>Hell Ashwani</h1>`);
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});