const ProductModel = require('../models/product-model')
const ProductOrderModel = require('../models/product-order-model')

module.exports = {
    getAllProducts() {
        return ProductModel.find({})
    },
    createProductOrder(order) {
        return ProductOrderModel.create(order)
    }
}