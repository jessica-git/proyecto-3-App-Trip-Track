import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap"


import TravelService from "../../service/Travel.service"
import FilesService from "../../service/Files.service"

class TravelFormDaysEdit extends Component {
    constructor(props) {
        super(props)
        this.TravelService = new TravelService()
        this.FilesService = new FilesService()
        this.state = {
            disabledButton: false,
            buttonText: "Editado",
            day: {
                place: "",
                day: "",
                lodgings: [],
                placeToVisit: [],
                paidExcursions: [],
                transport: [],
                restaurantsMeals: [],
                tips: "",
                imgPath: '',
                imgName: ''
            }
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let {
            place,
            day,
            people,
            lodgings,
            placeToVisit,
            paidExcursions,
            transport,
            restaurantsMeals,
            tips,
            imageUrl } = this.state.day
        let dayId = this.props.match.params.id
        this.TravelService.updateDay(
            place,
            day,
            people,
            lodgings,
            placeToVisit,
            paidExcursions,
            transport,
            restaurantsMeals,
            tips,
            imageUrl,
            dayId)
    }

    handleInputChange = e => {
        let { name, value } = e.target;
        this.setState({
            day: { ...this.state.day, [name]: value }
        })
    }

    handleInputArrayChange = e => {
        let { name, value } = e.target;
        let className = e.target.dataset.class
        let key = e.target.dataset.key
        let dataDay = Object.assign({}, this.state.day);
        dataDay[className][key][name] = value

        this.setState({
            day: dataDay
        })
    }

    handleFileUpload = e => {
        this.setState({ disabledButton: true, buttonText: "subiendo imágenes" })

        const uploadData = new FormData()
        uploadData.append("imgPath", e.target.files[0])

        this.FilesService.handleUpload(uploadData)
            .then(response => {
                this.setState({
                    disabledButton: false,
                    buttonText: "Editado",
                    day: { ...this.state.user, imgPath: response.data.secure_url } ////CORRECTO???
                });
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {

        this.TravelService.getOneTravelDayByID(this.props.match.params.id)
            .then(travelDayReponse => {
                this.setState({ day: travelDayReponse.data })
            })
            .catch(err => console.log("Error travel edit", err))
    }


    render() {

        const lodgingsList = this.state.day.lodgings.map((lodging, index) => {

            return (
                <>
                    <Form.Control type="text" data-class="lodgings" data-key={index} name="description" onChange={this.handleInputArrayChange} defaultValue={lodging.description} />
                    <Form.Control type="text" data-class="lodgings" data-key={index} name="price" onChange={this.handleInputArrayChange} defaultValue={lodging.price} />
                </>
            )
        })

        const placeToVisitList = this.state.day.placeToVisit.map((placeVisit, index) => {
            return (
                <>
                    < Form.Control type="text" data-class="placeToVisit" data-key={index} name="description" onChange={this.handleInputChange} defaultValue={placeVisit.description} />
                    <Form.Control type="text" data-class="placeToVisit" data-key={index} name="price" onChange={this.handleInputChange} defaultValue={placeVisit.price} />
                </>
            )
        })
        const paidExcursionsList = this.state.day.paidExcursions.map((paidExcursion, index) => {
            return (
                <>
                    <Form.Control type="text" data-class="paidExcursions" data-key={index} name="description" onChange={this.handleInputChange} defaultValue={paidExcursion.description} />
                    <Form.Control type="text" data-class="paidExcursions" data-key={index} name="price" onChange={this.handleInputChange} defaultValue={paidExcursion.price} />
                </>
            )
        })
        const transportList = this.state.day.transport.map((transp, index) => {
            return (
                <>
                    <Form.Control type="text" data-class="transport" data-key={index} name="description" onChange={this.handleInputChange} defaultValue={transp.description} />
                    <Form.Control type="text" data-class="transport" data-key={index} name="price" onChange={this.handleInputChange} defaultValue={transp.price} />
                </>
            )
        })
        const restaurantsMealsList = this.state.day.restaurantsMeals.map((restaurant, index) => {
            return (
                <>
                    <Form.Control type="text" data-class="restaurantsMeals" data-key={index} name="description" onChange={this.handleInputChange} defaultValue={restaurant.description} />
                    <Form.Control type="text" data-class="restaurantsMeals" data-key={index} name="price" onChange={this.handleInputChange} defaultValue={restaurant.price} />
                </>
            )
        })

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Lugar: </Form.Label>
                    <Form.Control type="text" name="place" onChange={this.handleInputChange} defaultValue={this.state.day.place} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Día: </Form.Label>
                    <Form.Control type="text" name="day" onChange={this.handleInputChange} defaultValue={this.state.day.day} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Alojamiento: </Form.Label>
                    {lodgingsList}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Lugares para visitar: </Form.Label>
                    {placeToVisitList}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Excursiones pagadas: </Form.Label>
                    {paidExcursionsList}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Transporte: </Form.Label>
                    {transportList}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Restaurantes y comida: </Form.Label>
                    {restaurantsMealsList}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Consejos: </Form.Label>
                    <Form.Control type="text" name="tips" onChange={this.handleInputChange} defaultValue={this.state.day.tips} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Actualiza tus imágenes</Form.Label>
                    <Form.Control name="imageUrl" type="file" onChange={this.handleFileUpload} />
                </Form.Group>
                <Button variant="dark" size="sm" type="submit"
                    disabled={this.state.disabledButton} onClick={this.handleSubmit}>{this.state.buttonText}
                </Button>

            </Form>
        )
    }

}


export default TravelFormDaysEdit





