import React, { Component } from 'react'
import { Button, Form, Container } from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'

import Service from '../../service/Auth.service'

class SignupForm extends Component {

    constructor(props) {
        super(props)
        this._service = new Service()
        this.state = { username: '', password: ''}
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state
        this._service.signup(username, password)
            .then(theNewUser => {
                this.props.setUser(theNewUser.data)
                this.setState({ username: '', password: ''})
                this.props.history.push('/')
            })
            .catch(err => console.log(err.response.data.message))
    }


    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }


    render() {
        return (
            <Container>
                <h1>Singup</h1>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" placeholder="username" onChange={this.handleInputChange} value={this.state.username} />
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleInputChange} value={this.state.password} />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>

                
                    {/* <Form.Group action="/home/uploadfiles" method="post" enctype="multipart/form-data">
                        <Form.label for="file">Filename:</Form.label>
                        {/* <InputGroup type="file" name="file" id="file" />
                        <InputGroup type="submit" name="submit" value="Submit" />
                    </Form.Group>  */}

                    <Button variant="primary" type="submit"> Submit</Button>
                </Form>

            </Container>
        )
    }
}


export default SignupForm
