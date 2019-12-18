import React, { Component } from 'react'
import { Form, Tabs, Tab } from "react-bootstrap"

import TravelFormDaysEdit from "./TravelFormDaysEdit"

import TravelService from "../../service/Travel.service"
class TravelFormEdit extends Component {
    constructor(props) {
        super(props)
        this.TravelService = new TravelService()
        this.FilesService = new FilesService()
        this.state = {
            travel: {
                place: this.props.place,
                duration: this.props.duration,
                people: this.props.people,
                totalPrice: this.props.totalPrice,
                day: this.props.day
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



    render() {
        const arrayDays = this.props.travel.day
        return (
            <Form>
                <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                    <Tab eventKey="home" title="Home">
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
                    </Tab>

                    {arrayDays && arrayDays.map((day, idx) => {
                        <Tab eventKey="profile" title="Day" key={idx}>
                            <TravelFormDaysEdit key={day._id} {...day} />
                        </Tab>
                    })}
                </Tabs>

            </Form>
        )
    }

}

export default TravelFormEdit