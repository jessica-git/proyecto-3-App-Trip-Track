import React, { Component } from 'react'


class TravelDays extends Component {

    constructor(props) {
        super(props)
        this.state = {
            TravelDays: {
                place: "",
                day: "",
                lodgings: {},
                placeToVisit: {},
                paidExcursions: {},
                transport: {},
                restaurantsMeals: {},
                tips: "",
                // cords: {}
            }
        }
        this.service = new Service()
    }

    getAllTravels = () => {

        return this.service.getAllTravels()
            .then(travel => this.setState({ ...this.state, travel: travel }))
    }

    componentDidMount = () => {
        const travelId = this.props.match.params.id
        console.log(travelId, "id")

        this.service.getOneTravel(travelId)
            .then(theTravel => this.setState({ TravelDays: theTravel.data }))
            .catch(err => console.log(err))

    }


    render() {
        return (
            <Container className="coaster-details">
                <section>
                    <Row>
                        <Col md={6}> {/* debo recorrer el array de day */}
                            <div>
                                <p>aqui va fotooooo</p>
                                <h1>Detalles de {this.state.travelDetails.place}</h1>
                                <p>{this.state.days}</p>
                                <p>{this.state.people}</p>
                                <p>{this.state.totalPrice}</p>
                            </div>

                            <div>
                                <p>{this.state.place}</p>
                                <p>{this.state.day}</p>
                                <p>{this.state.lodgings}</p>
                                <p>{this.state.placeToVisit}</p>
                                <p>{this.state.paidExcursions}</p>
                                <p>{this.state.transport}</p>
                                <p>{this.state.restaurantsMeals}</p>
                                <p>{this.state.tips}</p>
                            </div>
                        </Col>
                        <Col md={{ span: 4, offset: 2 }}>
                            <p>aqui va mapaaaa</p>
                            <Link to="/travel" className="btn btn-dark">Volver</Link>
                        </Col>
                    </Row>
                </section>
            </Container>
        )
    }


}
export default TravelDays