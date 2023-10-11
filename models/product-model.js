const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    image: String,
    title: String,
    description: String,
    mass: String,
    price: String
})

module.exports = model('Product', ProductSchema);