import React, { Component } from "react";
import TravelService from "../../service/Travel.service"
import Geocode from "react-geocode";


import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";

Geocode.setApiKey(`${process.env.CLAVE_API_MAPS}`)

class Map extends Component {
    constructor(props) {
        super(props);
        this.TravelService = new TravelService();
        this.state = {
            travels: [],
            places: [],
            place: "",
            isOpen: false,
            selectedPlace: null
        }
    }

    //para mostrar las coordenadas
    componentDidMount = () => {
        this.TravelService.getAllTravels()
            .then(alltravelsFromDB => {
                this.setState({ travels: alltravelsFromDB.data })
                this.state.travels.forEach(elm => {
                    // Geocode.fromPlace(elm.place)
                })
            })
            .then(response => {
                const placesCopy = [...this.state.places]
                const { lat, lng } = response.results[0].geometry.location;
                placesCopy.push({ lat, lng });
                this.setState({ place: { lat, lng }, places: placesCopy })
            })
            .catch(err => console.log(err));

    };

    getTravel = travel => { this.setState({ selectedTravel: travel }) }

    handleToggleOpen = idx => { this.setState({ isOpen: true }) }

    handleToggleClose = () => { this.setState({ isOpen: false }) }

    render() {
        // console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<", this.state.places.map(elm))

        return (
            
            <GoogleMap defaultZoom={10} defaultCenter={{ lat: 37.177009, lng: -3.589556 }} >
                {this.state.places.map((elm, idx) => (
                    <Marker key={idx} position={elm} onClick={() => this.getTravel(elm)}></Marker>
                ))}
                {this.state.selectedPlace && (
                    <InfoWindow position={this.state.selectedPlace} onCloseClick={() => { this.getTravel(null) }}>
                        <small>
                            {this.state.selectedPlace.lat}, {(this.state.selectedPlace.lng)}
                        </small>
                    </InfoWindow>
                )}
            </GoogleMap>

        )
    }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));


export default WrappedMap;
