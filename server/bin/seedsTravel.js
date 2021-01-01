require("dotenv").config();
const mongoose = require("mongoose");

mongoose
    .connect(`${process.env.DB}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));

//importante el orden de requerimiento para que aparezca en la DB
const User = require('../models/User.model');
const Travel = require("../models/Travel.model");
const TravelDays = require("../models/TravelDays.model");
const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

const user = {
    _id: mongoose.Types.ObjectId(),
    username: "Jessica",
    email: "jess@jess.com",
    password: bcrypt.hashSync('1234', salt),
    imgPath: "https://res.cloudinary.com/ddthuxc9t/image/upload/v1576715266/app-travel/file_h16go9.png",
    imgName: "user icon"
}

const day1Id = mongoose.Types.ObjectId()
const day2Id = mongoose.Types.ObjectId()
const day3Id = mongoose.Types.ObjectId()

const travel = {
    place: "Granada",
    user: user._id,
    duration: 3,
    people: 2,
    totalPrice: 350,
    day: [day1Id, day2Id, day3Id]
}

const days = [{
    _id: day1Id,
    place: "Albaicín",
    day: 03/10/2019,
    lodgings: [{
        lodgingsDescription: "Hotel vistas al mirador 5 estrellas, direccion calle poeta, numero 3, 18092",
        lodgingsPrice: 150
    }],
    placeToVisit: [{
        placeToVisitDescription: "barrio del Albaicín y vista al mirados de San Nicolás",
        placeToVisitPrice: 0
    }],
    paidExcursions: [{
        paidExcursionsDescription: "entrada al aljibe",
        paidExcursionsPrice: 5,
    }],
    transport: [{
        transportDescription: "un ratito a pie y otro caminando",
        transportPrice: 0
    }],
    restaurantsMeals: [{
        restaurantsMealsDescription: "restaurante Juan Ranas",
        restaurantsMealsPrice: 20,
    }],
    tips: "aconsejo calzado cómodo para andar porque las calles están hechas de piedras y muy empinadas",
    imgPath: "https://res.cloudinary.com/ddthuxc9t/image/upload/v1576715667/app-travel/albaicin_usld7m.jpg",
    imgName: "imagen Albacín",
},
{
    _id: day2Id,
    place: "Sacromonte",
    day: 04/10/2019,
    lodgings: [{
        lodgingsDescription: "Hotel vistas al mirador 5 estrellas, direccion calle poeta, numero 3, 18092",
        lodgingsPrice: 0,
    }],
    placeToVisit: [{
        placeToVisitDescription: "barrio del Sacromonte",
        placeToVisitPrice: 0
    }],
    paidExcursions: [{
        paidExcursionsDescription: "Cueva y baile",
        paidExcursionsPrice: 35,
    }],
    transport: [{
        transportDescription: "microbús",
        transportPrice: 2.50
    }],
    restaurantsMeals: [{
        restaurantsMealsDescription: "Compra en el super",
        restaurantsMealsPrice: 10,
    }],
    tips: "aconsejo calzado cómodo para andar porque las calles están hechas de piedras y muy empinadas",
    imgPath: "https://res.cloudinary.com/ddthuxc9t/image/upload/v1576715672/app-travel/sacromonte_nprlt9.jpg",
    imgName: "imagen Sacromonte",
},
{
    _id: day3Id,
    place: "Alpujarra",
    day: 05/10/2019,
    lodgings: [{
        lodgingsDescription: "Casa rural nuevo campo, direccion calle San Jose, numero 11, 18098",
        lodgingsPrice: 75
    }],
    placeToVisit: [{
        placeToVisitDescription: "visitas a los pueblos de la Alpujarra",
        placeToVisitPrice: 0
    }],
    paidExcursions: [{
        paidExcursionsDescription: "visita privada a un viejo molino y a un telar",
        paidExcursionsPrice: 7,
    }],
    transport: [{
        transportDescription: "tenemos que alquilar coche, por su situación geográfica",
        transportPrice: 60,
    }],
    restaurantsMeals: [{
        restaurantsMealsDescription: "Comeremos en los bares típicos de alli, un buen plato alpujarreño",
        restaurantsMealsPrice: 15,
    }],
    tips: "aconsejo calzado cómodo para andar porque las calles están hechas de piedras y muy empinadas",
    imgPath: "https://res.cloudinary.com/ddthuxc9t/image/upload/v1576715668/app-travel/alpujarra_qotfiw.jpg",
    imgName: "imagen Alpujarra granadina",
}]

User.create(user)
    .then(result => console.log(result))
    .catch(err => console.log(err))

TravelDays.create(days)
    .then(result => console.log(result))
    .catch(err => console.log(err))

Travel.create(travel)
    .then(result => console.log(result))
    .catch(err => console.log(err))