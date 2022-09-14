import React from 'react'
import picture from '../assets/perfil1.jpg'
import '../App.css'

function ImageSection() {

  return (
   <div className='img-sec'>
    <img className='div-img' src={picture}></img>
   </div>
  )
}

export default ImageSection
