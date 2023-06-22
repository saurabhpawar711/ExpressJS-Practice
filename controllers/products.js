
const path = require('path')

exports.addProductsPage = (req,res,next) => {
    res.sendFile(path.join(__dirname,'../', 'views', 'addProducts.html'))
}

exports.productsPage = (req,res,next) => {
    console.log(req.body)
    res.redirect('/shop')
}

exports.productListPage = (req,res,next) => {
    res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'))
 }

 exports.errorPage = (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../','views', '404.html'))
}

