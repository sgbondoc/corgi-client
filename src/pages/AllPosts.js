import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../App'

const AllPosts = () => {
    const [data, setData] = useState([])
    const {state, dispatch} = useContext(UserContext)

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
            const newData = data.filter(item => {
                return item._id !== result._id
            })
            setData(newData)
        })
    }

    return (
        <div className="allposts">
            { data.map(item => {
                    return(
                        <div className="card allposts-card" key={ item._id }>
                            <h5 className="post-username">{ item.user.name }</h5> 
                            <div className="card-image">
                                <img src={ item.imageUrl } alt="my post" />
                            </div>
                            <div className="card-content" />
                                <h5 className="allposts-card-content">{ item.title }
                                    { item.user._id === state._id 
                                    && <i class="material-icons"
                                        style={{ float: "right" }}
                                        onClick={() => deletePost(item._id)}>
                                        delete</i>
                                    }
                                </h5>
                                <p className="allposts-card-content">{ item.caption }</p>
                                <input className="allposts-card-content"
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