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
            Employee Management System (EMS) is our engineering mini-project which we had developed using HTML,CSS, Javascript, PHP and MySQL. <br />This project was a prototype to demonstrate how employee Management can be done easily with the help of EMS. EMS was mainly intended to demonstrate how Database Management System (DBMS) works in real time application.
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
            You Vote was an offline voting app prototype which was developed as our Engineering mini-project. This app was built using Java and XML as markup language. We used Android studio for building this app and java as backend language. This app was kept offline to prevent any cyber attact that may happen if it was connected to network. This mini-project got third rank in our college level project competition.
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
            In today's digital world almost everyone makes use of cloud services, Among that cloud storage is a widely used service among the users. If there is storage there will be Redundancy. Our project was mainly focused on elimination of the redundancy in the cloud network storage, improving the capacity, higher performance and cost effectiveness as every single bit cause some amount of money to the cloud users. This app was built using netbeans, Java, Cloud simulator package and MySQL. This project has got 2nd rank in college level project competition and got selected for IISc bangalore's KSCST exhibition earning a reward amount of 5000 rs.
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
