import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


const Profile = props => {

    return (

        <div className="container">
            <img src="client/public/images/icon-user.jpg" alt="image profile"></img>
            <h3>Wellcome {props.loggedInUser.username} </h3>
            {/* <p><link hrf="/profile/edit/id">Edita tu perfil</link></p> */}

            <Button variant="secondary" size="lg" block><Link to={`/myTravels`} >Tus viajes creados</Link></Button>
            <Button variant="secondary" size="lg" block><Link to={`/savedInspirations`} >Tus inspiraciones guardadas</Link></Button>
            <Button variant="secondary" size="lg" block><Link to={`/new`} >Crear viaje</Link></Button>

        </div>
        
    )
}


export default Profile