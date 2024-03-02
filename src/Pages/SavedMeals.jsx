import React from 'react'
import Nav from '../components/Nav'
import Footer1 from '../components/Footer1'

export default function SavedMeals() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Nav/>
       <p className='text-white text-4xl w-[80%] m-auto text-center'>    SavedMeals</p>
      <div className='mt-auto'>
      <Footer1/>
      </div>
      </div>
  )
}
