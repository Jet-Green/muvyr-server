const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name: String,
    description: String,
    mass: String,
    price: Number
})

module.exports = model('Product', ProductSchema);