import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import service from "../../service/Travel.service"


class AllTravelsCard extends Component {
    constructor(props) {
        super(props)
        this.travelAPI = new service()
        this.state = {
            place: "",
            user: "",

            // rating: 0
        }
    }

    getTravelByCity() {
        // console.log(this.props.match.params.place, "props de allTravelsCard")
        const place = this.props.match.params.place

        this.travelAPI.getTravelByCity(place)
            .then(apiResponse => {
                const filteredCities = apiResponse.data
                console.log(filteredCities, "la city de alltravels")
                this.setState({ filteredCities })

            })
            .catch(err => console.log("Error", err))
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

            // console.log("console de place:", city.user)
            return (
                <>
                    <Col md={4} >
                        <Row>
                            <h3>{city.place}</h3>
                        </Row>
                        <Row>
                            <p>{city.user}</p>
                        </Row>
                        <div>
                            <p>aqui va el mapaaaaaaaaaaa</p>
                        </div>
                        <Link className="btn btn-sm btn-dark" to={`/travel/${this.props._id}`}>Ver detalles</Link>
                    </Col >
                </>
            )
        }) : "Esperando los datos..."

    }

}

export default AllTravelsCard 