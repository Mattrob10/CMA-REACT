import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className='nav'>
      <h1 className='nav-logo'>ART</h1>
      <div className='nav-links'>
        <NavLink to='/' className='home-link'>
          <i className='fa-solid fa-building-columns' id='home'></i>
        </NavLink>
        <NavLink to='/favorites' className='favorites-link'>
          Favorites
        </NavLink>
        <NavLink to='/contact' className='contact-link'>
          Contact
        </NavLink>
      </div>
    </div>
  );
}
export default Nav;
