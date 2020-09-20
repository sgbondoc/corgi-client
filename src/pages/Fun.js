import React, { Component } from 'react'

const API_KEY = process.env.REACT_APP_API_KEY

class Fun extends Component {
    state = {
        corgis: []
    }

    componentDidMount () {
        this.fetchData()
    }

    corgiGifUrl = `http://api.giphy.com/v1/gifs/search?q=corgi&limit=25&api_key=${API_KEY}`
    
    fetchData = () => {
        fetch(this.corgiGifUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ corgis: data.data })
                console.log(this.state)
            })
    }

    renderCorgiGifs = () => {
        let CorgiList = this.state.corgis.map((corgi, index) => {
            return (
                <div className="corgi-container" key={ index }>
                    <div className="corgi">
                        <img src={ corgi.images.fixed_height.webp } alt="corgi gif"></img>
                    </div>
                </div>
            )
        })

        return (
            <div className="gif-gallery">{ CorgiList }</div>
        )
    }

    render () {
        return (
            <>
            <h2>Thanks for visiting Corgi Connect</h2>
                <h4><a className="gif-login" href='/login'>Login again? Click HERE {'>'}</a></h4>
                    <div className="business-container">{ this.renderCorgiGifs() }</div>
            </>
        )
    }
}

export default Fun