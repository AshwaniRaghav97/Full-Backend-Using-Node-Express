const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>Hello Ashwani Raghav</h1>`);
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});