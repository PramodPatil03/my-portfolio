import React from 'react'

import '../CSS/Navbar.css'

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li className='nav-item' ><a href="/">Pramod Patil</a></li>
                <li className='nav-item'><a href="/">Home</a></li>
                <li className='nav-item'><a href="/qualification">Qualification</a></li>
                <li className='nav-item'><a href="/contact">Contact</a></li>
                {/* <li className='nav-item'><a href="/about">About</a></li> */}
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
