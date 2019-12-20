import React from 'react'
import { Container, Row, Card, Col } from 'react-bootstrap'
import "../../styelsheets/Pages.css"

import img1 from '../../images/viaje1-index.jpeg'
import img2 from '../../images/viaje2-index.jpg'
import img3 from '../../images/viaje3-index.jpg'

const Index = () => {

    return (

        <Container>
            <section className="header">
                <div>
                    <h1 className="title">TripTrackTravel</h1>
                </div>
                <reactPlayer url="#" />
            </section>

            <section >
                <Row className="minFullHeight align-items-center justify-content-around">
                    <Col md={3}>
                        <div className="app-features">
                            <img src={img1} alt="imagen"></img>
                            <p className="app-featuresText">Inspírate con los viajes de otros usuarios</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="app-features">
                            <img src={img2} alt="imagen"></img>
                            <p className="app-featuresText">Crea tu propio viaje y comparte</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="app-features">
                            <img src={img3} alt="imagen"></img>
                            <p className="app-featuresText">Viaja con la planificacion de otros</p>
                        </div>
                    </Col>
                </Row>
            </section>
        </Container>

    )
}

export default Index