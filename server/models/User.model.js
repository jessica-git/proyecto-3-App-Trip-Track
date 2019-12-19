const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    imgPath: {
        type: String,
        default:
            "https://res.cloudinary.com/ddthuxc9t/image/upload/v1576715266/app-travel/file_h16go9.png"
    },
    imgName: String,
}, {
    timestamps: true
})

//asdas
const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel