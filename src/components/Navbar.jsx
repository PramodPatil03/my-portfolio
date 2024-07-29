import React from 'react'

import '../CSS/Navbar.css'

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li className='nav-item' ><a href="/my-portfolio/">Pramod Patil</a></li>
                <li className='nav-item'><a href="/my-portfolio/">Home</a></li>
                <li className='nav-item'><a href="/my-portfolio/qualification">Qualification</a></li>
                <li className='nav-item'><a href="/my-portfolio/contact">Contact</a></li>
                {/* <li className='nav-item'><a href="/about">About</a></li> */}
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
