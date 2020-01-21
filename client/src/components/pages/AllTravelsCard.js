import React, { Component } from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import TravelService from "../../service/Travel.service"

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

        const arrayCities = this.state.filteredCities
        if (!arrayCities) {
            return "Esperando los datos..."
        }

        return (
            <>
                <div className="imgHeader">
                    <h2>{this.props.match.params.place}</h2>
                </div>

                {
                    arrayCities.map(city => {
                        return (
                            <Container >
                                <Row md={4}>
                                    <Col>
                                        <Card style={{ width: '18rem', margin: 20 }}>
                                            <Card.Body>
                                                <Card.Title><strong>{city.place}</strong></Card.Title>
                                                <Card.Text>{city.duration} días</Card.Text>
                                                <Card.Text>{city.totalPrice}€</Card.Text>
                                                <Link className="btn btn-sm btn-secondary" to={`/travel/${city.place}/${city._id}`}>Ver detalles</Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        )
                    })
                }
            </>
        )
    }

}

export default AllTravelsCard 