import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
         Mesteov
      </div>
      <ul className='navbar-menu'>

         <li><Link to="/">Home</Link></li>
         <li><Link to="/blog">Blog</Link></li>
         <li><Link to="/contact">Blog</Link></li>

      </ul>
    
    </div>
  )
}
