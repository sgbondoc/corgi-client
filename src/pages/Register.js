import React, { Component } from 'react'
import UserModel from '../models/user'
import {
    Container, Col, Form,
    FormGroup, Label,
    Button, Input
} from 'reactstrap'

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        UserModel.create(this.state)
            .then(data => {
                this.setState({
                    name: '',
                    email: '',
                    password: ''
                })
                this.props.history.push('/login')
            })
    }        

    render () {
        return (

                <Container className="register-card">
                    <h4>Register</h4>
                        <Form className="register-form-card">
                            <Col>
                                <FormGroup>
                                    <div className="register-form-group">  
                                        <Label for="name" hidden>Name</Label>
                                        <Input
                                            onChange={ this.handleChange }
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="username"
                                            value={ this.state.name }
                                        />
                                    </div>    
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <div className="register-form-group">       
                                        <Label htmlFor="name" hidden>Email</Label>           
                                        <Input
                                            onChange={ this.handleChange }
                                            type="text"
                                            id="email"
                                            name="email"
                                            placeholder="email"
                                            value={ this.state.email }
                                        />
                                    </div>    
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>   
                                    <div className="register-form-group">
                                        <Label htmlFor="name" hidden>Password</Label>           
                                        <Input
                                            onChange={ this.handleChange }
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder="password"
                                            value={ this.state.password }
                                        />
                                    </div>    
                                </FormGroup>
                            </Col>
                                <Button 
                                    className="waves-effect waves-light btn"
                                    onClick={ this.handleSubmit }
                                    >
                                    Register
                                </Button>   
                        </Form>
                </Container>  
        
        )
    }
}

export default Register