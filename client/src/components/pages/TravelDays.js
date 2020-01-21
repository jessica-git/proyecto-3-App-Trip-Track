import React from 'react'
import { Link } from 'react-router-dom'


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
    
    const lodgingsList = lodgings.map(lodging => {

        return (
            <>
                <p><strong>Alojamiento: </strong>{lodging.lodgingsDescription}</p>
                <p><strong>Gasto de alojamiento: </strong>{lodging.lodgingsPrice} €</p>
            </>
        )
    })
    const placeToVisitList = placeToVisit.map(placeVisit => {
        return (
            <>
                <p><strong>Lugares para visitar: </strong>{placeVisit.placeToVisitDescription}</p>
                <p><strong>Gasto de las visitas: </strong>{placeVisit.placeToVisitPrice} €</p>
            </>
        )
    })
    const paidExcursionsList = paidExcursions.map(paidExcursion => {
        return (
            <>
                <p><strong>Excursiones contratadas: </strong>{paidExcursion.paidExcursionsDescription}</p>
                <p><strong>Gasto de las excursiones: </strong>{paidExcursion.paidExcursionsPrice} €</p>
            </>
        )
    })
    const transportList = transport.map(transp => {
        return (
            <>
                <p><strong>Transporte necesario: </strong>{transp.transportDescription}</p>
                <p><strong>Gasto del transporte: </strong>{transp.transportPrice} €</p>
            </>
        )
    })
    const restaurantsMealsList = restaurantsMeals.map(restaurant => {
        return (
            <>
                <p><strong>Comidas del día: </strong>{restaurant.restaurantsMealsDescription}</p>
                <p><strong>Gasto de comida: </strong>{restaurant.restaurantsMealsPrice} €</p>
            </>
        )
    })

    
    return (
        ((place || day || lodgings || placeToVisit || paidExcursions || transport || restaurantsMeals || tips) != null ?
            <section className="remember coaster-details">
                <p><strong>Lugar: </strong>{place}</p>
                <p><strong>Días: </strong>{day}</p>
                {lodgingsList}
                {placeToVisitList}
                {paidExcursionsList}
                {transportList}
                {restaurantsMealsList}
                <p><strong>Consejos: </strong>{tips}</p>
                <img src={imgPath} alt={imgName} className="imgTravelDay"></img>

                <Link to={`/edit/day/${_id}`} className="btn btn-sm btn-secondary marginTop" >Editar</Link>
            </section>
            : null)
    )
}

export default Day


