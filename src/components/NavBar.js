import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../App'


const NavBar = (props) => {
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()
    
    const renderList =  () => {
        // state can now have details of the user (id, name, email)
        if (state) {
            return [
                <li><Link to="/mygallery">My Gallery</Link></li>,
                <li><Link to="/createpost">Create Post</Link></li>,
                <li><Link to="/posts">All Posts</Link></li>,
                <li><Link to="/chat">Chat</Link></li>,
                <li>
                    <Link
                        onClick={() => {
                            localStorage.clear()
                            dispatch({type: "CLEAR"})
                            history.push('/login')
                        }}
                        >
                        Logout
                    </Link>
                </li>
            ]
        } else {
            return [
                <li><Link to="/register">Register</Link></li>,
                <li><Link to="/Login">Login</Link></li>
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