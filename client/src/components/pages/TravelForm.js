import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
// import { MDBFileInput } from "mdbreact";
// import { DateRange } from 'react-date-range';

import TravelService from "../../service/Travel.service"
import FilesService from "../../service/Files.service"

class TravelForm extends Component {
    constructor(props) {
        super(props)
        this.TravelService = new TravelService()
        this.FilesService = new FilesService()
        this.state = {
            travel: {
                place: "",
                user: "",
                days: "",
                people: 0,
                totalPrice: 0,
                day: [
                    // {
                    // place: "",
                    // day: "",
                    // lodgings: [{ description: "", price: 0 }],
                    // placeToVisit: [{ description: "", price: 0 }],
                    // paidExcursions: [{ description: "", price: 0 }],
                    // transport: [{ description: "", price: 0 }],
                    // restaurantsMeals: [{ description: "", price: 0 }],
                    // tips: "String",
                    // imageUrl: "String",
                    // }
                ]
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault()
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


    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("imageUrl", e.target.files[0])

        this.FilesService.handleUpload(uploadData)
            .then(response => this.setState({ travel: { ...this.state.travel, imageUrl: response.data.secure_url } }))
            .catch(err => console.log(err))
    }

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
                    <Form.Control type="text" name="title" onChange={this.handleInputChange} value={this.state.travel.place} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Días</Form.Label>
                    <Form.Control type="text" name="description" onChange={this.handleInputChange} value={this.state.travel.days} />
                    {/* <DateRange onInit={this.handleSelect} onChange={this.handleSelect} /> */}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Personas que han viajado</Form.Label>
                    <Form.Control type="text" name="title" onChange={this.handleInputChange} value={this.state.travel.people} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Precio total del viaje</Form.Label>
                    <Form.Control type="text" name="description" onChange={this.handleInputChange} value={this.state.travel.totalPrice} />
                </Form.Group>
                <hr />
                <Form.Group>
                    <Button variant="dark" size="sm" type="submit">Añadir día</Button>
                </Form.Group>

                <Form.Group>
                    <Button variant="dark" size="sm" type="submit">Guardar</Button>
                </Form.Group>

            </Form>
        )
    }

}

export default TravelForm