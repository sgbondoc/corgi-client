import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router'
import { UserContext } from '../App'
import '../App.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()

    const handleSubmit = () => {
        fetch('/login', {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                email,
                password
            })    
        }).then(response => response.json())
        .then(data => {
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
        <div>
            <div className="card login-card">
                <h4>Login</h4> 
                    <div className="login-form-card">
                        
                        <input
                            onChange={(event) => setEmail(event.target.value)}
                            type="text"
                            id="email"
                            name="email"
                            placeholder="email"
                            value={ email }
                        />

                        <input
                            onChange={(event) => setPassword(event.target.value)}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            value={ password }
                        />
                        <button 
                            className="waves-effect waves-light btn"
                            onClick={() => handleSubmit()}
                            >
                            Login
                        </button>
                    </div>         
            </div>
        </div>
    )
}

export default Login