import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Chat = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div className="chat-container">
            <div className="chat-form-container">
                <h4>Corgi Connect Chat</h4>
                    <div>
                    <input
                        className="chat-input"
                        type="text"
                        placeholder=""
                        onChange={(
                            event => 
                            setName(event.target.value))}
                    />
                    </div>

                    <div>
                    <input
                        className="chat-input"
                        type="text"
                        placeholder=""
                        onChange={(
                            event => 
                            setRoom(event.target.value))}
                    />
                    </div>
                    
                    <Link 
                    onclick={ event => (!name || !room) ? event.preventDefault() : null }
                    to={ `/chatnow?name=${name}&room=${room}` }>
                        <button type="submit">Chat Now</button>
                    </Link>
            </div>
        </div>
    )
}

export default Chat