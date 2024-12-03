import { createServer } from 'node:http';
const lop = await import('./data.json', { assert: { type: 'json' } });
console.log(lop);

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'json');
  res.end('Json');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
