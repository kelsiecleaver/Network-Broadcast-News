/*jshint esversion: 6 */
const net = require('net');

let users = [];

const server = net.createServer((request) => {
  users.push(request);

  request.on('data', (chunk) => {
    process.stdout.write(chunk);
      users.forEach((client) =>{
        if(client === request) return;
        client.write(chunk);
      });
  });
  process.stdin.on('data', (command)=>{
    request.write(command);
  });
});

server.listen(6969, '0.0.0.0.',() => {
  console.log('opened server on address');
});



















