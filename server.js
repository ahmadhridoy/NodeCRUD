const express = require("express");
const http = require("http");
const port = 3000;
const app = require("./app");


const server = http.createServer(app);
server.listen(port);







//mongodb+srv://badar:<password>@cluster0.jxdfs.mongodb.net/web-programming?retryWrites=true&w=majority