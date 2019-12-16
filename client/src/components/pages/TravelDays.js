import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

const Day = (
    { _id,
        place,
        day,
        lodgings,
        placeToVisit,
        paidExcursions,
        transport,
        restaurantsMeals,
        tips,
        imageUrl }

) => {
    const lodgingsList = lodgings.map(lodging => {
        return (
            <>
            <p>Alojamiento: {lodging.description}</p>
            <p>Gasto de alojamiento: {lodging.price} €</p>
            </>
        ) 
    })
    const placeToVisitList = placeToVisit.map(placeToVisit => {
        return (
        <>
            <p>Lugares para visitar: {placeToVisit.description}</p>
            <p>Gasto de las visitas: {placeToVisit.price} €</p>
        </>
        )
    })
    const paidExcursionsList = paidExcursions.map(paidExcursions => {
        return (
            <>
                <p>Excursiones contratadas: {paidExcursions.description}</p>
                <p>Gasto de las excursiones: {paidExcursions.price} €</p>
            </>
        )
    })
    const transportList = transport.map(transport => {
        return (
            <>
                <p>Transporte necesario: {transport.description}</p>
                <p>Gasto del transporte: {transport.price} €</p>
            </>
        )
    })
    const restaurantsMealsList = restaurantsMeals.map(restaurantsMeals => {
        return (
            <>
                <p>Comidas del día: {restaurantsMeals.description}</p>
                <p>Gasto de comida: {restaurantsMeals.price} €</p>
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


