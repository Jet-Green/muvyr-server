const ProductModel = require('../models/product-model')

module.exports = {
    createProduct(newProduct) {
        console.log(newProduct);
        return ProductModel.create(newProduct)
    },
}