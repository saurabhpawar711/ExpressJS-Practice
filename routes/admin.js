const express = require('express')
const path = require('path')
const router = express.Router();
const productController = require('../controllers/products')

router.get('/addProducts', productController.addProductsPage)

router.post('/products', productController.productsPage)

module.exports = router;