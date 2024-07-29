import React from 'react'

import ems from '../Images/ems.png'
import ems2 from '../Images/ems1.png';
import ems3 from '../Images/ems2.png'

import vote from '../Images/vote2.jpg'
import vote1 from '../Images/vote3.jpg'
import vote2 from '../Images/vote8.jpg'
import vote3 from '../Images/vote9.jpg'

import rc from '../Images/cld1.jpg'
import rc2 from '../Images/cld2.jpg'
import rc3 from '../Images/cld3jpg.jpg'
// import rc4 from '../Images/cld4.jpg'

import '../CSS/Projects.css'

function Projects() {
  return (

    <>
      <div className="mainBody">
        <div>
          <h3 id='projectHead'>Projects page</h3>
        </div>
      <hr />
        <div>
          <div className="projectName">
            <h2>EMS</h2>
          </div>
          <div className="projectabout">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat esse harum, voluptatibus excepturi voluptatem neque ex aut, voluptate cupiditate, corporis voluptatum dolorem ab nisi quaerat et possimus commodi eum unde earum. Harum laborum tenetur deleniti molestias quasi aperiam tempora! Eum numquam totam eligendi iste atque assumenda aut similique voluptates aliquam. Ducimus officiis aspernatur, corporis harum ipsam facere, nostrum neque quibusdam voluptate praesentium iste natus perspiciatis numquam itaque voluptatum sit animi eaque aperiam suscipit cumque sint non? Tempora, doloremque. Doloribus sit sed cumque distinctio ab nihil ipsum quo modi nisi vel!
          </div>
          <div className='imageHolder'>
            <div className="image"><img src={ems} alt="" /></div>
            <div className="image"><img src={ems2} alt="" /></div>
            <div className="image"><img src={ems3} alt="" /></div>
          </div>
        </div>
        <hr />
        <div> 
          <div className="projectName">
            <h2>You Vote</h2>
          </div>
          <div className="projectabout">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quaerat id esse nemo unde ea laborum cumque sint quis perspiciatis tempore dolor fugit, ipsa consequatur blanditiis sit totam dicta officia eligendi quas qui minima aut. Enim reiciendis esse cumque aspernatur unde ea quasi deleniti dignissimos atque tenetur, incidunt minima magni.
          </div>
          <div className='imageHolder'>
            <div className="image vote"><img src={vote} alt="" /></div>
            <div className="image vote"><img src={vote1} alt="" /></div>
            <div className="image vote"><img src={vote2} alt="" /></div>
            <div className="image vote"><img src={vote3} alt="" /></div>
          </div>
        </div>
        <hr />
        <div>
          <div className="projectName">
            <h2>RECNS</h2>
          </div>
          <div className="projectabout">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae ipsa sequi minima sapiente doloribus quos temporibus repudiandae! Provident, vero similique quaerat adipisci impedit dolorem, architecto ad error quasi repudiandae, cumque voluptatibus. Suscipit beatae maxime in, recusandae commodi nam, numquam nihil eaque aperiam sunt, dolores libero reprehenderit modi quidem possimus.
          </div>
          <div className='imageHolder'>
            <div className="image"><img src={rc} alt="" /></div>
            <div className="image"><img src={rc2} alt="" /></div>
            <div className="image"><img src={rc3} alt="" /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
