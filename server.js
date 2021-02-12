const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

// Starts a new connection
// -- takes a socket as an argument
io.on("connection", (socket) => {
  // First arrgument is any string abbitray
  // Every socket gets a unqiue id so we know who is the sender and receiver
  socket.emit("your id", socket.id);
  // Every time a user sends a mseesage .on listens for message
  // Body contains the meesage
  socket.on("send message", (body) => {
    // io emmit sends out to all people connected
    io.emit("message", body);
  });
});

server.listen(8000, () => console.log("server is running on port 8000"));
