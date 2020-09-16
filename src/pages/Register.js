import React, { Component } from 'react'
import UserModel from '../models/user'

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: ''
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
                console.log(data)
                this.setState({
                    name: '',
                    email: '',
                    password: ''
                })
                this.props.history.push('/login')
            })
    }
    
    render() {
        return (
            <div>
                <h4>Register</h4>
                <form onSubmit={ this.handleSubmit }>
                    <div className="card">
                        <div className="register-form-group">
                            
                            <input
                                onChange={ this.handleChange }
                                type="text"
                                id="name"
                                name="name"
                                placeholder="username"
                                value={ this.state.name }
                            />
        
                            <input
                                onChange={ this.handleChange }
                                type="text"
                                id="email"
                                name="email"
                                placeholder="email"
                                value={ this.state.email }
                            />

                            <input
                                onChange={ this.handleChange }
                                type="text"
                                id="password"
                                name="password"
                                placeholder="password"
                                value={ this.state.password }
                            />

                            <button type="submit">Register</button>
                        </div>
                    </div>
                </form>    
            </div>
        )
    }    
}

export default Register