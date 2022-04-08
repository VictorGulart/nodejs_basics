const fs = require("fs");
const path = require("path");

// By default they are asynchronous --
// basically they take a callback

// Create folder
// fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created ...");
// });

// Create and write to file
// fs.writeFile(
//   path.join(__dirname, "test", "hello.txt"),
//   "File created with path and Node",
//   (err) => {
//     if (err) throw err;
//     console.log("File written to ...");

//     // File append
//     fs.appendFile(
//       path.join(__dirname, "test", "hello.txt"),
//       "\nI love node JS",
//       (err) => {
//         if (err) throw err;
//         console.log("File appended to to ...");
//       }
//     );
//   }
// );

// Reading file
// fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log("File read: ");
//   console.log(data);
// });

// Rename file
fs.rename(
  path.join(__dirname, "test", "hello.txt"),
  path.join(__dirname, "test", "hello_renamed.txt"),
  (err, data) => {
    if (err) throw err;
    console.log("File renamed ... ");
  }
);
