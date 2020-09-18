import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../App'

const Messages = () => {
    const [data, setData] = useState([])
    const {state, dispatch} = useContext(UserContext)

    useEffect(() => {
        fetch('/messages', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            }
        }).then(response => response.json())
        .then(result => {
            setData(result.messages)
        })
    }, [])

    const deletePost = (messageId) => {
        fetch(`/deletemessage/${messageId}`, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            }
        }).then(response => response.json())
        .then(result => {
            console.log(result)
            const newData = data.filter(item => {
                return item._id !== result._id
            })
            setData(newData)
        })
    }

    return (
        <div className="messages">
            <h2>All Things Corgi</h2>
            { data.map(item => {
                    return(
                        <div className="card message-card" key={ item._id }>
                            <h5 className="message-username">
                                Message from: { item.user.name }
                                { item.user._id === state._id
                                && <i class="material-icons"
                                style={{ float: "right" }}
                                onClick={() => deletePost(item._id)}>
                                delete</i>
                                }
                                </h5> 
                            <div className="card-content" />
                                <h5 className="message-card-content">{ item.subject }</h5>
                                <p className="messages-card-content">{ item.body }</p>
                                <input className="messages-card-content"
                                    type="text"
                                    placeholder="add a comment"
                                />
                        </div>
                    )
                })
            }
        </div>
    )    
}

export default Messages