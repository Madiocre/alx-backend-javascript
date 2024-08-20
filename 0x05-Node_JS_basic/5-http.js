const app = require('http');

// create a server object:
app.createServer((req, res) => {
  res.write('Hello Holberton School!'); // write a response to the client
  res.end(); // end the response
}).listen(1245);
