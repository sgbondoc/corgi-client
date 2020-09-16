import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path ='/'>
        <Home />
      </Route>
      <Route path ='/register'>
        <Register />
      </Route>
      <Route path ='/login'>
        <Login />
      </Route>
      <Route path ='/profile'>
        <Profile />
      </Route>
      <Route path ='/createpost'>
        <CreatePost />
      </Route>
    </BrowserRouter>
  )
}

export default App
