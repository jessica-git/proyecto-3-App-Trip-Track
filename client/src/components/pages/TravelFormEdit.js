import React, { Component } from 'react'
import { Form, Tabs, Tab, Button } from "react-bootstrap"
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
        this.props.history.push("/")
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

        return (
            <div className="backgroundBlur"> 
                <Form onSubmit={this.handleSubmit} className="boxEditHeader">
                    <Tabs defaultActiveKey="travel" transition={false} id="noanim-tab-example" >
                        <Tab eventKey="travel" title="Travel" >
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
                        <Button variant="secondary" size="sm" type="submit" >Guardar</Button>
                    </Tab>
                </Tabs>
            </Form >
            </div>   
        )
    }

}


export default TravelFormEdit