import React, { Component } from 'react'
import { Form, Tabs, Tab, Button, Card } from "react-bootstrap"

import TravelFormDaysEdit from "./TravelFormDaysEdit"
import TravelService from "../../service/Travel.service"

class TravelFormEdit extends Component {
    constructor(props) {
        super(props)
        this.TravelService = new TravelService()
        this.state = {
            travel: {
                place: "",
                duration: "",
                people: 0,
                totalPrice: 0,
                day: []
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let { place, duration, people, totalPrice } = this.state.travel
        let travelId = this.props.match.params.id
        this.TravelService.updateTravel(place, duration, people, totalPrice, travelId)
    }

    handleInputChange = e => {
        let { name, value } = e.target;
        this.setState({
            travel: { ...this.state.travel, [name]: value }
        })
    }

    componentDidMount() {

        this.TravelService.getOneTravelByID(this.props.match.params.id)
            .then(travel => {

                const idTravel = travel.data
                this.setState({ travel: idTravel })
            })
            .catch(err => console.log("Error travel edit", err))
    }

    render() {
        const arrayDays = this.state.travel.day

        return (
            <Form onSubmit={this.handleSubmit}>
                <Tabs defaultActiveKey="travel" transition={false} id="noanim-tab-example">
                    <Tab eventKey="travel" title="travel">
                        <Form.Group>
                            <Form.Label>Lugar:</Form.Label>
                            <Form.Control type="text" name="place" onChange={this.handleInputChange} value={this.state.travel.place} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Duración del viaje:</Form.Label>
                            <Form.Control type="text" name="duration" onChange={this.handleInputChange} value={this.state.travel.duration} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Personas:</Form.Label>
                            <Form.Control type="text" name="people" onChange={this.handleInputChange} value={this.state.travel.people} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Precio total del viaje: </Form.Label>
                            <Form.Control type="text" name="totalPrice" onChange={this.handleInputChange} value={this.state.travel.totalPrice} />
                        </Form.Group>
                        <Button variant="dark" size="sm" type="submit" >guardar</Button>

                    </Tab>
                </Tabs>
            </Form >
        )
    }

}

export default TravelFormEdit