import React from 'react'
import back from '../images/gymlogo.jpg'

var sectionStyle = {
  width: "50%",
  height: '100vh',
  Image: `url(${back})`
}
function About() {
  return (
    <div>
      <div className='about-container'>
        <div style={sectionStyle}></div>
        {/* <div style={sectionStyle}></div> */}
        <div>About</div>
      </div>
    </div>
  )
}

export default About
