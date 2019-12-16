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

Geocode.setApiKey(`${process.env.CLAVE_API_MAPS }`)

class Map extends Component {
    constructor() {
        super();
        this._service = new Service();
        this.state = {
           
        };
    }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
