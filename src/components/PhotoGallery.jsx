import React from 'react'
import Button from './Button'
import Photo from './Photo'

export default function PhotoGallery() {
  return (
    <div className='text-white bg-image '>
        <section className='md:py-32 py-12 md:pl-20 grid md:grid-cols-[1fr,2fr] gap-10'>
            <div className='max-md:w-[90%] max-md:m-auto' >
            <h2 className='mt-4 text-2xl'>Instagram</h2>
            <img src="/images/Frame 17.svg" alt="" className='my-3'/>
            <h2 className='my-5 text-6xl text-primary'>Photo Gallery</h2>
            <p className='pb-5 font-sans text-ash'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur voluptates in, similique laboriosam veniam porro, sapiente quia omnis quasi consequuntur, rem cupiditate</p>
            <Button>View More</Button>
             </div>
           
            <div className='overflow-hidden '>
            <Photo/>
            </div>
           
        </section>
    </div>
  )
}




