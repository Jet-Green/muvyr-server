const { Schema, model } = require('mongoose');

const TransportSchema = new Schema({
    title: { type: String },
    image: { type: String },
    // name - взрослый, детский; amount - цена
    // прайс лист и тп
    description: { type: String },
    price: { type: Number }
})

module.exports = model('Transport', TransportSchema);