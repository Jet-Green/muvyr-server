const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    image: String,
    name: String,
    description: String,
    mass: String,
    price: Number
})

module.exports = model('Product', ProductSchema);