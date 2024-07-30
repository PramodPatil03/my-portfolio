import React from 'react'

import '../CSS/Hireme.css'

function Hireme() {

  return (
    <div className='mainBody'>
      <h2 id='head1'>Hire Me!</h2>
      <div id="showAbout">
        <p >
          Hello, My name is <b>Pramod Anil Patil</b>. An engineering graduate from <b>Computer science and Engineering</b> background with the CGPA of <b>7.98</b>. I have completed my graduation from <b>Hirasugar Institute of Technology, Nidasoshi</b>, affiliated to <b>VTU, Belagavi</b>. Having good knowledge of <b>programming languages like Java, C and scripting languages like Python, Javascript</b> etc. makes me a better engineering candidate. I and my teammates have developed <b>four projects including 3 minor and 1 major project</b> in my academics. Having <b>good communication skills, ability to work as a team</b> gives me more strength as an engineering candidate.
        </p>
      </div>
      <h3  >Technical Skills </h3>
      <div >
        <p className='information'>I am having a good knowledge of</p>
        <div><b>Javascript</b>,<b>Java</b>, <b>HTML, CSS, Bootstrap</b></div>
      </div>
      <hr className="innerHr" />
      <h3>Technological Constraints</h3>
      <div>
        <p className='information'>I am having a good knowledge of</p>
        <div><b>OOPs</b>,<b>DSA</b>, <b>Android Development</b></div>
      </div>
      <hr className="innerHr" />
      <h3 >Soft Skills</h3>
      <div><b>Good Communication Skills</b>,<b>Group Player</b>, <b>Good to handle pressure conditions</b></div>
      <hr className="innerHr" />
      <h3>Softwares</h3>
      <div ><b>VSCode</b>,<b>Eclipse</b>, <b>Anaconda Jupyter Notebook</b>, <b>Android Studio</b>, <b>Pycharm</b>, <b>MySQL Workbench</b></div>
    </div>
  )
}

export default Hireme
