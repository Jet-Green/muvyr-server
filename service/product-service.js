const ProductModel = require('../models/product-model')

module.exports = {
    getAllProducts() {
        return ProductModel.find({})
    },

}