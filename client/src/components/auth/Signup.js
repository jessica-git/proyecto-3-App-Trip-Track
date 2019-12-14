import React, { Component } from 'react'
import { Button, Form, Container, InputGroup } from 'react-bootstrap'
// import FormControl from 'react-bootstrap/FormControl'

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
            imageUrl: '',
            travelsInspirationList: []
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username, password, email, imageUrl, travelsInspirationList } = this.state
        this.AuthService.signup(username, password, email, imageUrl, travelsInspirationList)
            .then(theNewUser => {
                this.props.setUser(theNewUser.data)
                this.setState({ username: '', password: '', email: '', imageUrl: '', travelsInspirationList: [] })
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
        uploadData.append("imageUrl", e.target.files[0]);

        this.service.handleUpload(uploadData)
            .then(response => this.setState({ imageUrl: response.data.secure_url }))
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
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formEmail" >
                        <Form.Label className="title">Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Email" id="input-email" onChange={this.handleChangeInput} placeholder="hola@thinkapp.com" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleInputChange} value={this.state.password} />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>


                    <Form.Group action="/home/uploadfiles" method="post" enctype="multipart/form-data">
                        <Form.label for="file">Imagen de perfil:</Form.label>
                        <InputGroup type="file" name="file" id="file" onChange={this.handleFileUpload} />
                        <InputGroup type="submit" name="submit" value="Submit" />
                    </Form.Group>

                    <Button variant="primary" type="submit"> Submit</Button>
                </Form>

            </Container>
        )
    }
}


export default SignupForm
