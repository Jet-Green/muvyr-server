const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    image: String,
    title: String,
    description: String,
    mass: String,
    price: Number
})

module.exports = model('Product', ProductSchema);