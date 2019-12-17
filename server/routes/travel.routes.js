const express = require("express")
const router = express.Router()

const uploader = require('../configs/cloudinary.config');

const travelModel = require('../models/Travel.model')
const dayModel = require("../models/TravelDays.model")  //necessary for populate
const userModel = require("../models/User.model")


router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {

    if (!req.file) {
        next(new Error('No file uploaded!'));
        return;
    }
    res.json({ secure_url: req.file.secure_url });
})


//All these routes begin with /api/travels/

//Return all
router.get("/all", (req, res) => {
    travelModel.find()
        .populate("day")
        .populate("user")
        .then(allTheTravels => {
            console.log(allTheTravels)
            res.json(allTheTravels)
        })
        .catch(err => { res.json(err) })
})

//Search by city
router.get("/searchPlace/:place", (req, res) => {
    const place = req.params.place
    travelModel.find({ place: { '$regex': place, $options: 'i' } })
        .then(response => res.json(response))
        .catch(err => res.json(err))

})

//Overview of Travel without days detail with Populate
router.get("/travel/:id", (req, res) => {
    travelId = req.params.id
    travelModel.findById(travelId)
        .populate("day")
        .then(theTravel => {
            console.log(theTravel)
            res.json(theTravel)
        })
        .catch(err => { res.json(err) })
})

//Travels by user
router.get("/myTravels/:userId", (req, res) => {
    travelModel.find({ user: req.params.userId })
        .then(allTravels => res.json(allTravels))
        .catch(err => res.json(err))
})



//Create a new travel
router.post("/new", (req, res) => {
    const travelData = req.body
    travelModel.create(travelData)
        .then(newTravel => {
            console.log(newTravel)
            res.json(newTravel)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

//Create a new day
router.post("/newDay", (req, res) => {
    const dayData = req.body
    dayModel.create(dayData)
        .then(newDay => res.json(newDay._id))
        .catch(err => { res.json(err) })
})

//Edit travel
router.post("/edit/travel/:id", (req, res) => {
    const { place, duration, people, totalPrice } = req.body
    travelId = req.params.id
    travelModel.findByIdAndUpdate(travelId, {
        place, duration, people, totalPrice, day
    })
        .then(updateTravel => res.json(updateTravel))
        .catch(err => { res.json(err) })
})

//Edit day
router.post("/edit/day/:id", (req, res) => {
    const { place, day, people, lodgings, placeToVisit, paidExcursions, transport, restaurantsMeals, tips, imageUrl } = req.body
    dayId = req.params.id
    dayModel.findByIdAndUpdate(dayId, {
        place, day, people, lodgings, placeToVisit, paidExcursions, transport, restaurantsMeals, tips, imageUrl
    })
        .then(updateDay => res.json(updateDay))
        .catch(err => { res.json(err) })
})



module.exports = router