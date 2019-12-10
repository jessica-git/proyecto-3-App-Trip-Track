const mongoose = require('mongoose')
const Schema = mongoose.Schema

const travelSchema = new Schema({
    title: String,
    days: Date,  
    people: Number,
    totalPrice: Number,
    day: [{ type: Schema.Types.ObjectId, ref: 'TravelDetails'}]
}, {
    timestamps: true
})


const Travel = mongoose.model('Travel', travelSchema)
module.exports = Travel