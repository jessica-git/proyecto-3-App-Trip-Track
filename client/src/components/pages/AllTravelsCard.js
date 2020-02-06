import React, { Component } from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import TravelService from "../../service/Travel.service"
import "../../styelsheets/Pages.css"

class AllTravelsCard extends Component {
    constructor(props) {
        super(props)
        this.travelAPI = new TravelService()
        this.state = {
            place: "",
            user: "",
            duration: "",
        }
    }

    getTravelByCity() {
        const place = this.props.match.params.place

        this.travelAPI.getTravelByCity(place)
            .then(apiResponse => {
                console.log("dame la ciudad", apiResponse.data)
                const filteredCities = apiResponse.data
                this.setState({ filteredCities })

            })
            .catch(err => console.log("Error get travel by city", err))
    }


    
    componentDidMount() {
        this.getTravelByCity()
        

    }

    render() {
        let title = this.props.match.params.place
        title = title.toUpperCase()
        
        const arrayCities = this.state.filteredCities
        if (!arrayCities) {
            return "Esperando los datos..."
        }

        return (
           
            <>
                <div className="imgHeader">
                    <h2>{title}</h2>
                </div>
                <div className="backgroundPage top">

                    <Container >
                        <Row>
                            {arrayCities.map(city => {
                                return (
                                    <Col md={4} className="allTravelCard">
                                        <Card className="oneCardTravels"> 
                                            <Card.Body>
                                                <Card.Title><strong>{city.place}</strong></Card.Title>
                                                <Card.Text>{city.duration} días</Card.Text>
                                                <Card.Text>{city.totalPrice}€</Card.Text>
                                                <Link className="btn btn-sm btn-secondary" to={`/travel/${city.place}/${city._id}`}>Ver detalles</Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                )
                            })}
                        </Row>
                    </Container>

                </div>
            </>
        )
    }

}

export default AllTravelsCard
