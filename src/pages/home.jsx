import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate("home");
  }
  return (
    <div>
      <button onClick={() => handleNavigation()}>Test</button>
    </div>
  )
}

export default Home