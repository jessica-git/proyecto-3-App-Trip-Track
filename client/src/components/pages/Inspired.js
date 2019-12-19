import React, { Component } from 'react'
import TravelService from "../../service/Travel.service"
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
class Inspired extends Component {
    constructor(props) {
        super(props)
        this.TravelService = new TravelService()
        this.state = {
            travels: []
        }
    }

    getAllTravelsTheUsers() {
        this.TravelService.getAllTravels()
            .then(apiResponse => {
                this.setState({ travels: apiResponse.data })
            })
            .catch(err => console.log("Error all travel inspiration", { err }))
    }

    componentDidMount() {
        this.getAllTravelsTheUsers()
    }

    render() {
        const cards = this.state.travels.map(travel => {
            return (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                        <Card.Title>{travel.place}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            )
        })
        return (
            <>
                {cards}
            </>
        )
    }
}

export default Inspired