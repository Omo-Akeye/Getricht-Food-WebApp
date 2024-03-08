import React, { useState } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import TodaySpecial from '../components/TodaySpecial'
import ChefWord from '../components/ChefWord'
import Video from '../components/Video'
import Laurels from '../components/Laurel '
import PhotoGallery from '../components/PhotoGallery'
import FindUs from '../components/FindUs'
import Footer from '../components/Footer'


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
