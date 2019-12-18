import React from 'react'
import { Container, Col, Card } from 'react-bootstrap'
import SearchBar from "../ui/SearchBar"

const Index = () => {

    return (
        <Container>
            <section className="header">
                <div>
                    <h1>TripTrackTravel</h1>
                    <p>Lhzsdjhsgfjhgsjhdfvshvdhjdgfjgdfjgdhfgshdg</p>
                </div>
                <reactPlayer url="#" />
            </section>
            <section className="indexBox">

                <Col md={3}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Inspirate con los viajes de otros usuarios</Card.Title>
                        </Card.Body>
                        <Card.Img variant="top" src="" />
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>crea tu propio viaje y comparte</Card.Title>
                        </Card.Body>
                        <Card.Img variant="top" src="" />
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>viaja con la planificacion de otros y puntúa</Card.Title>
                        </Card.Body>
                        <Card.Img variant="top" src="" />
                    </Card>
                </Col>
            </section>
            <section>
                <SearchBar />
            </section>
        </Container>
    )
}

export default Index