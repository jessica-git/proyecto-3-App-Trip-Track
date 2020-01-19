import React, { Component } from 'react'
import { Navbar, Nav, Form, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../images/logo app-verde.png'
import "../../styelsheets/UI.css";

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

                <Navbar className="navbar" expand="md">
                    <Navbar.Brand><Link to={`/`} ><Image src={logo} className="logoApp" roundedCircle /></Link></Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="mr-auto navbarLink">
                            <Nav.Link as="li" ><Link to="/profile" ><p className="navbarLink">Perfil</p></Link></Nav.Link>
                            <Nav.Link as="li"><Link to="/myTravels"><p className="navbarLink">Mis viajes</p></Link></Nav.Link>
                            <Nav.Link as="li"><Link to="/travelApps"><p className="navbarLink">Apps para viajar</p></Link></Nav.Link>
                            <Nav.Link as="li"><Link to="/inspired"><p className="navbarLink">Inspírate</p></Link></Nav.Link>
                            <Nav.Link as="li" onClick={this.logoutUser}><p className="navbarLink">Logout</p></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Form inline>
                        <SearchBar />
                    </Form>
                    <Nav className="helloUser">
                        <Navbar.Text >Hola <strong className="navbarText">{saludo}!</strong></Navbar.Text>
                    </Nav>
                </Navbar>

                :

                <Navbar className="navbar" expand="md">
                    <Navbar.Brand><Link to={`/`} ><Image src={logo} style={{ width: "60px" }} roundedCircle /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <Nav.Link as="li"><Link to="/travelApps"><p className="navbarLink">Apps para viajar</p></Link></Nav.Link>
                            <Nav.Link as="li"><Link to="/inspired"><p className="navbarLink">Inspírate</p></Link></Nav.Link>
                            <Nav.Link as="li"><Link to="/signup"><p className="navbarLink">Signup</p></Link></Nav.Link>
                            <Nav.Link as="li"><Link to="/login"><p className="navbarLink">Login</p></Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Form inline>
                        <SearchBar />
                    </Form>
                </Navbar>)
    }

}

export default Navigation