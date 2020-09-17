import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

const ChatNow = ({ location }) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const ENDPOINT = 'localhost:5000'
    let socket;

    useEffect(() => {
        // get data user enters as "location" (passed from react-router as url parameters)
        const { name, room } = queryString.parse(location.search)
        console.log(name)
        console.log(room)
        // socket = io(ENDPOINT)
        // setName(name)
        // setRoom(room)
        // console.log(socket)
    }, [ENDPOINT, location.search])
    
    return (
        <h4>Chat Now</h4>
    )
}

export default ChatNow