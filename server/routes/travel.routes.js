const express = require("express")
const router = express.Router()

const uploader = require('../configs/cloudinary.config');

const travelModel = require("../models/travel.model")
const day = require("../models/travelDays.model")  //necesario para populate
const userModel = require("../models/User.model")


router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {

    if (!req.file) {
        next(new Error('No file uploaded!'));
        return;
    }
    res.json({ secure_url: req.file.secure_url });
})


//todas estas rutas comienzan por /api/travels/

//devuelve todo
router.get("/all", (req, res) => {
    travelModel.find()
        .populate("day")
        .then(allTheTravels => {
            console.log(allTheTravels)
            res.json(allTheTravels)
        })
        .catch(err => { res.json(err) })
})

//Buscar por ciudad
router.get("/searchPlace/:place", (req, res) => {
    const place = req.params.place
    travelModel.find({ place: { '$regex': place, $options: 'i' } })
        .then(response => res.json(response))
        .catch(err => res.json(err))

})

// Vista general de Travel sin detalle de días con Populate
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

//Devolver vijes de usuario
router.get("/myTravels", (req, res) => {
    userModel.find({ user: req.user._id })
        .then(response => res.json(response))
        .catch(err => res.json(err))
})


//Crear nuevo Travel
router.post("/new", (req, res) => {
    const travel = req.body
    travelModel.create(travel)
        .then(theNewTravel => res.json(theNewTravel))
        .catch(err => { res.json(err) })
})



module.exports = router