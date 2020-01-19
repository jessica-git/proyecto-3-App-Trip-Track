import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import "../../styelsheets/Pages.css"


const Profile = props => {

    return (
        <>
            <div className="imgHeader">
                <h2>PERFIL</h2>
            </div>
            
            <div className="backgroundPage">
                <div className="containerProfile" >
                    <img src={props.loggedInUser.imgPath} alt={props.loggedInUser.imgName} className="imgProfile"></img>
                    <h3 className="wellcome">Bienvenida {props.loggedInUser.username} </h3>

                    <Button variant="secondary" size="lg" block><Link to={`/myTravels`} className="buttonProfile" >Tus viajes creados</Link></Button>
                    <Button variant="secondary" size="lg" block><Link to={`/savedInspirations`} className="buttonProfile">Tus inspiraciones guardadas</Link></Button>
                    <Button variant="secondary" size="lg" block><Link to={`/new`} className="buttonProfile">Crear viaje</Link></Button>

                </div>

            </div>
        </>

    )
}


export default Profile