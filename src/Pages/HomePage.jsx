import React, { useState } from 'react'

import Hero from './Homepage/Hero'
import AboutUs from './Homepage/AboutUs'
import TodaySpecial from './Homepage/TodaySpecial'
import ChefWord from './Homepage/ChefWord'
import Video from './Homepage/Video'
import Laurels from './Homepage/Laurel '
import PhotoGallery from './Homepage/PhotoGallery'
import FindUs from './Homepage/FindUs'
import Footer from './Homepage/Footer'


export default function HomePage() {
  
  return (
    <div >
  
    <Hero/>
    <AboutUs/>
    <TodaySpecial/>
    <ChefWord/>
    <Video/>
    <Laurels/>
    <PhotoGallery/>
    <FindUs/>
    <Footer/>
    </div>
  )
}
