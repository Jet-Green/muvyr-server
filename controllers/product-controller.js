const ProductService = require('../service/product-service.js')

module.exports = {
    async getAllProducts(req, res, next) {
        try {
            return res.json(await ProductService.getAllProducts())
        } catch (error) {
            next(error)
        }
    },
    async createProductOrder(req, res, next) {
        try {
            return res.json(await ProductService.createProductOrder(req.body))
        } catch (error) {
            next(error)
        }
    },
    async getAllProductOrders(req, res, next) {
        try {
            return res.json(await ProductService.getAllProductOrders())
        } catch (error) {
            next(error)
        }
    }
}