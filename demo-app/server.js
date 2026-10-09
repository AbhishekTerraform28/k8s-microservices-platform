const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    status: 'healthy',
    message: 'Kubernetes Microservices Demo running on Docker!',
    timestamp: new Date().toISOString()
  }));
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
