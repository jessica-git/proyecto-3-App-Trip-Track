const mongoose = require('mongoose')
const Schema = mongoose.Schema

const detailsSchema = new Schema({
    title: String,
    day: Date,
    lodgings: [{ description: String, price: Number }],
    placeToVisit: [{ description: String, price: Number }],
    paidExcursions: [{ description: String, price: Number }],
    transport: [{ description: String, price: Number }],
    restaurantsMeals: [{ description: String, price: Number }],
    tips: String,
    cords: { type: { type: String }, coordinates: [Number] }

}, {
    timestamps: true
})


const TravelDetails = mongoose.model('TravelDetails', detailsSchema)
module.exports = TravelDetails 