const mongoose = require("mongoose");
const Travel = require("../models/travel.model");
const TravelDetails = require("../models/travel.details.model")

require("dotenv").config();

mongoose.connect(`${process.env.DB}`);


Travel.collection.drop()
TravelDetails.collection.drop()

const travel = [
    {
        title: "Granada",
        days: 5,
        people: 2,
        totalPrice: 350,
        day: [{objectId: "5dee78954115fe95592e6949"}]

    }
]

const days = [{
    title: "Albaicín",
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
}]

Travel.create(travel)
    .then(result => console.log(result))
    .catch(err => console.log(err))

TravelDetails.create(days)
    .then(result => console.log(result))
    .catch(err => console.log(err))
