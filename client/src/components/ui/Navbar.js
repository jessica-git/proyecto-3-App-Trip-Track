import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Service from '../../service/Auth.service'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this._service = new Service()
    }

    render() {

        const saludo = this.props.loggedInUser ? this.props.loggedInUser.username : 'invitado'

        return (
            this.props.loggedInUser ?

                <Navbar bg="dark" variant="dark" expand="md">
                    <Navbar.Brand>LOGOO</Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="mr-auto ">
                            <Nav.Link as="li"><Link to="/profile">Perfil</Link></Nav.Link>
                            <Nav.Link as="li"><Link to="/myTravels">Mis viajes</Link></Nav.Link>
                            <Nav.Link as="li"><Link to="/travelApps">Apps para viajar</Link></Nav.Link>
                            <Nav.Link as="li"><Link to="/inspired">Inspírate</Link></Nav.Link>
                            <Nav.Link as="li" onClick={this.logoutUser}>Logout</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Navbar.Text>Bienvenid@ {saludo}</Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                :

                <Navbar bg="dark" variant="dark" expand="md">
                    <Navbar.Brand>LOGOO</Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <Nav.Link as="li"><Link to="/travelApps">Apps para viajar</Link></Nav.Link>
                            <Nav.Link as="li"><Link to="/inspired">Inspírate</Link></Nav.Link>
                            <Nav.Link as="li"><Link to="/signup">Signup</Link></Nav.Link>
                            <Nav.Link as="li"><Link to="/login">Login</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>)
    }

}

export default Navigation