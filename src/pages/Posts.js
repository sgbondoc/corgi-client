import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../App'

const Posts = () => {
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

    const showComment = (text, postId) => {
        fetch('/comment', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            },
            body: JSON.stringify({
                text,
                postId
            })
        }).then(response => response.json())
        .then(result => {
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
                                    && <i className="material-icons"
                                        style={{ float: "right" }}
                                        onClick={() => deletePost(item._id)}>
                                        delete</i>
                                    }
                                </h5>
                                <p className="allposts-card-content">{ item.caption }</p>
                                {
                                    item.comments.map(entry => {
                                        return (
                                        <h6 className="allposts-comment"
                                            key={ entry._id}>
                                            <span 
                                                style={{fontWeight: "500"}}>
                                                { entry.user.name }
                                            </span>
                                            : { entry.text }
                                        </h6>
                                        )
                                    })
                                }
                                <form onSubmit={(event) => {
                                    event.preventDefault()
                                    showComment(event.target[0].value, item._id)
                                    event.target.reset()
                                }}>
                                <input className="allposts-card-input"
                                    type="text"
                                    placeholder="add a comment"
                                />
                                </form>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Posts