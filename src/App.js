import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import AllPosts from './pages/AllPosts'
import Chat from './pages/Chat'
import ChatNow from './pages/ChatNow'
import './App.css'


function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path ='/' component={ Home } />
      <Route path ='/register' component={ Register } />
      <Route path ='/login' component={ Login } />
      <Route path ='/profile' component={ Profile } />
      <Route path ='/createpost' component={ CreatePost } />
      <Route path ='/posts' component={ AllPosts } />
      <Route path ='/chat' component={ Chat } />
      <Route path ='/chatnow' component={ ChatNow } />
    </Router>
  )
}

export default App
