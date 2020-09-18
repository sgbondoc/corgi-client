import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Routes from './config/routes'
import NavBar from './components/NavBar'
import UserModel from './models/user'

import './App.css'

function App (props) {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('jwt'))

  const storeUser = (token) => {
    setCurrentUser({ currentUser: token })
    localStorage.setItem('jwt', token)
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
