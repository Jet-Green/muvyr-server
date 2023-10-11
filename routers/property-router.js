const Router = require('express').Router
const authMiddleware = require('../middleware/auth-middleware')

const MULTER = require('multer')

const PropertyController = require('../controllers/property-controller')

const router = Router()

router.post('/add-property', PropertyController.createProperty)
router.post('/get-all-property', PropertyController.getAllProperty)

router.post('/upload-property-images', MULTER().any(), PropertyController.uploadPropertyImages)

router.post('/book-property', PropertyController.bookProperty)

module.exports = router