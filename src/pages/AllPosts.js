import React, { useState, useEffect } from 'react'
import '../App.css'

const AllPosts = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/posts', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            }
        }).then(response => response.json())
        .then(result => {
            setData(result.posts)
        })
    }, [])

    const deletePost = (postId) => {
        fetch(`/deletepost/${postId}`, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            }
        }).then(response => response.json())
        .then(result => {
            console.log(result)
        })
    }

    return (
        <div className="allposts">
            {
                data.map(item => {
                    return(
                        <div className="allposts-card" key={ item._id }>
                            <h5>{ item.user.name }</h5>
                            <div className="card-image">
                                <img src={ item.imageUrl } alt="my post" />
                            </div>
                            <div className="card-content" />
                                <h6>{ item.title }</h6>
                                <p>{ item.caption }</p>
                                <input
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

export default AllPosts