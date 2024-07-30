import React from 'react'

import '../CSS/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  const showSidebar = () => {
    document.querySelector('.sidebar').style.display = 'flex';

  }
  const hideSidebar = () => {
    document.querySelector('.sidebar').style.display = 'none';

  }
  return (
    <div>
      <nav>
        <ul className='sidebar'>
          <li className='nav-item-3' onClick={hideSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></li>
          <li className='nav-item ' onClick={hideSidebar}><Link to="/">Home</Link></li>
          <li className='nav-item ' onClick={hideSidebar}><Link to="/qualification">Qualification</Link></li>
          <li className='nav-item ' onClick={hideSidebar}><Link to="/contact">Contact</Link></li>
          {/* <li className='nav-item'><a href="/about">About</a></li> */}
        </ul>
        <ul>
          <li className='nav-item ' ><Link to="/">Portfolio</Link></li>
          <li className='nav-item mobileView'><Link to="/">Home</Link></li>
          <li className='nav-item mobileView'><Link to="/qualification">Qualification</Link></li>
          <li className='nav-item mobileView'><Link to="/contact">Contact</Link></li>
          <li className='nav-item-3 pcView mobileView menu-button' onClick={showSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></li>
          {/* <li className='nav-item'><a href="/about">About</a></li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
