const ProductService = require('../service/product-service.js')

module.exports = {
    async getAllProducts(req, res, next) {
        try {
            return res.json(await ProductService.getAllProducts())
        } catch (error) {
            next(error)
        }
    },
}