import React, { Component } from 'react'
import { Button, Form, Col } from 'react-bootstrap'

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
                lodgings: { lodgingsDescription: "", lodgingsPrice: 0 },
                placeToVisit: { placeToVisitDescription: "", placeToVisitPrice: 0 },
                paidExcursions: { paidExcursionsDescription: "", paidExcursionsPrice: 0 },
                transport: { transportDescription: "", transportPrice: 0 },
                restaurantsMeals: { restaurantsMealsDescription: "", restaurantsMealsPrice: 0 },
                tips: "",
                imgPath: '',
                imgName: ''
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.TravelService.newDay(this.state.days)
            .then(apiResponse => {

                this.props.addDays(apiResponse.data)
                this.setState({ days: { ...this.state.days } })
            })
            .catch(err => console.log(err))

    }



    handleFileUpload = e => {

        const uploadData = new FormData();
        uploadData.append("imgPath", e.target.files[0]);

        this.FilesService.handleUpload(uploadData)
            .then(response => this.setState({ days: { ...this.state.days, imgPath: response.data.secure_url } }))
            .catch(err => console.log(err))
    }

    handleInputChange = e => {
        let { name, value } = e.target

        let index = e.target.className.indexOf(" ")
        let classInput = e.target.className.slice(0, index)

        if (classInput === "lodgings" || classInput === "placeToVisit" || classInput === "paidExcursions" || classInput === "transport" || classInput === "restaurantsMeals") {
            this.setState({
                days: { ...this.state.days, [classInput]: { ...this.state.days[classInput], [name]: value } }
            })
        } else {
            this.setState({
                days: { ...this.state.days, [name]: value }
            })
        }
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
                        <Form.Control type="text" name="day" placeholder="€" onChange={this.handleInputChange} value={day.day} />
                    </Form.Group>
                </Form.Row>

                <Form.Group>
                    <Form.Label>Alojamiento</Form.Label>
                    <Form.Control className="lodgings" type="text" name="lodgingsDescription" size="lg" onChange={this.handleInputChange} value={day.lodgings.lodgingsDescription} />
                    <Form.Text className="text-muted">Precio</Form.Text>
                    <Form.Control className="lodgings" size="sm" type="text" placeholder="€" name="lodgingsPrice" onChange={this.handleInputChange} value={day.lodgings.lodgingsPrice} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Lugares para visitar</Form.Label>
                    <Form.Control className="placeToVisit" type="text" name="placeToVisitDescription" size="lg" onChange={this.handleInputChange} value={day.placeToVisit.description} />
                    <Form.Text className="text-muted">Precio</Form.Text>
                    <Form.Control className="placeToVisit" size="sm" type="text" placeholder="€" name="placeToVisitPrice" onChange={this.handleInputChange} value={day.placeToVisit.price} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Excursiones pagadas</Form.Label>
                    <Form.Control className="paidExcursions" type="text" name="paidExcursionsDescription" size="lg" onChange={this.handleInputChange} value={day.paidExcursions.description} />
                    <Form.Text className="text-muted">Precio</Form.Text>
                    <Form.Control className="paidExcursions" size="sm" type="text" placeholder="€" name="paidExcursionsPrice" onChange={this.handleInputChange} value={day.paidExcursions.price} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Transporte</Form.Label>
                    <Form.Control className="transport" type="text" name="transportDescription" size="lg" onChange={this.handleInputChange} value={day.transport.description} />
                    <Form.Text className="text-muted">Precio</Form.Text>
                    <Form.Control className="transport" size="sm" type="text" placeholder="€" name="transportPrice" onChange={this.handleInputChange} value={day.transport.price} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Comidas y restaurantes</Form.Label>
                    <Form.Control className="restaurantsMeals" type="text" name="restaurantsMealsDescription" size="lg" onChange={this.handleInputChange} value={day.restaurantsMeals.description} />
                    <Form.Text className="text-muted">Precio</Form.Text>
                    <Form.Control className="restaurantsMeals" size="sm" type="text" placeholder="€" name="restaurantsMealsPrice" onChange={this.handleInputChange} value={day.restaurantsMeals.price} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Consejos</Form.Label>
                    <Form.Control type="text" name="tips" size="lg" onChange={this.handleInputChange} value={day.tips} />
                </Form.Group>

                <Form.Group>
                    <Form.Label >Comparte tus mejores fotos:</Form.Label>
                    <Form.Control name="imgPath" type="file" onChange={(e) => this.handleFileUpload(e)}></Form.Control>
                </Form.Group>

                <Button variant="secondary" size="sm" type="submit" onClick={this.handleSubmit} redirect={"/"}>Añadir</Button>
            </Form>
        )
    }
}

export default TravelFormDays

