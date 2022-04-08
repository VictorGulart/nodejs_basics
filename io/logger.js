const EventEmitter = require("events");
const uuid = require("uuid"); // random id

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

// Using custom logger
const Logger = require("./logger");
const logger = new Logger();
logger.on("message", (data) => {
  console.log("Called listerner", data);
});

logger.log("Hello World");

// module.exports = Logger;
