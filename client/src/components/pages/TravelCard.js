import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion'

import TravelService from "../../service/Travel.service"
import TravelDays from "./TravelDays"


class TravelCard extends Component {
    constructor(props) {
        super(props)
        this.travelAPI = new TravelService()
        this.state = { travel: {} }

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
        const travelUserId = this.state.travel.user
        const loggedInUser = this.props.loggedInUser
        let saveButton;

        if (loggedInUser && travelUserId != loggedInUser._id) {
            saveButton = <Link className="btn btn-sm btn-dark">Guardar</Link>
        }
        return (
            < Card style={{ width: '18rem' }}>
                <Card.Text>Viaje creado por: {city.user}</Card.Text>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" alt="maps" />

                <Card.Body>
                    <Card.Title>{city.place}</Card.Title>
                    {/* <Card.Text>rating</Card.Text> */}
                    <Card.Text>PEOPLE: {city.people}</Card.Text>
                    <Card.Text>PRICE: {city.totalPrice} €</Card.Text>
                    <Card.Text>Duration: {city.duration}</Card.Text>
                </Card.Body>

                {city.day && city.day.map((day, idx) => {
                    return (<Accordion key={idx}>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">Día {idx + 1}</Accordion.Toggle>
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
                    {saveButton}
                    <Link to={`/search/${city.place}`} className="btn btn-sm btn-dark">Volver</Link>
                </Card.Body>
            </Card >
        )

    }
}

export default TravelCard



