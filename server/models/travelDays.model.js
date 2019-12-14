const mongoose = require('mongoose')
const Schema = mongoose.Schema

const detailsSchema = new Schema({
    place: String,
    day: Date,
    lodgings: [{ description: String, price: Number }],
    placeToVisit: [{ description: String, price: Number }],
    paidExcursions: [{ description: String, price: Number }],
    transport: [{ description: String, price: Number }],
    restaurantsMeals: [{ description: String, price: Number }],
    tips: String,
    imageUrl: String,
    cords: { type: { type: String }, coordinates: [Number] }

}, {
    timestamps: true
})


const TravelDays = mongoose.model('TravelDays', detailsSchema)
module.exports = TravelDays 

