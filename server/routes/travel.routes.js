const express = require("express")
const router = express.Router()

const travelModel = require("../models/travel.model")

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

    travelModel.find({ place })
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






module.exports = router