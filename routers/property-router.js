const Router = require('express').Router
const authMiddleware = require('../middleware/auth-middleware')

const PropertyController = require('../controllers/property-controller')

const router = Router()

router.post('/add-property', PropertyController.createProperty)

module.exports = router