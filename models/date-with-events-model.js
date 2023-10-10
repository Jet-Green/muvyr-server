const { Schema, model } = require('mongoose');

const DateWithEventsSchema = new Schema({
    date: Number,
    // текстом всё прописать пока-что
    events: Array
})

module.exports = model('DateWithEvents', DateWithEventsSchema);