import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router'
import { UserContext } from '../App'
import UserModel from '../models/user'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()

    const handleSubmit = () => {
        UserModel.login(email, password) .then(data => {
            console.log(data)
            // set logged in user data in browser local storage
            localStorage.setItem('jwt', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
            dispatch({type: "USER", payload: data.user})
            history.push('/')
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <Container className="Login">
            <div className="login-card">
                <h4>Login</h4> 
                    <div className="login-form-card">
                        <Form className="form">
                            <Col>
                                <FormGroup>
                                    <div className="login-form-group">
                                        <Label for="email" hidden>Email</Label>
                                            <Input
                                                onChange={(event) => setEmail(event.target.value)}
                                                type="text"
                                                id="email"
                                                name="email"
                                                placeholder="email"
                                                value={ email }
                                            />
                                    </div>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup> 
                                    <div className="login-form-group">
                                        <Label for="password" hidden>Password</Label>
                                            <Input
                                                onChange={(event) => setPassword(event.target.value)}
                                                type="password"
                                                id="password"
                                                name="password"
                                                placeholder="password"
                                                value={ password }
                                            />
                                    </div>
                                </FormGroup>
                            </Col>
                                <Button 
                                    className="waves-effect waves-light btn"
                                    onClick={() => handleSubmit()}
                                    >
                                    Login
                                </Button>
                        </Form>        
                    </div>         
            </div>
        </Container>
    )
}

export default Login