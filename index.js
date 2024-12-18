const express = require("express");
const socket = require("socket.io");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socket(server);

const port = process.env.PORT || 8000;

// Serve static files from the 'public' directory
const staticFile = path.join(__dirname, "./public");
app.use(express.static(staticFile));


io.on("connection", (socket) => {
    console.log("User connected to server");

    // send data from server
    // socket.emit("server message", "Welcome to nabin chat app");

    // received data from client
    socket.on("client_message", (message) => {
        console.log(message);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected from server");
    });
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
