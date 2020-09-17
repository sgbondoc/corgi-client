import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Routes from './config/routes'
import NavBar from './components/NavBar'
import UserModel from './models/user'

import './App.css'

function App (props) {
  const [currentUser, setCurrentUser] = useState({
    _id: localStorage.getItem('_id'),
    name: localStorage.getItem('name'),
    email: localStorage.getItem('email')
  })

  const storeUser = (user) => {
    setCurrentUser(user)
    localStorage.setItem('_id', user._id)
    localStorage.setItem('name', user.name)
    localStorage.setItem('email', user.email)
  }

  const logout = (event) => {
    event.preventDefault()
    localStorage.clear()
    UserModel.logout()
      .then(response => {
        console.log(response);
        setCurrentUser(null)
        props.history.push('/login')
      })
  }

  return (
    <div className="App">
      <NavBar
        currentUser={ currentUser }
        logout={ logout }
      />
      <Routes
        currentUser={ currentUser }
        storeUser={ storeUser }
      />
    </div>
  )
}

export default withRouter(App)
