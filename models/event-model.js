const { Schema, model } = require('mongoose');

const EventSchema = new Schema({
    images: { type: Array },
    date: Number,
    // quill
    description: { type: String },
})

module.exports = model('Event', EventSchema);