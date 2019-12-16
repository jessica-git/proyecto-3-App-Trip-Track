import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
// import { MDBFileInput } from 'mdbreact'

import TravelService from "../../service/Travel.service"
import FilesService from '../../service/Files.service'

class TravelFormDays extends Component {
    constructor(props) {
        super(props)
        this.TravelService = new TravelService()
        this.FilesService = new FilesService()
        this.state = {
            days: {
                place: "",
                day: 0,
                lodgings: { description: "", price: 0 },
                placeToVisit: { description: "", price: 0 },
                paidExcursions: { description: "", price: 0 },
                transport: { description: "", price: 0 },
                restaurantsMeals: { description: "", price: 0 },
                tips: "",
                imageUrl: "",
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault()

        this.TravelService.newTravel(this.state.days)
            .then(apiResponse => {
                this.props.addDays("elid")
                this.setState({ days: { ...this.state.days } })
            })
            .catch(err => console.log(err))



    }

    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({
            days: { ...this.state.days, [name]: value }
        })
    }

    handleFileUpload = e => {
        const uploadData = new FormData()
        uploadData.append("imageUrl", e.target.files[0])

        this.FilesService.handleUpload(uploadData)
            .then(response => this.setState({ travel: { ...this.state.travel, imageUrl: response.data.secure_url } }))
            .catch(err => console.log(err))
    }


    render() {
        const day = this.state.days
        return (

            <Form onSubmit={this.props.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPlace">
                        <Form.Label>Lugar</Form.Label>
                        <Form.Control type="text" name="place" onChange={this.handleInputChange} value={day.place} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDay">
                        <Form.Label>Días</Form.Label>
                        <Form.Control type="text" name="day" onChange={this.handleInputChange} value={day.day} />
                    </Form.Group>
                </Form.Row>

                <Form.Group>
                    <Form.Label>Alojamiento</Form.Label>
                    <Form.Control type="text" name="lodgings" size="lg" onChange={this.handleInputChange} value={day.lodgings.description} />
                    <Form.Text className="text-muted">Precio</Form.Text>
                    <Form.Control size="sm" type="text" placeholder="Small text" name="lodgings" onChange={this.handleInputChange} value={day.lodgings.price} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Lugares para visitar</Form.Label>
                    <Form.Control type="text" name="placeToVisit" size="lg" onChange={this.handleInputChange} value={day.placeToVisit.description} />
                    <Form.Text className="text-muted">Precio</Form.Text>
                    <Form.Control size="sm" type="text" placeholder="Small text" name="placeToVisit"  onChange={this.handleInputChange} value={day.placeToVisit.price} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Excursiones pagadas</Form.Label>
                    <Form.Control type="text" name="paidExcursions" size="lg" onChange={this.handleInputChange} value={day.paidExcursions.description} />
                    <Form.Text className="text-muted">Precio</Form.Text>
                    <Form.Control size="sm" type="text" placeholder="Small text" name="paidExcursions" onChange={this.handleInputChange} value={day.paidExcursions.price} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Transporte</Form.Label>
                    <Form.Control type="text" name="transport" size="lg" onChange={this.handleInputChange} value={day.transport.description} />
                    <Form.Text className="text-muted">Precio</Form.Text>
                    <Form.Control size="sm" type="text" placeholder="Small text" name="transport" onChange={this.handleInputChange} value={day.transport.price} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Comidas y restaurantes</Form.Label>
                    <Form.Control type="text" name="restaurantsMeals" size="lg" onChange={this.handleInputChange} value={day.restaurantsMeals.description} />
                    <Form.Text className="text-muted">Precio</Form.Text>
                    <Form.Control size="sm" type="text" placeholder="Small text" name="restaurantsMeals" onChange={this.handleInputChange} value={day.restaurantsMeals.price} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Consejos</Form.Label>
                    <Form.Control type="text" name="tips" size="lg" onChange={this.handleInputChange} value={day.tips} />
                </Form.Group>

                < Form.Label > Sube tus mejores fotos</Form.Label >
                {/* <MDBFileInput multiple btnColor="info" /> */}
                < Form.Control name="imageUrl" type="file" onChange={this.handleFileUpload} />
                <Button variant="dark" size="sm" type="submit" onClick={this.props.addDays} >Añadir</Button>
            </Form>

        )
    }
}

export default TravelFormDays

{/* <Form.Group>
    <Form.Label>Imagen URL (archivo)</Form.Label>
    <Form.Control name="imageUrl" type="file" onChange={this.handleFileUpload} />
</Form.Group>

import FilesService from '../../service/Files.service' */}