import React from 'react'

const CreatePost = () => {
    return (
        <div className="create-post-card">
            <input 
                type="text"
                name="title"
                placeholder="title"
            />

            <input 
                type="text"
                name="caption"
                placeholder="caption"
            />

            <div className="file-field input-field">
            <div className="btn">
                <span>File</span>
                <input type="file"/>
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text"/>
            </div>
            </div>
        </div>
    )
}

export default CreatePost