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
            console.log(profile)
            res.json(profile)
        })
        .catch(err => { res.json(err) })
})

//Editar perfil de usuario
// routes.post('/profile/edit', (req, res, next) => {
//     const { username, imageUrl } = req.body.edit

//     User.findById(req.user._id, { $set: { username, imageUrl } }, { new: true })   //$set sustituye el valor de un campo por el valor especificado
//         .then(user => res.json({ user }))
//         .catch(err => {
//             console.log('Error Edit Profile', err)
//             next()
//         })

// })



module.exports = router