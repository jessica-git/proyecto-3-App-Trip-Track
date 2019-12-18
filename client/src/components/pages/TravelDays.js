import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

const Day = ({
    _id,
    place,
    day,
    lodgings,
    placeToVisit,
    paidExcursions,
    transport,
    restaurantsMeals,
    tips,
    imageUrl

}) => {

    const lodgingsList = lodgings.map(lodging => {
        console.log(lodging)
        return (
            <>
                <p>Alojamiento: {lodging.description}</p>
                <p>Gasto de alojamiento: {lodging.price} €</p>
            </>
        )
    })
    const placeToVisitList = placeToVisit.map(placeVisit => {
        return (
            <>
                <p>Lugares para visitar: {placeVisit.description}</p>
                <p>Gasto de las visitas: {placeVisit.price} €</p>
            </>
        )
    })
    const paidExcursionsList = paidExcursions.map(paidExcursion => {
        return (
            <>
                <p>Excursiones contratadas: {paidExcursion.description}</p>
                <p>Gasto de las excursiones: {paidExcursion.price} €</p>
            </>
        )
    })
    const transportList = transport.map(transp => {
        return (
            <>
                <p>Transporte necesario: {transp.description}</p>
                <p>Gasto del transporte: {transp.price} €</p>
            </>
        )
    })
    const restaurantsMealsList = restaurantsMeals.map(restaurant => {
        return (
            <>
                <p>Comidas del día: {restaurant.description}</p>
                <p>Gasto de comida: {restaurant.price} €</p>
            </>
        )
    })


    return (
       ( (place || day || lodgings || placeToVisit || paidExcursions || transport || restaurantsMeals || tips) != null ? 
        <Container className="coaster-details">
            <section>
                <Row>
                    <Col md={6}>
                        <p>Lugar: {place}</p>
                        <p>Días: {day}</p>
                        {lodgingsList}
                        {placeToVisitList}
                        {paidExcursionsList}
                        {transportList}
                        {restaurantsMealsList}
                        <p>Consejos: {tips}</p>
                    </Col>
                    <Col md={{ span: 4, offset: 2 }}>
                        <p>aqui van fotooos{imageUrl}</p>

                    </Col>
                </Row>
            </section>
        </Container>
        : null)
        )
}

export default Day


