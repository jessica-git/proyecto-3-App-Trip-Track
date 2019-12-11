import React from 'react'


const Profile = props => {

    return (

        <div className="container">
            <img src="client/public/images/icon-user.jpg" alt=""></img>
            <h3>Wellcome {props.loggedInUser.username} </h3>
        </div>
        
    )
}


export default Profile