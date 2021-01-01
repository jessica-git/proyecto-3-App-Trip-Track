require("dotenv").config();
const mongoose = require("mongoose");

mongoose
    .connect(`${process.env.DB}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));

const connection = mongoose.connection;
connection.once("open", function() {
  console.log("*** MongoDB got connected ***");
  console.log(`Our Current Database Name : ${connection.db.databaseName}`);
  mongoose.connection.db.dropDatabase(
    console.log(`${connection.db.databaseName} database dropped.`)
  );
});

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

const travel = {
    place: "Granada",
    user: user._id,
    duration: 3,
    people: 2,
    totalPrice: 350,
    day: [day1Id]
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
}]

userCreation = User.create(user)
    .then(result => User.deleteMany({}))
    .catch(err => console.log(err))

travelDaysCreation = TravelDays.create(days)
    .then(result => TravelDays.deleteMany({}))
    .catch(err => console.log(err))

travelCreation = Travel.create(travel)
    .then(result => Travel.deleteMany({}))
    .catch(err => console.log(err))

Promise.all([
  userCreation,
  travelDaysCreation,
  travelCreation
])
  .then(process.exit);