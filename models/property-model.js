const { Schema, model } = require('mongoose');

const PropertySchema = new Schema({
    title: { type: String },
    image: { type: String },
    // описание: локация, телевизор, холодильник, туалет, 
    descrtiption: { type: String },
    // кол-во мест,
    peopleCount: { type: Number },
    // кем забронировано
    bookedBy: { type: Object },
    startBooking: { type: Number },
    // конец бронирования, указывается последний день, последняя его секунда
    endBooking: { type: Number },
    // name - взрослый, детский; amount - цена
    price: { name: String, amount: Number }
})

module.exports = model('Property', PropertySchema);