import React, { Component } from 'react'
import { Navbar, Nav, Form, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../images/logo jess.png'

import AuthService from '../../service/Auth.service'
import SearchBar from "./SearchBar"

class Navigation extends Component {
    constructor(props) {
        super(props)
        this._service = new AuthService()
    }

    logoutUser = () => {
        this._service.logout()
            .then(x => this.props.setUser(false))
            .catch(err => console.log(err))
    }

    render() {

        const saludo = this.props.loggedInUser ? this.props.loggedInUser.username : 'invitado'

        return (
            this.props.loggedInUser ?

                <Navbar bg="dark" variant="dark" expand="md">

                    <Navbar.Brand><Link to={`/`} ><Image src={logo} style={{ width: "60px" }} roundedCircle /></Link></Navbar.Brand>
                    <Form inline>
                        <SearchBar />
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
                        <SearchBar />
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