import React, { useState, useEffect } from 'react'
import PostModel from '../models/post'

const MyGallery = () => {
    const [userPosts, setUserPosts] = useState([])

    useEffect(() => {
        PostModel.showMyPosts().then(result => {
            setUserPosts(result.myPosts)
        })
    }, [])

    return (
        <div style={{maxWidth: "700px", margin: "0px auto"}}>  
            <h2>My Corgi Gallery</h2>
                <div className="gallery">
                        { userPosts.map(item => {
                                return (
                                    <img key={ item._id } className="my-post" 
                                        src={ item.imageUrl } 
                                        alt={ item.title }
                                    />
                                )
                            })
                        }
                </div>
        </div>
    )
}

export default MyGallery