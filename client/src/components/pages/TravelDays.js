
import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'


const Day = ({ _id, place, day, lodgings, placeToVisit, paidExcursions, transport, restaurantsMeals, tips }) => {

    return (
        <Container className="coaster-details">
            <section>
                <Row>
                    <Col md={6}> {/* debo recorrer el array de day */}
                        <p>{place}</p>
                        <p>{day}</p>
                        {/* {lodgings.map(lod => <p>{lod}</p>)} */}
                        {/* <p>{placeToVisit}</p> */}
                        {/* <p>{paidExcursions}</p> */}
                        {/* <p>{transport}</p> */}
                        {/* <p>{restaurantsMeals}</p> */}
                        <p>{tips}</p>
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

export default Day




{/* <Form.Group>
    <Form.Label>Imagen URL (archivo)</Form.Label>
    <Form.Control name="imageUrl" type="file" onChange={this.handleFileUpload} />
</Form.Group>

import FilesService from '../../service/Files.service' */}
