import React from 'react'

import '../CSS/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li className='nav-item' ><Link to="/">Pramod Patil</Link></li>
                <li className='nav-item'><Link to="/">Home</Link></li>
                <li className='nav-item'><Link to="/qualification">Qualification</Link></li>
                <li className='nav-item'><Link to="/contact">Contact</Link></li>
                {/* <li className='nav-item'><a href="/about">About</a></li> */}
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
