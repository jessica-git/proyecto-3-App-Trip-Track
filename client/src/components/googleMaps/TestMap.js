import React, { Component } from 'react'
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, Marker } from '@react-google-maps/api'
import Geocode from "react-geocode";
import TravelService from "../../service/Travel.service"

Geocode.setApiKey("AIzaSyCOs2fBsxAU-xVqjcVkAnYsmvyQ0ITiWJA")
Geocode.setLanguage("es")
Geocode.setRegion("es")
Geocode.enableDebug()


class MainMap extends Component {
    constructor(props) {
        console.log("las props para maps", props)
        super(props)
        this.TravelService = new TravelService();
        this.state = {
            travels: []
        }
        // this.onMapClick = this.onMapClick.bind(this)
    }

    getAllCityByUser() {
        this.TravelService.getTravelsByUser(this.props.loggedInUser._id)
            .then(apiResponse => {
                this.setState({ travels: apiResponse.data })
            })
            .catch(err => console.log("Error update travel list", err))
    }

    directionsCallback(response) {

        if (response !== null) {
            if (response.status === 'OK') {
                this.setState(() => ({ response, }))
            } else {
                console.log('goo', response)
            }
        }
    }

    onMapClick(...args) {
        console.log('onClick args: ', args)
    }

    componentDidMount() {
        this.getAllCityByUser()
        Geocode.fromAddress(this.state.travel)
            .then(response => {
                const { lat, lng } = response.results[0].geometry.location
                console.log(lat, lng)
            },
                error => { console.error(error) }
            )
    }
    render() {
        // const position = {
        //     lat: 37.772,
        //     lng: -122.214
        // },
        // const onLoad = marker => {
        //     console.log('marker: ', marker)
        // },
        // cons onLoad = infoWindow => {
        //     console.log('infoWindow: ', infoWindow)
        // }

        return (
            <>

                <LoadScript id="script-loader"
                    googleMapsApiKey={`${process.env.REACT_APP_KEY}`}>
                    <GoogleMap
                        id='example-map'
                        mapContainerStyle={{
                            height: "400px",
                            width: "400px",
                        }}
                        zoom={2}
                        center={{
                            lat: 37.177009,
                            lng: -3.589556
                        }}
                        options={{
                            disableDefaultUI: true
                        }}

                    >
                        <Marker position={{ lat: 33.772, lng: -117.214 }}></Marker>
                    </GoogleMap>
                </LoadScript>
                {/* <InfoWindow
                    onLoad={onLoad}
                    position={position}
                ></InfoWindow>
                <Marker onLoad={onLoad} position={position}></Marker> */}
            </>

        )
    }
}




export default MainMap