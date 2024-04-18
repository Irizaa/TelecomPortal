import React from 'react'
import './Home.css'
import BGVideo from '../../Assets/StarVideo.mp4'

const Home = () => {

  return (
    <div className = 'home-container'>
      <div className='overlay'></div>
      <video src = {BGVideo} autoPlay loop muted preload='auto'/>
      <div className="home-content">
        <h1>Star Telecom</h1>
        <p>Welcome to the future of telecommunication.</p>
        <a href = "login" className="btn btn-dark">Sign in</a>
      </div>
    </div>
  )
}

export default Home