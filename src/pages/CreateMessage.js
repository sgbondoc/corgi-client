import React, { useState } from 'react'
import { useHistory } from 'react-router'
import MessageModel from '../models/message'


const CreateMessage = () => {
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')

    const history = useHistory()

    const handleSubmit = () => {
        MessageModel.create(subject, body).then(data => {
            console.log(data)
            history.push('/messages')
        }).catch(err => {
            console.log(err)
        })
    }
    
    return (
        <div>
            <div className="card create-message-card">
                <h4>Create Message</h4>
                    <div className="message-form-card">
    
                        <input
                            onChange={(event) => setSubject(event.target.value)}
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="subject"
                            value={ subject }
                        />

                        <input
                            onChange={(event) => setBody(event.target.value)}
                            type="text"
                            id="body"
                            name="body"
                            placeholder="message"
                            value={ body }
                        />
                        <button 
                            className="waves-effect waves-light btn"
                            onClick={() => handleSubmit()}
                            >
                            Submit
                        </button>
                    </div>
            </div>  
        </div>
    )
}

export default CreateMessage