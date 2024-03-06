import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Laurels() {
  return (
    <div className='bg-image  text-white pt-14 pb-28'>
         <img src="/images/Group 87.png" alt="" className='w-24 mx-12' />
        <section className=' w-[80%] m-auto grid grid-cols-2 gap-20 mt-3 items-center'>
       
            <div>
          <div className='mb-10'>
          <h3 className='text-2xl my-2'>Awards & Recognition</h3>
             <img src="/images/Frame 17.svg" alt="" />
             <h2 className='text-primary text-6xl mt-4'>Our Laurels</h2>
          </div>
      
      <article className='grid grid-cols-2 gap-3'>

      <div className='flex  items-center '>
           <img src="/images/Group 26.svg" className='w-20' alt="" />
           <span className='ml-6'>
            <h2 className='text-primary text-2xl mb-3'>Bib Gourmound</h2>
            <p className='font-sans text-ash'>Lorem ipsum, dolor sit amet consectetur </p>
           </span>
        </div>
        <div className='flex  items-center '>
           <img src="/images/Group 25.svg" className='w-20' alt="" />
           <span className='ml-6'>
            <h2 className='text-primary text-2xl mb-3'>Rising Star</h2>
            <p className='font-sans text-ash'>Lorem ipsum, dolor sit amet consectetur </p>
           </span>
        </div>
        <div className='flex  items-center mt-12'>
           <img src="/images/Group 27.svg" className='w-20' alt="" />
           <span className='ml-6'>
            <h2 className='text-primary text-2xl mb-3'>AA Hospitality</h2>
            <p className='font-sans text-ash'>Lorem ipsum, dolor sit amet consectetur </p>
           </span>
        </div>
        <div className='flex  items-center mt-12'>
           <img src="/images/Group 25.svg" className='w-20' alt="" />
           <span className='ml-6'>
            <h2 className='text-primary text-2xl mb-3'>Outstanding </h2>
            <p className='font-sans text-ash'>Lorem ipsum, dolor sit amet consectetur </p>
           </span>
        </div>
      
      
      </article>
     
            </div>

            <div className='relative text-right'> 
                <div className='w-[70%] relative inline-block'>
                <LazyLoadImage
    alt={'hero'}
    effect="blur"
    src={'/images/Mask Group (4).webp'} />
                {/* <img src="/images/Mask Group (4).jpg" alt="" loading='lazy' /> */}
                </div>
                <div className='absolute left-[10%] top-[40%]'>
                    <img src="/images/G.svg" alt="" className='w-[80%]' />
                </div>
            </div>
     </section>
    </div>
  )
}
