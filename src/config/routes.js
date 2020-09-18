import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import MyGallery from '../pages/MyGallery'
import CreatePost from '../pages/CreatePost'
import AllPosts from '../pages/AllPosts'
import Chat from '../pages/Chat'
import ChatNow from '../pages/ChatNow'


export default (props) => (
    <Switch>
      <Route exact path ='/' component={ Home } />
      <Route path ='/mygallery' component={ MyGallery } />
      <Route path ='/createpost' component={ CreatePost } />
      <Route path ='/posts' component={ AllPosts } />
      <Route path ='/chat' component={ Chat } />
      <Route path ='/chatnow' component={ ChatNow } />
      <Route path ='/register' component={ Register } />
      <Route path ='/login' render={ (routeComponentProps) => {
          return <Login
                    { ...routeComponentProps }
                    storeUser={ props.storeUser }
                />     
        }}/>
    </Switch>
)