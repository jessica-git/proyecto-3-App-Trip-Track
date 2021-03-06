import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Image, Container, Row, Col } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion'
import back from "../../images/back.jpg"

import TravelService from "../../service/Travel.service"
import TravelDays from "./TravelDays"


class TravelCard extends Component {
    constructor(props) {
        super(props)
        this.travelAPI = new TravelService()
        this.state = {
            travel: null
        }

    }

    getTravelDetailsInfo() {
        const cityId = this.props.match.params.id

        this.travelAPI.getOneTravelByID(cityId)
            .then(apiResponse => {
                this.setState({ travel: apiResponse.data })
            })
            .catch(err => console.log("Error details info", { err }))
    }

    printCity() {
        this.getTravelDetailsInfo()
    }

    componentDidMount() {
        this.printCity()
    }

    render() {
        const city = this.state.travel
        const loggedInUser = this.props.loggedInUser
        let saveButton;

        if (city) {
            const travelUserId = this.state.travel.user

            if (loggedInUser && travelUserId != loggedInUser._id) {
                saveButton = <Link className="btn btn-sm btn-dark marginLeft">Guardar</Link>
            }
        }
        return city ? (
            <div className="backgroundPage">
                <Container className="travelCard">
                <Row className="justify-content-center">
                    <Col md={8}>

                        <Card className="cardTravel">
                            <Card.Text className="formText">Usuario: {city.user}</Card.Text>
                            <Card.Img variant="top" src={city.day[0].imgPath} alt="city image" />

                            <Card.Body>
                                <Card.Title> <strong>{city.place}</strong></Card.Title>
                                <Card.Text> <strong>Personas:</strong>{city.people}</Card.Text>
                                <Card.Text> <strong>Duración:</strong>{city.duration}</Card.Text>
                                <Card.Text> <strong>Precio total:</strong>{city.totalPrice} €</Card.Text>
                            </Card.Body>

                            {city.day && city.day.map((day, idx) => {

                                return (<Accordion key={idx}>
                                    <Card>
                                        <Card.Header >
                                            <Accordion.Toggle as={Button} variant="link"  eventKey="0">Día {idx + 1}</Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <TravelDays key={day._id} {...day} />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion >)
                            })}

                            <Card.Body>
                                    <Link to={`/search/${city.place}`}  >   
                                    <Image src={back} style={{ width: "50px" }} roundedCircle /></Link>
                                {saveButton}
                                <Link to={`/edit/travel/${city._id}`} className="btn btn-sm btn-secondary marginLeft" >Editar</Link>
                            </Card.Body>
                        </Card >

                    </Col>
                </Row>
            </Container>
            </div>
        ) : <div className="backgroundPage margin"> "esperando viaje" </div>

    }
}

export default TravelCard



