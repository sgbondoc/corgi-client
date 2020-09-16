import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PostModel from '../models/post'


class AllPosts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.fetchData()
    }
    
    fetchData = () => {
        PostModel.all().then((data) => {
            console.log(data)
            this.setState({ posts: data.posts })
        })
    }

    render() {
        let AllPosts = this.state.posts.map((post, index) => {
            return (
                <div className="post-container" key={ index }>
                    <div className="post-info">
                        

                        <div className="row">
                            <div className="col s12 m7">
                                <div className="card">
                                    <div className="card-image">
                                        <img src="images/sample-1.jpg" alt="title"></img>
                                        <span className="card-title">Card Title</span>
                                    </div>
                                        <div className="card-content">
                                            <p>I am a very simple card. I am good at containing small bits of information.
                                            I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                    <div className="card-action">
                                        <a href="#">This is a link</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>    
            )
        })

        return (
            <>
            <div className="posts-gallery">{ AllPosts }</div>
            </>
        )
    }
}

export default AllPosts