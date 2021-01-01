const mongoose = require('mongoose')
const Schema = mongoose.Schema

const travelSchema = new Schema({
    place: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    duration: { type: Number, required: true },
    people: Number,
    totalPrice: Number,
    day: [{ type: Schema.Types.ObjectId, ref: 'TravelDays' }],
    // rating: Number
}, {
    timestamps: true
})

const Travel = mongoose.model('Travel', travelSchema)
module.exports = Travel
