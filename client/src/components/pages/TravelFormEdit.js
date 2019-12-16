import React, { Component } from 'react'

import TravelService from "../../service/Travel.service"
class TravelForm extends Component {
    constructor(props) {
        super(props)
        this.TravelService = new TravelService()
        this.state = {
            travel: {
                showModalWindow: false,
                place: "",
                user: this.props.loggedInUser._id,
                duration: "",
                people: 0,
                totalPrice: 0,
                day: []
            }
        }
    }
}