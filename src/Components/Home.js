import React from 'react'
import imgcss from "../images/backImage.jpg"
import { Link } from 'react-router-dom';


const myStyle = {
  backgroundImage:
    `url(${imgcss})`,
  width: "100%",
  
  height: '100vh',
  fontSize: '50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

};

export default function Home() {
  return (
    <>


      <div style={myStyle}>

        <div className='homeBody'>
          <h4> MAKE YOU A BODY <span>BUILDER</span>  </h4>
          <p className='bodyContent'>This is the best plateform for body Building.
            You are Welcome here</p>
          <div className='btnClass'>
            <button className='signup' type='button'><Link to="/signup"> SignUp New </Link> </button>
          <button className='details'  >   <Link to ="/view">View details </Link></button>

          </div>

        </div>
      </div>

    </>
  )
}
