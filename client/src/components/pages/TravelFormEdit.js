import React, { Component } from 'react'

import TravelService from "../../service/Travel.service"
class TravelForm extends Component {
    constructor(props) {
        super(props)
        this.TravelService = new TravelService()
        this.state = {
            travel: {
                showModalWindow: false,
                place: this.props,
                user: this.props.loggedInUser._id,
                duration: this.props,
                people: this.props,
                totalPrice: this.props,
                day: []
            }
        }
    }

    
}