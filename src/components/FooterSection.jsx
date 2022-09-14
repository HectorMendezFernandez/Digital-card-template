import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

function FooterSection() {

  return (
   <footer>
    <section className='icons-foot'>
        <a href=""><FontAwesomeIcon className='icon-sec' icon={faTwitter} /></a>
        <a href=""><FontAwesomeIcon className='icon-sec' icon={faFacebook} /></a>
        <a href=""><FontAwesomeIcon className='icon-sec' icon={faInstagram} /></a>
        <a href=""><FontAwesomeIcon className='icon-sec' icon={faGithub} /></a>
    </section>
   </footer>
  )
}

export default FooterSection
