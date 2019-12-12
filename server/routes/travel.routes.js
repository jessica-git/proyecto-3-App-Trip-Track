const express = require("express")
const router = express.Router()

const travelModel = require("../models/travel.model")
const day = require("../models/travelDays.model")

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

//Get para buscar por ciudad
router.get("/searchPlace/:place", (req, res) => {
    console.log(req.params.place, "aqui va el req.query de .get de /searchPlace")
    const place = req.params.place
    travelModel.find({ place: { '$regex': place, $options: 'i' } })
        .then(response => res.json(response))
        .catch(err => res.json(err))

})

router.post("/new", (req, res) => {
    const travel = req.body
    travelModel.create(travel)
        .then(theNewTravel => {
            console.log(theNewTravel)
            res.json(theNewTravel)
        })
        .catch(err => { res.json(err) })
})


// UNA CIUDAD CON DÍAS SIN DETALLE CON POPULATE
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




module.exports = router