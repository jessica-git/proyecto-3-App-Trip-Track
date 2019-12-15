import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import TravelService from "../../service/Travel.service"
import TravelCard from './TravelCard'


class AllTravelsCard extends Component {
    constructor(props) {
        super(props)
        this.travelAPI = new TravelService()
        this.state = {
            place: "",
            user: "",
            duration: "",
            // rating: 0
        }
    }

    getTravelByCity() {
        // console.log(this.props.match.params.place, "props de allTravelsCard")
        const place = this.props.match.params.place

        this.travelAPI.getTravelByCity(place)
            .then(apiResponse => {
                const filteredCities = apiResponse.data
                this.setState({ filteredCities })

            })
            .catch(err => console.log("Error get travel by city", err))
    }

    printTravels() {
        this.getTravelByCity()
    }

    componentDidMount() {
        this.printTravels()
    }

    render() {
        // console.log("datos que vamos a renderizar para travelCards", this.state.filteredCities)

        const arrayCities = this.state.filteredCities
        return arrayCities ? arrayCities.map(city => {
            return (

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" alt="maps" />
                    <Card.Body>
                        <Card.Title>{city.place}</Card.Title>
                        <Card.Text>{city.user}</Card.Text>
                        <Card.Text>{city.duration}</Card.Text>
                        {/* <Card.Text>rating</Card.Text> */}
                        <Link className="btn btn-sm btn-dark" to={`/travel/${city.place}/${city._id}`}>Ver detalles</Link>
                    </Card.Body>
                </Card>

            )
        }) : "Esperando los datos..."

    }

}

export default AllTravelsCard 