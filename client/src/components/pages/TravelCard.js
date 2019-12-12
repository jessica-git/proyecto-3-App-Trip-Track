import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion'

import service from "../../service/Travel.service"
import TravelDays from "./TravelDays"


class TravelCard extends Component {
    constructor(props) {
        super(props)
        this.travelAPI = new service()
        this.state = { travel: {} }

    }

    getTravelDetailsInfo() {
        const cityId = this.props.match.params.id

        this.travelAPI.getOneTravelByID(cityId)
            .then(apiResponse => {
                console.log("soy la respuesta del back", apiResponse.data)

                this.setState({ travel: apiResponse.data })
                console.log("es el this.state", this.state)
            })
            .catch(err => console.log("Errorrrrrr", { err }))
    }

    printCity() {
        this.getTravelDetailsInfo()
    }

    componentDidMount() {
        this.printCity()
    }

    render() {

        console.log(this.state.travel)
        const city = this.state.travel
        console.log(city)
        return (
            < Card style={{ width: '18rem' }}>
                <Card.Text>Viaje creado por: {city.user}</Card.Text>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" alt="maps" />
                <Card.Body>
                    <Card.Title>{city.place}</Card.Title>
                    {/* <Card.Text>rating</Card.Text> */}
                    <Card.Text>PEOPLE: {city.people}</Card.Text>
                    <Card.Text>PRICE: {city.totalPrice} €</Card.Text>
                    <Card.Text>Duration: {city.days}</Card.Text>
                </Card.Body>
                < Accordion >
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">Día 1</Accordion.Toggle>
                        </Card.Header>
                        {city.day && (<Accordion.Collapse eventKey="0">
                            <Card.Body>detalles dia 1
                                {city.day.map(day => <TravelDays key={day._y} {...day} />)}
                            </Card.Body>
                        </Accordion.Collapse>)}

                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">Día 2</Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>detalles dia 2</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion >
                <Card.Body>
                    <Link className="btn btn-sm btn-dark" to={`/travel/${this.props._id}`}>Guardar</Link>
                </Card.Body>
            </Card >
        )

    }
}

export default TravelCard



