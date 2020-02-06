import React, { Component } from 'react'
import TravelService from "../../service/Travel.service"
import { Card, Container, Row, Col } from 'react-bootstrap'
import imgRating from "../../images/rating.png"
class Inspired extends Component {
    constructor(props) {
        super(props)
        this.TravelService = new TravelService()
        this.state = {
            travels: []
        }
    }

    getAllTravelsTheUsers() {
        this.TravelService.getAllTravels()
            .then(apiResponse => {
                this.setState({ travels: apiResponse.data })
            })
            .catch(err => console.log("Error all travel inspiration", { err }))
    }

    componentDidMount() {
        this.getAllTravelsTheUsers()
    }

    render() {

        const cards = this.state.travels.map(travel => {
            return (

                <Col md={4}>
                    <Card className="oneCardTravels">
                        <Card.Img variant="top" src={imgRating} />
                        <Card.Body>
                            <Card.Title>{travel.place}</Card.Title>
                            <Card.Text>
                                Viaje es la acción y efecto de viajar.
                                   </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Card.Link href="#">Detalles del viaje</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>


            )
        })
        return this.state.travels ? (
            <>

                <div className="imgHeader">
                    <h2>INSPÍRATE CON ESTOS VIAJES</h2>
                </div>

                <div className="backgroundPage top">
                    <Container>
                        <Row className=" justify-content-center">
                            {cards}
                        </Row>
                    </Container>
                </div>
            </>
        ) : "Esperando los viajes"
    }
}

export default Inspired