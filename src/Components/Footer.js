import React from 'react'

import { BsLinkedin, BsInstagram, BsTwitter, BsFacebook, BsYoutube, BsGithub } from "react-icons/bs";



function Footer() {
    return (
        <>
            <wrapper>
                <section>

                    <footer className='footer'>
                        <div>
                            <ul>
                                <li> <a href='https://github.com/Mdsaif0786/GymSite.git'><BsGithub />Github </a> </li>
                                <li>  <a href='https://github.com/Mdsaif0786/GymSite.git'><BsYoutube /> Youtube</a></li>
                                <li>  <a href='https://github.com/Mdsaif0786/GymSite.git'><BsFacebook /> Facebook</a></li>
                                <li> <a href='https://github.com/Mdsaif0786/GymSite.git'><BsTwitter />  Twitter </a></li>
                                <li>  <a href='https://github.com/Mdsaif0786/GymSite.git'><BsInstagram />  Instagram </a></li>
                                <li>  <a href='https://github.com/Mdsaif0786/GymSite.git'><BsLinkedin />  Linkedin </a></li>

                            </ul>
                        </div>

                    </footer>
                </section>
            </wrapper>
        </>
    )
}

export default Footer
