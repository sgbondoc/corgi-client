import React from 'react'

const Login = () => {
    return (
        <div>
            <h4>Login</h4>
                
                <div>
                    <div className="login-form-group">
                      
                        <input
                            
                            type="text"
                            id="email"
                            name="email"
                            placeholder="email"
                          
                        />
                   
                       
                        <input
                           
                            type="text"
                            id="password"
                            name="password"
                            placeholder="password"
                           
                        />
                    
                        <button type="submit">Login</button>
                    </div>
                </div>
        </div>
    )
}

export default Login