import React from 'react'
import Button from './Button'
import Photo from './Photo'

export default function PhotoGallery() {
  return (
    <div className='bg-image text-white'>
        <section className='py-32 pl-20 grid grid-cols-[1fr,2fr] gap-10'>
            <div >
            <h2 className='text-2xl mt-4'>Instagram</h2>
            <img src="/images/Frame 17.svg" alt="" className='my-3'/>
            <h2 className='text-6xl text-primary my-5'>Photo Gallery</h2>
            <p className='font-sans text-ash pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur voluptates in, similique laboriosam veniam porro, sapiente quia omnis quasi consequuntur, rem cupiditate</p>
            <Button>View More</Button>
             </div>
           
            <div className=' overflow-hidden'>
            <Photo/>
            </div>
           
        </section>
    </div>
  )
}




