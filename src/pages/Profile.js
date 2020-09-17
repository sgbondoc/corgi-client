import React, { useState, useEffect } from 'react'
import '../App.css'

const Profile = () => {
    const [userPosts, setUserPosts] = useState([])

    useEffect(() => {
        fetch('/myposts', {
            headers: { 
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            }    
        }).then(response => response.json())
        .then(result => {
            console.log(result)
            setUserPosts(result.myPosts)
        })
    }, [])

    return (
        <div style={{maxWidth: "550px", margin: "0px auto"}}>  
            <h2>My Posts</h2>
                <div className="gallery">
                        { userPosts.map(item => {
                                return (
                                    // <div className="myposts-card" key={ item._id }>
                                        <img className="my-post" src={ item.imageUrl } alt={ item.title }/>
                                    // </div>
                                )
                            })
                        }
                </div>
        </div>
    )
}

export default Profile