import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = (props) => {
    return (
        <nav>
            <div className="nav-wrapper white">
                <Link to="/" className="brand-logo left">Corgi Connect</Link>
                <ul id="nav-mobile" className="right">
                    
                    { props.currentUser ?
                        <>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/createpost">Create Post</Link></li>
                            <li><Link to="/posts">Posts</Link></li>
                            <li><Link to="/chat">Chat</Link></li>
                            <li><Link to="/logout" onClick={ props.logout }>Logout</Link></li>
                        </>    
                    :            
                        <>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    }  
                    
                </ul>
            </div>
        </nav>
    )
}

export default NavBar