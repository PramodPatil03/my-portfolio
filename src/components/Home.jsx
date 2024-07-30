import React from 'react'

import '../CSS/Home.css'
// import '../CSS/Navbar.css'
import pramod from '../Images/pramod-2.jpeg'
import sangu from '../Images/sangu.jpg'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <>
            <div className="mainBody">
                <div className="info">
                    <div className='left'>
                        <p className='name'>Pramod Patil</p>
                        {/* <p className='edu'>BE<br/>Computer Science and Engineering[2024]</p> */}
                    </div>
                    <div className="right">
                        <img className='myPic' src={pramod} alt={sangu} />
                    </div>
                </div>
            </div>
            <hr className='hr' />
            <div className='mainBody remaining'>
                <ul>
                    <li className='nav-item2'> <Link className='homeLink' to="/hireme">Hire me</Link></li>
                    {/* <li className='nav-item2'> <a href="/resume">Resume</a> </li> */}
                    <li className='nav-item2'> <Link className='homeLink' to="/projects">Projects</Link> </li>
                </ul>
            </div>
 
        </>
    )
}

export default Home
