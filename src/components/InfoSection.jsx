import React from 'react'
import { FaMailBulk } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../App.css'


function InfoSection() {

  return (
   <div className='info-sec'>

    <section className='name-sec'>
     <h2 className='info-name'>Hector Mendez</h2>
     <h4> Full-stack Developer</h4>
     <p>hector.mendez.fernandez@gmail.com</p>
     </section>
     <section className='buttons-sec'>
      <button className='Email-button'><FaMailBulk className='icon-sec'/><p className='but-inf'>Email</p></button>
      <button className='Linkedln-button'><FontAwesomeIcon className='icon-sec' icon={faLinkedin} /> <p className='but-inf'>Linkedln</p></button>
     </section>

     <section className='about-sec'>
      <div>
        <h5 className='about-subt'>About</h5>
        <p className='p-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat et laboriosam sit. Eum nobis autem animi amet rerum, accusantium dolorum voluptatum aliquam minima libero nam distinctio perspiciatis velit similique.</p>
      </div>
      <div>
      <h5 className='about-subt'>Interests</h5>
        <p className='p-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ducimus ipsam mollitia autem! Blanditiis recusandae aspernatur dolore magnam architecto voluptatum vel commodi perspiciatis, sunt dignissimos vitae! Earum labore dicta voluptate maxime ipsum dignissimos dolorem autem!</p>
      </div>
     </section>
   </div>
  )
}

export default InfoSection
