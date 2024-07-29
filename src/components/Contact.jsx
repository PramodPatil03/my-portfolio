import React from 'react'

import '../CSS/Contact.css'

function Contact() {
    const mailtoHref = "mailto:pramodpatil190203@gmail.com?subject= &body=";
  return (
    <div className="mainBody">
      <div className='name'><p>Pramod Patil</p></div>
      <div className='contactContainer'>
        <div className='number'>
          <span className="lable">Mobile Number<span className="hidden">{': '}+91 8970627081</span></span>
          
        </div>
        <div className='number'>
          <span className="lable">Email<span className="hidden" >{': '} <a target='_blank' href={mailtoHref}>pramodpatil190203@gmail.com</a></span></span>
        </div>
        <div className='number'>
          <span className="lable">LinkedIn <span className="hidden">{': '} <a target='_blank' href="https://www.linkedin.com/in/pramod-patil-768706282/">Pramod Patil @ LinkedIn</a></span></span>
          
        </div>
        <div className='number'>
          <span className="lable">GitHub<span className="hidden">{': '} <a target='_blank' href="https://github.com/PramodPatil03">Pramod Patil @ github</a> </span></span>
          
        </div>
      </div>
    </div>
  )
}

export default Contact
