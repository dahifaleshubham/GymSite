import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
      <NavLink href='https://instagram.com/'>
        <p> <i class="fa-brands fa-instagram"></i>
          <div className='socialhandle'>Instagram</div>
        </p>
      </NavLink>
      <NavLink href='https://facebook.com/'>
        <p> <i class="fa-brands fa-square-facebook"></i>
        <div className='socialhandle'>Facebook</div>
        </p>
      </NavLink>
      <NavLink href='https://twitter.com/home'>
        <p> <i class="fa-brands fa-square-twitter"></i>
        <div className='socialhandle'>Twitter</div>
        </p>
      </NavLink>
      <NavLink href='https://www.youtube.com/'>
        <p> <i class="fa-brands fa-youtube"></i>
        <div className='socialhandle'>Youtube</div>
        </p>
      </NavLink>
    </div>
  )
}