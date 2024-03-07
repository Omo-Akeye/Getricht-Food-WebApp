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
import Modal from '../components/Modal'

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div >
    <Nav isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    {isModalOpen && <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
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
