const { Schema, model } = require('mongoose');

const ShopAddressSchema = new Schema({
    name: String
})

module.exports = model('ShopAdderss', ShopAddressSchema);