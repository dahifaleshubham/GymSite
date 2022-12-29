import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import videoBg from  "../images/sultan.mp4"
import imn from  "../images/blue.jpg"
const About = () => {


  const myStyle={
    backgroundImage: `url(${imn})`,
    height:'100vh',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",

};





  return (
    <>
    <div style= {myStyle}  >
<h1 className="dum">Choice your service</h1>
<h1 className="dum1">Schedule your visit!</h1>
<h1 className="dum2">Provide Your info</h1>
    </div>
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"  >
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner"     >
    <div className="carousel-item active">
      <video className="d-block w-100" src={videoBg}  muted alt="First slide"  />
      {/* <video src={videoBg} autoPlay loop muted /> */}
    </div>
    <div className="carousel-item">
      <video className="d-block w-100" src={videoBg}  alt="Second slide"/>
    </div> 
    <div className="carousel-item">
      <video className="d-block w-100" src={videoBg}  alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

</>
  )
}

export default About