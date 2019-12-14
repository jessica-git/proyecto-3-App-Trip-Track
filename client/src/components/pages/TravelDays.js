import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'


const Day = ({ _id, place, day, lodgings, placeToVisit, paidExcursions, transport, restaurantsMeals, tips, imageUrl }) => {

    return (
        <Container className="coaster-details">
            <section>
                <Row>
                    <Col md={6}>
                        <p>Lugar: {place}</p>
                        <p>Días: {day}</p>

                        <p>Alojamiento: {lodgings[0].description}</p>
                        <p>Gasto de alojamiento: {lodgings[0].price} €</p>

                        <p>Lugares para visitar: {placeToVisit[0].description}</p>
                        <p>Gasto de las visitas: {placeToVisit[0].price} €</p>

                        <p>Excursiones contratadas: {paidExcursions[0].description}</p>
                        <p>Gasto de las excursiones: {paidExcursions[0].price} €</p>

                        <p>Transporte necesario: {transport[0].description}</p>
                        <p>Gasto del transporte: {transport[0].price} €</p>

                        <p>Comidas del día: {restaurantsMeals[0].description}</p>
                        <p>Gasto de comida: {restaurantsMeals[0].price} €</p>

                        <p>Consejos: {tips}</p>
                    </Col>
                    <Col md={{ span: 4, offset: 2 }}>
                        <p>aqui van fotooos{imageUrl}</p>

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
