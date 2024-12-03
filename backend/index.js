import { createServer } from 'node:http';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let data = require('./data.json');


const hostname = '127.0.0.1';
const port = 4000;

const server = createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allows requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allowed HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allowed headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

