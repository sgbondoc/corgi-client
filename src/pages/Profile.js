import React from 'react'

const Profile = () => {
    return (
        <div>
             
            <div style={{
                display: "flex",
                flexDirection:"column",
                justifyContent: "space-around",
                margin: "18px 0px",
                borderBottom: "1px solid grey"
            }}>
                <div className="profile-form-card">
                    <label htmlFor="name">Username</label>
                    <input
                        
                        type="name"
                        id="name"
                        name="name"
                        placeholder="name"
                        
                    />
               
                    <label htmlFor="email">Email</label>
                    <input
                        
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        
                    />
               
                    <label htmlFor="corgiName">Corgi Name</label>
                    <input
                        
                        type="corgiName"
                        id="corgiName"
                        name="corgiName"
                        placeholder="Corgi Name"
                        
                    />
             
                    <label htmlFor="corgiBirthday">Corgi Birthday</label>
                    <input
                        
                        type="corgiBirthday"
                        id="corgiBirthday"
                        name="corgiBirthday"
                        placeholder="Corgi Birthday"
                        
                    />
             
                    <label htmlFor="corgiBreed">Corgi Breed</label>
                    <input
                        
                        type="corgiBreed"
                        id="corgiBreed"
                        name="corgiBreed"
                        placeholder="Corgi Breed"
                        
                    />
             
                    <label htmlFor="corgiBio">Corgi Bio</label>
                    <input
                        
                        type="corgiBio"
                        id="corgiBio"
                        name="corgiBio"
                        placeholder="Corgi Bio"
                        
                    />
                </div>

                    <div>
                        <img style={{width: "160px", height: "160px", borderRadius: "80px"}}
                        src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                        alt="profile pic"
                        />
                    </div>

                    <button type="submit">Update</button>
            </div>
        </div>
    )
}

export default Profile