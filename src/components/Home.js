import React from 'react'
import { NavLink } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"
import imn from  "../images/sum.jpg"
const Home = () => {

  const myStyle={
    backgroundImage: `url(${imn})`,
    height:'100vh',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",

};

  return (
    <div style={myStyle}>
    <h1>MAKE YOU A BODY <span>BUILDER</span> </h1>
    <div>
      <div>
        <h2 className="court">“If you want something you've never had, you must be willing to do something you've never done.”</h2>
      </div>
    <div className="col-sm-12 text-center">
    <NavLink  to="/signup">
    <button id="btnSearch" className="btn btn-primary btn-md center-block " Style="width: 100px;" OnClick="btnSearch_Click" >SignUp</button>
    </NavLink>
         <button id="btnClear" className="btn btn-danger btn-md center-block" Style="width: 100px;" OnClick="btnClear_Click" >Details</button>
     </div>
    </div>
  </div>


  ) 
}

export default Home




