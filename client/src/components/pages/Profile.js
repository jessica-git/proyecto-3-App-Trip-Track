import React from 'react'
import Button from 'react-bootstrap/Button'


const Profile = props => {

    return (

        <div className="container">
            <img src="client/public/images/icon-user.jpg" alt="image profile"></img>
            <h3>Wellcome {props.loggedInUser.username} </h3>
        
            <Button variant="secondary" size="lg" block>Tus viajes creados</Button>
            <Button variant="secondary" size="lg" block>Tus inspiraciones guardadas</Button>
            <Button variant="secondary" size="lg" block>Crear viaje</Button>
        </div>
        
    )
}


export default Profile