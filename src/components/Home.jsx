import React from 'react'

import '../CSS/Home.css'
// import '../CSS/Navbar.css'
import pramod from '../Images/pramod.jpg'
import sangu from '../Images/sangu.jpg'
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
                    <li className='nav-item2'> <a href="/my-portfolio/hireme">Hire me</a></li>
                    {/* <li className='nav-item2'> <a href="/resume">Resume</a> </li> */}
                    <li className='nav-item2'> <a href="/my-portfolio/projects">Projects</a> </li>
                </ul>
            </div>
 
        </>
    )
}

export default Home
