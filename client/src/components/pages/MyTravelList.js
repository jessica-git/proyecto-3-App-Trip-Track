import React, { Component } from 'react'
import { ListGroup, Row, Col, Tab, Container, Image } from 'react-bootstrap'
import imgCreate from "../../images/button-create.png"
import { Link } from 'react-router-dom'
import Testmap from '../googleMaps/TestMap'
import "../../styelsheets/Pages.css"
// import WrappedMap from "../googleMaps/GoogleMaps";

import TravelService from "../../service/Travel.service"

class MyTravelList extends Component {
    constructor(props) {
        super(props)
        this.travelAPI = new TravelService()
        this.state = {
            travelList: []
        }
    }

    updateTravelList = () => {
        this.travelAPI.getTravelsByUser(this.props.loggedInUser._id)
            .then(apiResponse => {
                const travelList = apiResponse.data
                this.setState({ travelList })

            })
            .catch(err => console.log("Error update travel list", err))
    }

    componentDidMount = () => this.updateTravelList()


    render() {
        const travels = this.state.travelList
        return (
            <>
                <Container>
                    <Col md={6}>
                        <Link to={`/new`} className="linkCreate"><Image src={imgCreate} style={{ width: "50px" }} roundedCircle />Crear</Link>
                        <Row md={6}>
                            <Testmap loggedInUser={this.props.loggedInUser} />

                            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                                <Row>
                                    <Col >
                                        <ListGroup>
                                            {travels.map((travel, idx) => {
                                                return (
                                                    <ListGroup.Item
                                                        key={idx} action href={`travel/${travel.place}/${travel._id}`}>{travel.place}
                                                    </ListGroup.Item>
                                                )
                                            })}
                                        </ListGroup>
                                    </Col>
                                    <Col md={6}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="#link1"></Tab.Pane>
                                            {/* <Tab.Pane eventKey="#link2"></Tab.Pane> */}
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Row>
                    </Col>
                </Container>
            </>
        )

    }
}


export default MyTravelList
