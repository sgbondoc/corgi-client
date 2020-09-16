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
                <span>Add Image</span>
                <input type="file"/>
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text"/>
            </div>
            </div>
            <button 
                class="waves-effect waves-light btn"
                type="submit">
                Submit
            </button>
        </div>
    )
}

export default CreatePost