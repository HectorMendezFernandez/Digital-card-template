import React from 'react'
import ImageSection from './ImageSection'
import InfoSection from './InfoSection'
import FooterSection from './FooterSection'
import '../App.css'
function MainContent() {

  return (
   <div className='main-content'>
    <ImageSection/>
    <InfoSection/>
    <FooterSection/>
   </div>
  )
}

export default MainContent
