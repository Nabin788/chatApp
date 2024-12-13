const express = require("express");
const socket = require("socket.io");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socket(server);

const port = 8000;

const staticFile = path.join(__dirname, "./public");

app.use(express.static(staticFile));

app.get("/", (req,res) => {
    res.send("index");
});

io.on("connection", (socket) => {
    console.log("User connected to server");
});


server.listen(port, () => {
    console.log(`http://localhost:${port}`);
    
})