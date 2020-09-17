import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Chat = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div className="card chat-container">
            <div className="chat-form-container">
                <h4>Corgi Connect Chat</h4>
                    <div>
                    <input
                        className="chat-input"
                        type="text"
                        placeholder="enter preferred username"
                        onChange={(
                            event => 
                            setName(event.target.value))}
                    />
                    </div>

                    <div>
                    <input
                        className="chat-input"
                        type="text"
                        placeholder="enter corgi to chat globally"
                        onChange={(
                            event => 
                            setRoom(event.target.value))}
                    />
                    </div>
                    
                    <Link 
                        onClick={ event => (!name || !room) ? event.preventDefault() : null }
                        to={`/chatnow?name=${name}&room=${room}`}>
                        <button
                            className="waves-effect waves-light btn"
                            type="submit">
                            Chat Now
                        </button>
                    </Link>
            </div>
        </div>
    )
}

export default Chat