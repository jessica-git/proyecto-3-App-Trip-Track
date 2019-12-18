import React from 'react'

import FilesService from "../../service/Files.service"

class TravelFormDaysEdit extends Component {
    constructor(props) {
        super(props)
        this.TravelService = new TravelService()
        this.FilesService = new FilesService()
        this.state = {
            disabledButton: false,
            buttonText: "Edit",
            days: {
                place: this.props.place,
                day: this.props.day,
                lodgings: this.props.lodgings,
                placeToVisit: this.props.placeToVisit,
                paidExcursions: this.props.paidExcursions,
                transport: this.props.transport,
                restaurantsMeals: this.props.restaurantsMeals,
                tips: this.props.tips,
                imageUrl: this.props.imageUrl,
            }
        }

        handleSubmit = () => {
            this.TravelService.updateDay(this.state.day);
        }

        handleInputChange = e => {
            let { name, value } = e.target;
            this.setState({
                day: { ...this.state.day, [name]: value }
            })
        }

        handleFileUpload = e => {
            this.setState({ disabledButton: true, buttonText: "subiendo imágenes" })

            const uploadData = new FormData()
            uploadData.append("imageUrl", e.target.files[0])

            this.FilesService.handleUpload(uploadData)
                .then(response => {
                    this.setState({
                        disabledButton: false,
                        buttonText: "Edit",
                        days: { ...this.state.user, imgPath: response.data.secure_url }
                    });
                })
                .catch(err => console.log(err));
        }


        render() {
            return (
                <>
                    <Form.Group>
                        <Form.Label>Lugar: </Form.Label>
                        <Form.Control type="text" name="totalPrice" onChange={this.handleInputChange} value={this.state.days.place} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Precio total del viaje: </Form.Label>
                        <Form.Control type="text" name="totalPrice" onChange={this.handleInputChange} value={this.state.days.lodgings} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Precio total del viaje: </Form.Label>
                        <Form.Control type="text" name="totalPrice" onChange={this.handleInputChange} value={this.state.days.placeToVisit} />
                    </Form.Group>

                    //....

                    <Form.Group>
                        <Form.Label>Actualiza tus imágenes</Form.Label>
                        <Form.Control name="imgPath" type="file" onChange={this.handleFileUpload} />
                    </Form.Group>


                    <Button variant="dark" size="sm" type="submit"
                        disabled={this.state.disabledButton} onClick={this.handleSubmit}>{this.state.buttonText}
                    </Button>
                </>
            )
        }
    }
}


export default TravelFormDaysEdit





