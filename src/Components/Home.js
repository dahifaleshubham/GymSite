import React from 'react'
import Back from "../images/backimage.jpg"


var sectionStyle = {
  width: "202vh",
  height: '100vh',
  fontSize: '50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${Back})`
}
function Home() {
  return (
    <div style={sectionStyle} >
      Home
    </div>
  ) 
}

export default Home
