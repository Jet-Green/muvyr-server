const { Schema, model } = require('mongoose');

const PropertySchema = new Schema({
    title: { type: String },
    images: { type: Array },
    // описание: локация, телевизор, холодильник, туалет, 
    description: { type: String },
    // кол-во мест,
    peopleCount: { type: String },
    // кем забронировано
    bookedBy: { type: Object },
    startBooking: { type: Number },
    // конец бронирования, указывается последний день, последняя его секунда
    endBooking: { type: Number },
    price: { type: String }
})

module.exports = model('Property', PropertySchema);