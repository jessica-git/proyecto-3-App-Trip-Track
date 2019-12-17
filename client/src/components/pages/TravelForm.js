import React, { Component } from 'react'
// import { MDBFileInput } from "mdbreact";
// import { DateRange } from 'react-date-range';
import { Form, Button, Modal, Toast } from 'react-bootstrap'

import TravelService from "../../service/Travel.service"
import TravelFormDays from './TravelFormDays'
class TravelForm extends Component {
    constructor(props) {
        super(props)
        this.TravelService = new TravelService()
        this.state = {
            // message: "",
            showToast: false,
            toastText: '',
            travel: {
                showModalWindow: false,
                place: "",
                user: this.props.loggedInUser._id,
                duration: "",
                people: 0,
                totalPrice: 0,
                day: []
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault()
      
        if (!this.state.travel.duration || !this.state.travel.place || !this.state.travel.people) { this.handleToastOpen() }

        this.TravelService.newTravel(this.state.travel)
            .then(apiResponse => this.setState({ travel: { ...this.state.travel } }))
            .catch(err => console.log(err))
    }

    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({
            travel: { ...this.state.travel, [name]: value }
        })
    }


    addDays = (dayID) => {
        let dayCopy = [...this.state.travel.day]
        dayCopy.push(dayID)

        this.setState({
            travel: { ...this.state.travel, day: dayCopy },
            showModalWindow: false
        })
    }

    handleToastClose = () => this.setState({ showToast: false, toastText: '' })
    handleToastOpen = text => this.setState({ showToast: true, toastText: text })

    handleShow = () => this.setState({ showModalWindow: true })
    handleClose = () => this.setState({ showModalWindow: false })

    // handleSelect(range) {
    //     console.log(range);
    //     // An object with two keys,
    //     // 'startDate' and 'endDate' which are Momentjs objects.
    // }

    render() {
        return (

            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Viaje</Form.Label>
                    <Form.Control type="text" name="place" onChange={this.handleInputChange} value={this.state.travel.place} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Días</Form.Label>
                    <Form.Control type="text" name="duration" onChange={this.handleInputChange} value={this.state.travel.duration} />
                    {/* <DateRange onInit={this.handleSelect} onChange={this.handleSelect} /> */}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Personas que han viajado</Form.Label>
                    <Form.Control type="number" name="people" onChange={this.handleInputChange} value={this.state.travel.people} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Precio total del viaje</Form.Label>
                    <Form.Control type="number" name="totalPrice" onChange={this.handleInputChange} value={this.state.travel.totalPrice} />
                </Form.Group>
                <hr />
                <Form.Group>
                    <Button variant="dark" size="sm" onClick={this.handleShow}>Añadir día</Button>
                </Form.Group>

                <Modal show={this.state.showModalWindow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nuevo día</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <TravelFormDays closeModalWindow={this.handleClose} addDays={this.addDays} />
                    </Modal.Body>
                </Modal>

                <Form.Group>
                    <Button variant="dark" size="sm" type="submit">Guardar</Button>
                </Form.Group>
                <Toast
                    onClose={this.handleToastClose}
                    show={this.state.showToast}
                    delay={3000}
                    autohide
                    style={{
                        position: 'fixed',
                        right: '10px',
                        bottom: '10px',
                        minWidth: '250px'
                    }}>
                    <Toast.Header>
                        <strong className="mr-auto">Campos requeridos para crear viaje</strong>
                    </Toast.Header>
                    <Toast.Body>{this.state.toastText}</Toast.Body>
                </Toast>
            </Form>
        )
    }

}

export default TravelForm