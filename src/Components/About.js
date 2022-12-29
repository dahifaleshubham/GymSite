import React from 'react'
import style from "./About.module.css"
import { Link } from 'react-router-dom';

import videoBg from "../videos/videoBg.mp4"
import { FaArrowAltCircleRight } from "react-icons/fa";

function About() {
  return (
    <>
      <div className={style.info}>
        <div>
          <video src={videoBg} autoPlay />
        </div>
        <div className={style.container}>
          <ul>
            <li className={style.first}>  <FaArrowAltCircleRight /> Choice Your service</li><br />
            <li className={style.second}> <FaArrowAltCircleRight />  Schedule your visit</li><br />
            <li className={style.third}> <FaArrowAltCircleRight /> <Link to="/signup"> Provide your info </Link></li><br />
            <button className={style.button} type='button'> <Link to="/knowmore">Know more</Link>  </button>
            
          </ul>
        </div>
      </div>
      {/* <div className={style.about}>
    
    </div> */}
    </>
  )
}

export default About
