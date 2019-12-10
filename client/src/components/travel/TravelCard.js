import React from 'react'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'

const TravelCard = ({ _id, title, day}) => {

    return (
        // maps
        <Col className="travelCard" md={4}>
            <h3>{title}</h3>
            <div>
                
            </div>
            
            
            <Link className="btn btn-sm btn-dark" to={`/myTravels/${_id}`}>Ver detalles</Link>
        </Col >
    )
}


export default TravelCard