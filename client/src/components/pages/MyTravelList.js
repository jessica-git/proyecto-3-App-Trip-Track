import React, { Component } from 'react'
import { ListGroup, Row, Col, Tab, Image } from 'react-bootstrap'
import imgCreate from "../../images/button-create.png"
import { Link } from 'react-router-dom'
import Testmap from '../googleMaps/TestMap'

import TravelService from "../../service/Travel.service"

import "../../styelsheets/Pages.css"
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
                <div className="imgHeader">
                    <h2>TUS VIAJES</h2>
                </div>
                <div>
                    <div className="linkCreate">
                        <Link to={`/new`} className="linkCreate-Link"><Image src={imgCreate} style={{ width: "50px" }} roundedCircle />Crear</Link>

                    </div>

                    <div className="backgroundPage">
                        <Row md={6} className="justify-content-center">
                            <div className="styleMap border">
                                <Testmap loggedInUser={this.props.loggedInUser} />
                            </div>
                            <div>
                                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1" >
                                    <div className="row">
                                        <Col >
                                            <ListGroup >
                                                {travels.map((travel, idx) => {
                                                    return (
                                                        <ListGroup.Item
                                                            key={idx} action href={`travel/${travel.place}/${travel._id}`}>{travel.place}
                                                        </ListGroup.Item>
                                                    )
                                                })}
                                            </ListGroup>
                                        </Col>
                                        <Col>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="#link1"></Tab.Pane>
                                                {/* <Tab.Pane eventKey="#link2"></Tab.Pane> */}
                                            </Tab.Content>
                                        </Col>
                                    </div>
                                </Tab.Container>
                            </div>
                        </Row>
                    </div>
                </div>

            </>
        )

    }
}


export default MyTravelList
