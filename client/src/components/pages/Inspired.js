import React, { Component } from 'react'
import TravelService from "../../service/Travel.service"
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
class Inspired extends Component {
    constructor(props) {
        super(props)
        this.TravelService = new TravelService()
        this.state = {
            travel: {
                place: "",
                user: "",
                duration: "",
            }
        }
    }

    componentDidMount() {
        this.getAllTravelsTheUsers()
    }

    getAllTravelsTheUsers() {
        this.TravelService.getAllTravels()
            .then(apiResponse => {
                console.log(apiResponse)
                this.setState({ travel: apiResponse.data })
            })
            .catch(err => console.log("Error all travel inspiration", { err }))
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
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
    }
}

export default Inspired