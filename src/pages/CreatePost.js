import React, { useState } from 'react'
import { useHistory } from 'react-router'
import '../App.css'

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [caption, setCaption] = useState('')
    const [image, setImage] = useState('')
    const [url, setUrl] = useState('')

    const history = useHistory()

    const handleSubmit = () => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'corgi-connect')
        data.append('cloud_name', 'sbgarcia')
        fetch('https://api.cloudinary.com/v1_1/sbgarcia/image/upload', {
            method: "POST",
            body: data
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setUrl(data.url)
        })
        .catch(err => {
            console.log(err)
        })
        fetch('/createpost', {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                title,
                caption,
                url
            })    
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            history.push('/')
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <div className="create-post-card">
                <h4>Create Post</h4>
                    <div>
                        <input 
                            type="text"
                            name="title"
                            placeholder="title"
                            value={ title }
                            onChange={(event) => setTitle(event.target.value)}
                        />

                        <input 
                            type="text"
                            name="caption"
                            placeholder="caption"
                            value={ caption }
                            onChange={(event) => setCaption(event.target.value)}
                        />

                        <div className="file-field input-field">
                        <div className="btn">
                            <span>Add Image</span>
                            <input type="file" onChange={(event) => setImage(event.target.files[0])}/>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text"/>
                        </div>
                        </div>

                        <button 
                            className="waves-effect waves-light btn"
                            type="submit"
                            onClick={() => handleSubmit()}
                            >
                            Submit
                        </button>
                    </div>    
            </div>
        </div>    
    )
}

export default CreatePost