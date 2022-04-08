const http = require("http");

// Create server obj
http
  .createServer((req, res) => {
    // Write a response
    res.write("Hello world");
    res.end();
  })
  .listen(5000, () => {
    console.log("server running ...");
  });
