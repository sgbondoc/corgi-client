import React, { useState } from 'react'

const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')

    return (
        <div>
            <div className="create-post-card">
                <h4>Create Post</h4>
                <form>
                    <div>
                        <input 
                            type="text"
                            name="title"
                            placeholder="title"
                            onChange={(e)=>setTitle(e.target.value)}
                        />

                        <input 
                            type="text"
                            name="caption"
                            placeholder="caption"
                            onChange={(e)=>setBody(e.target.value)}
                        />

                        <div className="file-field input-field">
                        <div className="btn">
                            <span>Add Image</span>
                            <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
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
                </form>
            </div>
        </div>    
    )
}

export default CreatePost