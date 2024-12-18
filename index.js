// package
const express = require("express");
const http = require('http');
const socket = require("socket.io");
const path = require("path");

const port = process.env.PORT || 2020;

// instance
const app = express();
const server = http.createServer(app);
const io = socket(server);


const public = path.join(__dirname, "./public");
app.use(express.static(public));
app.use(express.json);

app.get("/", (req,res) => {
    res.sendFile("index");
});

server.listen(port, () => {
    console.log(`Server is listening from http://localhost:${port}`);
});


