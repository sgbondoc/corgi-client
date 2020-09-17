import React from 'react'
import '../App.css'

const Home = () => {
    return (
        <div className="home">
            <div className="home-card">
                <h5>sharon</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="my post" />
                </div>
                <div className="card-content" />
                    <h6>title</h6>
                    <p>caption for this post</p>
                    <input
                        type="text"
                        placeholder="add a comment"
                    />
            </div>
            <div className="home-card">
                <h5>sharon</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="my post" />
                </div>
                <div className="card-content" />
                    <h6>title</h6>
                    <p>caption for this post</p>
                    <input
                        type="text"
                        placeholder="add a comment"
                    />
            </div>
        </div>
    )
}

export default Home