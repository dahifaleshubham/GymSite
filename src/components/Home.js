import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./Home.module.css";
import imn from  "../images/sum.jpg"
const Home = () => {

  const myStyle={
    backgroundImage: `url(${imn})`,
    height:'100vh',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    width:"100%", 
    
};

  return (
    <div style={myStyle}>
    <h1 className={style.bhuvi} >MAKE YOU A BODY <span>BUILDER</span> </h1>
    <div>
      <div>
        <h2 className={style.court}>“If you want something you've never had, you must be willing to do something you've never done.”</h2>
      </div>
    <div>
    <NavLink  to="/details">
    <button type="button" id='na' class="btn btn-danger btn-lg">Detail</button>
         </NavLink>
    <NavLink  to="/signup">
    <button type="button" id='nb' class="btn btn-primary btn-lg">Signup</button>
         </NavLink>
     </div>
    </div>
  </div>


  ) 
}

export default Home




