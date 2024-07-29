import React from 'react'

import '../CSS/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li className='nav-item' ><Link to="/my-portfolio/">Pramod Patil</Link></li>
                <li className='nav-item'><Link to="/my-portfolio/">Home</Link></li>
                <li className='nav-item'><Link to="/my-portfolio/qualification">Qualification</Link></li>
                <li className='nav-item'><Link to="/my-portfolio/contact">Contact</Link></li>
                {/* <li className='nav-item'><a href="/about">About</a></li> */}
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
