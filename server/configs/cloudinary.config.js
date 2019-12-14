
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

var storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'app-travel',
    allowedFormats: ['jpg', 'jpeg', 'png'],
    filename: function (req, file, cb) {
        cb(null, file.originalname); 
    }
});

const uploader = multer({ storage });

module.exports = uploader