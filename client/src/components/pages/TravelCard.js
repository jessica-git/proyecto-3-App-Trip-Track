import React from 'react'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const TravelCard = ({ _id, place, user, day}) => {

    return (
        <Col md={4}>
            <h3>{place}</h3>
            <p>aqui va el mapaaaaaaaaaaa</p>
            <p>{user}</p>
            <div>
                <ul>
                    <li>
                        
                    </li>
                </ul>
                
            </div>
            {/* //><<<<<<<<<<     SI EL USER ESTAR REGISTRADO: MOSTRAR BOTON       */}
            <Link className="btn btn-sm btn-dark" to={`/myTravels/${_id}`}>Ver detalles</Link>
        </Col >
    )

}


export default TravelCard