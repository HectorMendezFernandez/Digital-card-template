import React from 'react'
import picture from '../assets/perfil1.jpg'
import netsoPugno from '../assets/netsonetso.jpeg'
import '../App.css'

function ImageSection() {

  return (
   <div className='img-sec'>
    <img className='div-img' src={picture}></img>
   </div>
  )
}

export default ImageSection
