const express = require("express");
const router = express.Router();
const ensureLogin = require("connect-ensure-login")

const uploadCloud = require("../configs/cloudinary.config")
const User = require("../models/User.model")


router.get("/", ensureLogin.ensureLoggedIn('/auth/login'), (req, res) => res.render("profile", { user: req.user }));

router.get("/profile", (req, res) => {
    userId = req.user._id
    userId.findById(userId)
        .then(profile => {
            console.log(profile)
            res.json(profile)
        })
        .catch(err => { res.json(err) })
})



module.exports = router