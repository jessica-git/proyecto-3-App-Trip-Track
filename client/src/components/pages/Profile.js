import React from 'react'
// import { } from 'react-router-dom'

const Profile = props => {

    return (

        <div className="container">
            <img src="client/public/images/icon-user.jpg"></img>
            <h3>Wellcome {props.loggedInUser.username} </h3>
        </div>
        
    )
}


export default Profile