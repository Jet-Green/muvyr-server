const Router = require('express').Router
const authMiddleware = require('../middleware/auth-middleware')

const MULTER = require('multer')

const ProductController = require('../controllers/product-controller')

const router = Router()

// router.post('/add-product', ProductController.createProduct)
// router.post('/get-all-products', ProductController.getAllProduct)

// router.post('/upload-product-images', MULTER().any(), ProductController.uploadProductImages)

module.exports = router