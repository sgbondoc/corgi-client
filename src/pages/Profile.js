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
            <div style={{
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                justifyContent: "space-around",
                margin: "18px 0px"
            }}>
                <div>
                    <img style={{width: "160px", height: "160px", borderRadius: "80px"}}
                    src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                    alt="profile pic"
                    />
                </div>
                <div style={{borderBottom: "1px solid grey"}}>
                    <h4>My Posts</h4>
                    <div>
                        <h6>sharon@sharon.com</h6>
                        <h6>Edna Mode</h6>
                        <h6>8/2/2018</h6>
                        <h6>Pembroke Welsh</h6>
                        <h6>I love my kongs</h6>
                    </div> 
                </div>

            <div className="gallery">
                {
                    userPosts.map(item => {
                        return (
                            <img  key={ item._id } className="my-post" src={ item.imageUrl } alt={ item.title } />
                        )
                    })
                }
               
            </div>
            </div>
        </div>
    )
}

export default Profile