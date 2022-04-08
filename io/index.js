// Access to node defalut variables
// exports, require, module, __filename, __dirname
// console.log(__dirname, __filename);

// Importing from another custom module
// const Person = require('./person');
// const person1 = new Person("Victor",  25);
// person1.greeting();

// RUNNING MY SERVER
const http = require("http");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

// Data for the API
const users = [
  { name: "Dean", age: 30 },
  { name: "Sam", age: 27 },
];

const server = http.createServer((req, res) => {
  //   // This way is very innefficient because we need to handle many pages
  //   // also many file types
  //   if (req.url === "/") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "index.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-Type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //   } else if (req.url === "/about") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "about.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-Type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //   } else if (req.url === "/api/users") {
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.end(JSON.stringify(users));
  //   }

  // Handle
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  let extName = path.extname(filePath);

  // If there is no extension
  if (extName === "") {
    let base = path.dirname(filePath);
    let file = path.basename(filePath) + ".html";
    filePath = path.join(base, file);
    console.log(filePath);
  }

  let contentType = "";

  //   Check the ext and set content type
  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    default:
      contentType = "text/html";
      break;
  }

  // Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, "utf-8");
          }
        );
      } else {
        //   Some server error
        res.writeHead(500);
        res.end(`Server error ${err.code}`);
      }
    } else {
      // Successful response
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
