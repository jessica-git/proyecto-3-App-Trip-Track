const express = require("express")
const router = express.Router()

const travelDays = require("../models/travelDays.model")



router.get("/travel/:id", (req, res) => {     
    travelId = req.params.id
    travelDays.findById(travelId)
        .then(theTravel => {
            console.log(theTravel)
            res.json(theTravel)
        })
        .catch(err => { res.json(err) })
})



module.exports = router