import React, { Component } from "react";
import TravelService from "../../service/Travel.service"
import Geocode from "react-geocode";
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";

Geocode.setApiKey({ env.process.{CLAVE_API_MAPS}}) //cambiar a correcto!
