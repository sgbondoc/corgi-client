import React, { Component } from 'react'
import UserModel from '../models/user'
import '../App.css'

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
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div>
                <div className="register-card">
                <h4>Register</h4>
                    <form onSubmit={ this.handleSubmit }>
                        <div className="register-form-card">
                            
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
                                type="password"
                                id="password"
                                name="password"
                                placeholder="password"
                                value={ this.state.password }
                            />
                            <button 
                                class="waves-effect waves-light btn"
                                type="submit">
                                Register
                            </button>
                        </div>
                    </form>
                </div>        
            </div>
        )
    }    
}

export default Register