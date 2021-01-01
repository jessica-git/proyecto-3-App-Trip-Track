const mongoose = require('mongoose')
const Schema = mongoose.Schema

const detailsSchema = new Schema({
    place: String,
    day: Number,
    lodgings: [{}],
    placeToVisit: [{}],
    paidExcursions: [{}],
    transport: [{}],
    restaurantsMeals: [{}],
    tips: String,
    imgPath: String,
    imgName: String,
}, {
    timestamps: true
})

const TravelDays = mongoose.model('TravelDays', detailsSchema)
module.exports = TravelDays
