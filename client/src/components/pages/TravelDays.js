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
                <p>Alojamiento: {lodging.lodgingsDescription}</p>
                <p>Gasto de alojamiento: {lodging.lodgingsPrice} €</p>
            </>
        )
    })
    const placeToVisitList = placeToVisit.map(placeToVisit => {
        return (
            <>
                <p>Lugares para visitar: {placeToVisit.placeToVisitDescription}</p>
                <p>Gasto de las visitas: {placeToVisit.placeToVisitPrice} €</p>
            </>
        )
    })
    const paidExcursionsList = paidExcursions.map(paidExcursions => {
        return (
            <>
                <p>Excursiones contratadas: {paidExcursions.paidExcursionsDescription}</p>
                <p>Gasto de las excursiones: {paidExcursions.paidExcursionsPrice} €</p>
            </>
        )
    })
    const transportList = transport.map(transport => {
        return (
            <>
                <p>Transporte necesario: {transport.transportDescription}</p>
                <p>Gasto del transporte: {transport.transportPrice} €</p>
            </>
        )
    })
    const restaurantsMealsList = restaurantsMeals.map(restaurantsMeals => {
        return (
            <>
                <p>Comidas del día: {restaurantsMeals.restaurantsMealsDescription}</p>
                <p>Gasto de comida: {restaurantsMeals.restaurantsMealsPrice} €</p>
            </>
        )
    })

    return (
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
    )
}

export default Day


