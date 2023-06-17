const express = require("express")
const http = require('http')
const app = express();

app.use((req,res,next) => {
    next();
})

app.use((req,res,next) => {
    // res.send("<h1>Hello from Express JS</h1>")
    res.send({name: 'John', age: 30})
})
const server = http.createServer(app);
server.listen(3000)