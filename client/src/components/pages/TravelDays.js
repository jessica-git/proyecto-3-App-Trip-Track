import React from 'react'
import { Link } from 'react-router-dom'
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
    imgPath,
    imgName,

}) => {
    console.log(lodgings)
    const lodgingsList = lodgings.map(lodging => {

        return (
            <>
                <p>Alojamiento: {lodging.lodgingsDescription}</p>
                <p>Gasto de alojamiento: {lodging.lodgingsPrice} €</p>
            </>
        )
    })
    const placeToVisitList = placeToVisit.map(placeVisit => {
        return (
            <>
                <p>Lugares para visitar: {placeVisit.placeToVisitDescription}</p>
                <p>Gasto de las visitas: {placeVisit.placeToVisitPrice} €</p>
            </>
        )
    })
    const paidExcursionsList = paidExcursions.map(paidExcursion => {
        return (
            <>
                <p>Excursiones contratadas: {paidExcursion.paidExcursionsDescription}</p>
                <p>Gasto de las excursiones: {paidExcursion.paidExcursionsPrice} €</p>
            </>
        )
    })
    const transportList = transport.map(transp => {
        return (
            <>
                <p>Transporte necesario: {transp.transportDescription}</p>
                <p>Gasto del transporte: {transp.transportPrice} €</p>
            </>
        )
    })
    const restaurantsMealsList = restaurantsMeals.map(restaurant => {
        return (
            <>
                <p>Comidas del día: {restaurant.restaurantsMealsDescription}</p>
                <p>Gasto de comida: {restaurant.restaurantsMealsPrice} €</p>
            </>
        )
    })

    console.log(lodgingsList)
    return (
        ((place || day || lodgings || placeToVisit || paidExcursions || transport || restaurantsMeals || tips) != null ?
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
                            <img src={imgPath} alt={imgName}></img>

                        </Col>
                        <Link to={`/edit/day/${_id}`} className="btn btn-sm btn-dark" >Editar</Link>
                    </Row>
                </section>
            </Container>
            : null)
    )
}

export default Day


