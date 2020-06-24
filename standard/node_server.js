const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Message from Node!");
});

server.listen(3001);
