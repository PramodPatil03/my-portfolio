import React from 'react'

import '../CSS/Home.css'


function Education() {
  return (
    <div>
      <div className="mainBody">
        <h2 id='education'>EDUCATION</h2>
        <hr className='innerHr' />
        <div className="degree">
          <h3>BE Computer Science and Engineering</h3>
          <h4 className='instiName'>Hirasugar Institute of Technology, Nidasoshi</h4>
          <p className="percentage"><b>CGPA: 7.98</b></p>
        </div>
        <hr className='innerHr' />
        <div className="degree">
          <h3>PUC Science [P C M B]</h3>
          <h4 className='instiName'>KLE's G I Bagewadi College, Nipani</h4>
          <p className="percentage"><b>Percentage: 81.5</b></p>
        </div>
        <hr className="innerHr" />
        <div className="degree">
          <h3>SSLC</h3>
          <h4 className='instiName'>Koganoli High-School, Koganoli</h4>
          <p className="percentage"><b>85.12</b></p>
        </div>
      </div>
    </div>
  )
}

export default Education
