const EventEmitter = require("events");

// Create an emitter class
class MyEmitter extends EventEmitter {}

// Init obj
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on("event", () => {
  console.log("Event fired");
});

// Init event
myEmitter.emit("event");
