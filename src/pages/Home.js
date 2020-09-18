import React from 'react'
import { Jumbotron, Container } from 'reactstrap'

const Home = (props) => {
    return (
      <div>
        <div className="jumbtron">
          <Jumbotron fluid>
            <Container fluid>
              <h2 className="display-3">All the Corgis</h2>
              <p className="lead">Be a part of a community that puts their short legged friends first</p>
            </Container>
          </Jumbotron>
        </div>
        <div className="image-container">
          <div className="homepage-image">
            <img src="https://res-4.cloudinary.com/dostuff-media/image/upload//w_1200,q_75,c_limit,f_auto/v1560457238/event-image-10656475-435979c7-5e4d-4708-bfe8-272d335cb099.jpg" alt="corgi group"></img>
          </div>
        </div>  
      </div>  
    )
  }


  export default Home