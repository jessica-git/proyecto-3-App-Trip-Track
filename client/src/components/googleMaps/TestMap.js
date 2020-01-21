import React, { Component } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import Geocode from "react-geocode";
import TravelService from "../../service/Travel.service"

Geocode.setApiKey("AIzaSyCOs2fBsxAU-xVqjcVkAnYsmvyQ0ITiWJA")
Geocode.setLanguage("es")
Geocode.setRegion("es")
Geocode.enableDebug()



class MainMap extends Component {
    constructor(props) {
        
        super(props)
        this.TravelService = new TravelService();
        this.state = {
            travels: []
        }
    }

    getAllCityByUser() {
        return this.TravelService.getTravelsByUser(this.props.loggedInUser._id)
            .then(apiResponse => {
                this.setState({ travels: apiResponse.data }, () => {
                    return
                })
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
        this.getAllCityByUser().then(() => {


            //3 creo un array de promesas para esperar a todos con un promise all
            let promiseArray = this.state.travels.map(travel => {
                //1 recorremos el travels llamando a geocoder para cada uno
                return Geocode.fromAddress(travel.place)
                    .then(response => {
                        const { lat, lng } = response.results[0].geometry.location
                        return { lat, lng }
                        //2 como geocoder toma tiempo tengo que esperar a todos.

                    },
                        error => { console.error(error) }
                    )

            })
            //4 hago el promise all y cuando acaba me guardo el resultado en el state
            Promise.all(promiseArray).then(x => this.setState({ coords: x }))
        })
    }
    render() {

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
                        {/* 5 pinto los markers con el state y como lanza error compruebo primero si existen las coords ya */}
                        {this.state.coords && this.state.coords.map(coord => <Marker position={coord}></Marker>)}
                    </GoogleMap>
                </LoadScript>
            </>

        )
    }
}




export default MainMap