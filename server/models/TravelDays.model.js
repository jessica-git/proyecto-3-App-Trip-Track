const mongoose = require('mongoose')
const Schema = mongoose.Schema

const detailsSchema = new Schema({
    place: String,
    day: Date,
    lodgings: [{}],
    placeToVisit: [{}],
    paidExcursions: [{}],
    transport: [{}],
    restaurantsMeals: [{}],
    tips: String,
    imageUrl: String,
}, {
    timestamps: true
})

const TravelDays = mongoose.model('TravelDays', detailsSchema)
module.exports = TravelDays

