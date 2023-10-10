const { Schema, model } = require('mongoose');

const PropertySchema = new Schema({
    title: { type: String },
    image: { type: String },
    // описание: локация, телевизор, холодильник, туалет, 
    descrtiption: { type: String },
    // кол-во мест,
    peopleCount: { type: Number },
    // кем забронировано
    bookedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    // конец бронирования, указывается последний день, последняя его секунда
    endBooking: { type: Number }
})

module.exports = model('Property', PropertySchema);