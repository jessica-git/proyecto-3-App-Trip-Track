import React from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import "../../styelsheets/Pages.css"

const Index = () => {

    return (

        <Container>
            <section className="header">
                <div>
                    <h1 className="title">TripTrackTravel</h1>
                </div>
                <reactPlayer url="#" />
            </section>

            <section>
                <Row md={4}>
                    <Card className="cardIndex" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Inspírate con los viajes de otros usuarios</Card.Title>
                        </Card.Body>
                        <Card.Img variant="top" src="" />
                    </Card>

                    <Card className="cardIndex" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Crea tu propio viaje y comparte</Card.Title>
                        </Card.Body>
                        <Card.Img variant="top" src="" />
                    </Card>
                    <Card className="cardIndex" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Viaja con la planificacion de otros</Card.Title>
                        </Card.Body>
                        <Card.Img variant="top" src="" />
                    </Card>
                </Row>
            </section>
        </Container>

    )
}

export default Index