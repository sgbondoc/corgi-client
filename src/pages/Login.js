import React, { Component } from 'react'
import UserModel from '../models/user'
import '../App.css'

class Login extends Component {
    state = {
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
        UserModel.login(this.state)
        .then(data => {
            console.log(data)
            if (!data.user) {
                return false
            }
            // set logged in user data in browser local storage
            localStorage.setItem('jwt', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
            this.props.history.push('/profile')
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <div className="login-card">
                <h4>Login</h4>
                <form onSubmit={ this.handleSubmit }> 
                    <div>
                        <div className="login-form-card">
                        
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
                    </div>   
                </form>   
                </div>   
            </div>
        )
    }    
}

export default Login