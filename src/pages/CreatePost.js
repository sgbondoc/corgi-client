import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import '../App.css'

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [caption, setCaption] = useState('')
    const [image, setImage] = useState('')
    const [url, setUrl] = useState('')

    const history = useHistory()

    useEffect(() => {
        // useEffect callback will be invoked when url changes
        // condition needed to prevent useEffect when component mounts
        if (url) {
            fetch('/createpost', {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem('jwt')
                },
                body: JSON.stringify({
                    title,
                    caption,
                    url
                })    
            }).then(response => response.json())
            .then(data => {
                console.log(data)
                history.push('/posts')
            }).catch(err => {
                console.log(err)
            })
        }    
    }, [url])

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
    }

    return (       
        <div>
            <div className="card create-post-card">
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
                                <span>File</span>
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