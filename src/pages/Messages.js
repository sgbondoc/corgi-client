import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../App'
import MessageModel from '../models/message'

const Messages = () => {
    const [data, setData] = useState([])
    const {state, dispatch} = useContext(UserContext)

    useEffect(() => {
        MessageModel.all().then(result => {
            setData(result.messages)
            console.log(result.messages)
        })
    }, [])

    const deleteMessage = (messageId) => {
        MessageModel.delete(messageId).then(result => {
            console.log(result)
            const newData = data.filter(item => {
                return item._id !== result._id
            })
            setData(newData)
        })
    }

    const showReply = (text, messageId) => {
        MessageModel.show(text, messageId).then(result => {
            console.log(result)
            const newData = data.map(item => {
                if (item._id === result._id){
                    return result
                } else {
                    return item
                }
            })
            setData(newData)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
        <h2>All Things Corgi</h2>
            <div className="messages">
                { data.map(item => {
                        return(
                            <div className="card message-card" key={ item._id }>
                                <h5 className="message-username">
                                    Message from: { item.user.name }
                                    { item.user._id === state._id
                                    && <i className="material-icons"
                                    style={{ float: "right" }}
                                    onClick={() => deleteMessage(item._id)}>
                                    delete</i>
                                    }
                                    </h5> 
                                <div className="card-content" />
                                    <h5 className="message-card-content">{ item.subject }</h5>
                                    <p className="messages-card-content">{ item.body }</p>
                                    {
                                        item.replies.map(entry => {
                                            return (
                                            <h6 key={ entry._id}><span 
                                                style={{fontWeight: "500"}}>
                                                { entry.user.name }
                                            </span>: { entry.text }
                                            </h6>
                                            )
                                        })
                                    }
                                    <form onSubmit={(event) => {
                                        event.preventDefault()
                                        showReply(event.target[0].value, item._id)
                                        event.target.reset()
                                    }}>
                                    <input className="messages-card-content"
                                        type="text"
                                        placeholder="add a reply"
                                    />
                                    </form>
                            </div>
                        )
                    })
                }
            </div>
        </>        
    )    
}

export default Messages