import React, { Component } from 'react'
import { ListGroup, Row, Col, Tab, Container, Image } from 'react-bootstrap'
import imgCreate from "../../images/button-create.png"
import { Link } from 'react-router-dom'
// import WrappedMap from "../map";

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
                <Row>
                    <Col xs={6} md={4}>
                        <Link to={`/new`} ><Image src={imgCreate} style={{ width: "50px" }} roundedCircle />Crear</Link>
                        <p>Aqui va el mapaaaa</p>
                        {/* <div style={{ width: "100%", height: "85vh" }}>
                            <WrappedMap
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBdergxMgHic2LH7s_ou7nmShy6smGNnPY`}
                                loadingElement={<div style={{ height: "100%" }} />}
                                containerElement={<div style={{ height: "100%" }} />}
                                mapElement={<div style={{ height: "100%" }} />}
                            />
                        </div> */}
                    </Col>
                </Row>

                <Container>
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                        <Row>
                            <Col sm={7}>
                                <ListGroup>
                                    {travels.map((travel, idx) => {
                                        return (
                                            <ListGroup.Item key={idx} action href={`travel/${travel.place}/${travel._id}`}>{travel.place}</ListGroup.Item>
                                        )
                                    })}
                                </ListGroup>
                            </Col>
                            <Col sm={8}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="#link1"></Tab.Pane>
                                    {/* <Tab.Pane eventKey="#link2"></Tab.Pane> */}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </>
        )

    }
}


export default MyTravelList
{/* <Tab.Pane eventKey="#link1"><Sonnet /></Tab.Pane>  SONET SE SUSTITUYE POR EL COMPONENTE */ }