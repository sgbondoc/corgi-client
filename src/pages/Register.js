import React, { useState } from 'react'
import { useHistory } from 'react-router'
import '../App.css'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const history = useHistory()

    const handleSubmit = () => {
        fetch('/register', {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                name,
                email,
                password
            })    
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            history.push('/login')
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <div className=" card register-card">
                <h4>Register</h4>
                    <div className="register-form-card">
                        
                        <input
                            onChange={(event) => setName(event.target.value)}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="username"
                            value={ name }
                        />
    
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
                            Register
                        </button>
                    </div>
            </div>  
        </div>
    )
}

export default Register