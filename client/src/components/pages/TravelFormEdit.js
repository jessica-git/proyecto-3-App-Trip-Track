import React, { Component } from 'react'
import { Form, Tabs, Tab, Button } from "react-bootstrap"

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

    handleSubmit = () => {
        this.TravelService.updateTravel(this.state.travel);
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
                console.log("que llega de alltravel", idTravel)
            })
            .catch(err => console.log("Error get travel by city", err))

    }

    render() {
        const arrayDays = this.state.travel.day

        return (
            <Form>
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
                    {arrayDays && arrayDays.map((day, idx) => {
                        return (
                            <Tab eventKey="day" title="Day" key={idx}>
                                <TravelFormDaysEdit key={day._id} {...day} />
                            </Tab>
                        )
                    })}

                </Tabs>
            </Form >
        )
    }

}

export default TravelFormEdit