import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'


const NavBar = (props) => {
    const {state, dispatch} = useContext(UserContext)
    const renderList =  () => {
        // state now has details of the user (id, name, email)
        if (state) {
            return [
                <li><Link to="/mygallery">My Gallery</Link></li>,
                <li><Link to="/createpost">Create Post</Link></li>,
                <li><Link to="/posts">All Posts</Link></li>,
                <li><Link to="/chat">Chat</Link></li>,
                <li><Link to="/logout">Logout</Link></li>
            ]
        } else {
            return [
                <li><Link to="/register">Register</Link></li>,
                <li><Link to="/login">Login</Link></li>
            ]    
        }
    }

    return (
        <nav>
            <div className="nav-wrapper #eceff1 blue-grey lighten-5">
                <Link to="/" className="brand-logo left">CORGI CONNECT</Link>
                <ul id="nav-mobile" className="right">
                    { renderList() }            
                </ul>
            </div>
        </nav>
    )
}

export default NavBar