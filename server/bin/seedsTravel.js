const mongoose = require("mongoose");
const Travel = require("../models/travel.model");
const TravelDays = require("../models/travelDays.model")

require("dotenv").config();

mongoose.connect(`${process.env.DB}`);


Travel.collection.drop()
TravelDays.collection.drop()

const travel = [
    {
        place: "Granada",
        days: 3,
        people: 2,
        totalPrice: 350,
        day: [{ objectId: "5dee78954115fe95592e6949" }]

    }
]

const days = [{
    place: "Albaicín",
    user: "Jéssica",
    day: Date.now(),
    lodgings: [{
        description: "Hotel vistas al mirador 5 estrellas, direccion calle poeta, numero 3, 18092",
        price: 150
    }],
    placeToVisit: [{
        description: "barrio del Albaicín y vista al mirados de San Nicolás",
        price: 0
    }],
    paidExcursions: [{
        description: "entrada al aljibe",
        price: 5,
    }],
    transport: [{
        description: null,
        price: 0
    }],
    restaurantsMeals: [{
        description: "restaurante Juan Ranas",
        price: 20,
    }],
    tips: "aconsejo calzado cómodo para andar porque las calles están hechas de piedras y muy empinadas",
    imageUrl: String,
    cords: {
        coordinates: [37.184953, -3.589973]
    }
},


{
    place: "Sacromonte",
    user: "Jéssica",
    day: Date.now(),
    lodgings: [{
        description: "Hotel vistas al mirador 5 estrellas, direccion calle poeta, numero 3, 18092",
        price: 0,
    }],
    placeToVisit: [{
        description: "barrio del Sacromonte",
        price: 0
    }],
    paidExcursions: [{
        description: "Cueva y baile",
        price: 35,
    }],
    transport: [{
        description: "microbús",
        price: 2.50
    }],
    restaurantsMeals: [{
        description: "Compra en el super",
        price: 10,
    }],
    tips: "aconsejo calzado cómodo para andar porque las calles están hechas de piedras y muy empinadas",
    imageUrl: String,
    cords: {
        coordinates: [37.183166, -3.576771]
    }
},


{
    place: "Alpujarra",
    user: "Jéssica",
    day: Date.now(),
    lodgings: [{
        description: "Casa rural nuevo campo, direccion calle San Jose, numero 11, 18098",
        price: 75
    }],
    placeToVisit: [{
        description: "visitas a los pueblos de la Alpujarra",
        price: 0
    }],
    paidExcursions: [{
        description: null,
        price: 0,
    }],
    transport: [{
        description: "tenemos que alquilar coche, por su situación geográfica",
        price: 60,
    }],
    restaurantsMeals: [{
        description: "Comeremos en los bares típicos de alli, un buen plato alpujarreño",
        price: 15,
    }],
    tips: "aconsejo calzado cómodo para andar porque las calles están hechas de piedras y muy empinadas",
    imageUrl: String,
    cords: {
        coordinates: [36.961629, -3.358844]
    }
}]

Travel.create(travel)
    .then(result => console.log(result))
    .catch(err => console.log(err))

TravelDays.create(days)
    .then(result => console.log(result))
    .catch(err => console.log(err))
