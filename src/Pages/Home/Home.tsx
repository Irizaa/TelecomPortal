import React from 'react'
import {useNavigate} from 'react-router'
import './Home.css'
import BGVideo from '../../Assets/StarVideo.mp4'

const Home = () => {
  const navigate = useNavigate()
  const pageRedirect = () => {
    navigate('/login')
  }
  return (
    <div className = 'main'>
      <div className='overlay'></div>
      <video src = {BGVideo} autoPlay loop muted preload='auto'/>
      <div className="home-content">
        <h1>Star Telecom</h1>
        <p>Welcome to the future of telecommunication.</p>
        <button onClick={pageRedirect} className="btn btn-dark">Sign in</button>
      </div>
    </div>
  )
}

export default Home