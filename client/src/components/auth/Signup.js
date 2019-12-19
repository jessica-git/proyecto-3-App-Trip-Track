import React, { Component } from 'react'
import { Button, Form, Container } from 'react-bootstrap'

import AuthService from '../../service/Auth.service'
import FileService from '../../service/Files.service'

class SignupForm extends Component {

    constructor(props) {
        super(props)
        this.AuthService = new AuthService()
        this.FileService = new FileService()
        this.state = {
            username: '',
            password: '',
            email: '',
            imgPath: '',
            imgName: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username, password, email, imgPath} = this.state
        this.AuthService.signup(username, password, email, imgPath)
            .then(theNewUser => {
                this.props.setUser(theNewUser.data)
                this.setState({ username: '', password: '', email: '', imgPath: '' })
                this.props.history.push('/')
            })
            .catch(err => console.log(err.response.data.message))
    }


    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFileUpload = e => {

        const uploadData = new FormData();
        uploadData.append("imgPath", e.target.files[0]);

        this.FileService.handleUpload(uploadData)
            .then(response => this.setState({ imgPath: response.data.secure_url }))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Container>
                <h1>Singup</h1>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" name="username" placeholder="username" onChange={this.handleInputChange} value={this.state.username} />
                    </Form.Group>

                    <Form.Group controlId="formEmail" >
                        <Form.Label className="title">Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Email" onChange={this.handleInputChange} value={this.state.email} />
                        <Form.Text className="text-muted">Nunca compartiremos tu correo electrónico con nadie más.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleInputChange} value={this.state.password} />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>


                    <Form.Group action="/upload" method="post" enctype="multipart/form-data">
                        <Form.label for="file">Imagen de perfil:</Form.label>
                        <Form.Control name="imgPath" type="file" onChange={this.handleFileUpload} /> 
                    </Form.Group>
                    <Button variant="primary" type="submit"> Submit</Button>
                </Form>

            </Container>
        )
    }
}


export default SignupForm
