const Router = require('express').Router
const productController = require('../controllers/product-controller')

const router = Router()


router.post('/get-all-products', productController.getAllProducts)

module.exports = router