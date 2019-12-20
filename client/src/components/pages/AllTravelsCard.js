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
        return arrayCities ? arrayCities.map(city => {
            return (
                <Container className="margin">
                    <Col md={6}>
                        <Row className="align-items-center">
                            <Card style={{ width: '18rem' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" alt="maps" /> */}
                                <Card.Body>
                                    <Card.Title><strong>{city.place}</strong></Card.Title>
                                    {/* <Card.Text>{city.user}</Card.Text> */}
                                    <Card.Text>{city.duration} días</Card.Text>
                                    <Card.Text>{city.totalPrice}€</Card.Text>
                                    {/* <Card.Text>rating</Card.Text> */}
                                    <Link className="btn btn-sm btn-secondary" to={`/travel/${city.place}/${city._id}`}>Ver detalles</Link>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </Container>

            )
        }) : "Esperando los datos..."

    }

}

export default AllTravelsCard 