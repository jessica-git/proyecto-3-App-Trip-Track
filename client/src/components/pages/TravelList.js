import React, { Component } from 'react'
import { ListGroup, Row, Col, Tab, Container, Image} from 'react-bootstrap'
import imgCreate from "../../images/button-create.png"

import TravelService from "../../service/Travel.service"

class TravelList extends Component {
    constructor(props) {
        super(props)
        this.travelAPI = new TravelService()
        this.state = { travel: [] }
    }

    updateTravelList = () => {
        this.travelAPI.getAllTravels()
            .then(apiResponse => {
                const travelList = apiResponse.data
                this.setState({ travelList })
            })
            .catch(err => console.log("Error update travel list", err))
    }

    componentDidMount = () => this.updateTravelList()

    render() {
        return (
            <>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                            <Image src={imgCreate} style={{width: "50px"}} roundedCircle />
                            <p>Aqui va el mapaaaa</p>
                    </Col>
                </Row>
            </Container>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item action href="#link1">Granada</ListGroup.Item>
                            <ListGroup.Item action href="#link2">viaje 2</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1"></Tab.Pane>
                            <Tab.Pane eventKey="#link2"></Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            </>
        )
    }
}


{/* <Tab.Pane eventKey="#link1"><Sonnet /></Tab.Pane>  SONET SE SUSTITUYE POR EL COMPONENTE */}

export default TravelList