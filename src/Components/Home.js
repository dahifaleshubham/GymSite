import React from 'react'
import imgcss from "../images/backimage.jpg"

const myStyle={
    backgroundImage: 
`url(${imgcss})`,
width:"211vh",
height:'100vh',
fontSize:'50px',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat',

};

export default function Home() {
  return (
    <>

   
    <div  style ={myStyle}>
    
    <div>hello</div>
    </div>
   
    </>
  )
}
