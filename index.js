const express = require("express")
const http = require('http')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
const pathDir = require('./util/path')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactUsRoutes = require('./routes/contactus')

app.use(bodyParser.urlencoded({extended : false}))

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use('/contactUs', contactUsRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})
const server = http.createServer(app);
server.listen(3000)