const express = require('express')
const router = express.Router();

router.get('/addProducts', (req,res,next) => {
    res.send("<form action='/admin/products' method='POST'><input type='text' name='title'><input type='text' name='description'><button type='submit'>Add product</button></form>")
})

router.post('/products', (req,res,next) => {
    console.log(req.body)
    res.redirect('/shop')
})

module.exports = router;