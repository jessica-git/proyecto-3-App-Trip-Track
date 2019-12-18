const express = require("express");
const router = express.Router();
const ensureLogin = require("connect-ensure-login")

const uploadCloud = require("../configs/cloudinary.config")
const User = require("../models/User.model")


router.get("/", ensureLogin.ensureLoggedIn('/auth/login'), (req, res) => res.render("profile", { user: req.user }));

//Mostrar información del usuario en el perfil
router.get("/profile", (req, res) => {
    userId = req.user._id
    userId.findById(userId)
        .then(profile => {
            res.json(profile)
        })
        .catch(err => { res.json(err) })
})

//Edit profile
// routes.post('/profile/edit/:id', (req, res, next) => {
//     const { username, imageUrl } = req.body

//     User.findByIdAndUpdate(req.params.id, { username, imageUrl},{ new: true })
//         .then(() => res.json({ message: "User has been updated" }))
//         .catch(err => console.log(err));
// });




module.exports = router