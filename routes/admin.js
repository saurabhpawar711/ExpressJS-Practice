const express = require('express')
const path = require('path')
const router = express.Router();
const pathDir = require('../util/path')

router.get('/addProducts', (req,res,next) => {
    res.sendFile(path.join(__dirname,'../', 'views', 'addProducts.html'))
})

router.post('/products', (req,res,next) => {
    console.log(req.body)
    res.redirect('/shop')
})

module.exports = router;