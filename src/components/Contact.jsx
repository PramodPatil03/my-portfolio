import React from 'react'

import '../CSS/Contact.css'

function Contact() {
  const mailtoHref = "mailto:pramodpatil190203@gmail.com?subject= &body=";
  return (
    <div className="mainBody">
      <div className='name'><p>Pramod Patil</p></div>
      <div className='contactContainer'>
        <div className='number'>
          <span className="lable"><a className='acontact' href="tel:+918970627081">Mobile<span className="hidden">{': '}+91 8970627081</span></a></span>
        </div>
        <div className='number'>
          <span className="lable"><a  className='acontact' target='_blank' href={mailtoHref}>Email<span className="hidden" >{': '} pramodpatil190203@gmail.com</span></a></span>
        </div>
        <div className='number'>
          <span className="lable"><a  className='acontact' target='_blank' href="https://www.linkedin.com/in/pramod-patil-768706282/">LinkedIn<span className="hidden">{': '}Pramod Patil @ LinkedIn</span></a></span>
        </div>
        <div className='number'>
          <span className="lable"><a  className='acontact' target='_blank' href="https://github.com/PramodPatil03">GitHub<span className="hidden">{': '}Pramod Patil @ github</span></a></span>
        </div>
      </div>
    </div>
  )
}

export default Contact
