const http = require('http');
const fs = require('fs');
const { readFile } = fs.promises;

const port = 3000;

http.createServer(async(req, res) => {
  const origin = 'http://localhost:' + port;
  const data = await readFile('index.html');
  res.writeHead(200, {
    'Content-type': 'text/html',
    'Access-Control-Allow-Origin': origin,
    'AMP-Access-Control-Allow-Source-Origin': origin,
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, HEAD, PUT',
    'Access-Control-Allow-Credentials': 'true'
  });
  res.write(data);
  res.end();
}).listen(port);

console.log('Server is runnning on', port);