const mongoose = require('mongoose')
const Schema = mongoose.Schema
const TravelDays = require("./travelDays.model")

const travelSchema = new Schema({
    place: String,
    user: String,
    days: Date,
    people: Number,
    totalPrice: Number,
    day: [{ type: Schema.Types.ObjectId, ref: 'TravelDays' }],
    // rating: Number
}, {
    timestamps: true
})


const Travel = mongoose.model('Travel', travelSchema)
module.exports = Travel