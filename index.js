const express = require("express")
const http = require('http')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended : false}))

app.use('/addProducts', (req,res,next) => {
    res.send("<form action='/products' method='POST'><input type='text' name='title'><input type='text' name='description'><button type='submit'>Add product</button></form>")
})

app.use('/products', (req,res,next) => {
    console.log(req.body)
    res.redirect('/')
})

app.use('/', (req,res,next) => {
   res.send("<h1>Hello from Express JS</h1>")
})

const server = http.createServer(app);
server.listen(3000)