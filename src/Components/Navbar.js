import React from "react";
import {NavLink}  from "react-router-dom"
import logo from "../images/gymlogo.jpg"

function Navbar() {
    return (
        <>
            <div className="NavbarCSS">
               
                <NavLink to="/">  <img src={logo} style={{ width: "70px", padding: "10px" }} alt="true" /> </NavLink>


                <div>
                    <ul className="Navitems" >
                        <li className="home"> <NavLink to="/">  Home</NavLink></li>
                        <li className="about" ><NavLink to="/about"> About</NavLink></li>
                        <li className="price"><NavLink to="/pricing"> Pricing</NavLink></li>
                        <li className="program"><NavLink to="/program"> Program</NavLink></li>
                    </ul>
                </div>



            </div>



        </>
    )
}

export default Navbar