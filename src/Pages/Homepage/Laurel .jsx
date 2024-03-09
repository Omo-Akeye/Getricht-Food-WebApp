import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Laurels() {
  return (
    <div className='text-white bg-image pt-14 pb-28'>
         <img src="/images/Group 87.png" alt="" className='w-24 mx-6 md:mx-12' />
        <section className='xl:w-[80%] w-[90%] m-auto grid min-[850px]:grid-cols-[1.5fr,1fr] lg:grid-cols-2 gap-20 mt-3 items-center'>
       
            <div>
          <div className='mb-10'>
          <h3 className='my-2 text-2xl'>Awards & Recognition</h3>
             <img src="/images/Frame 17.svg" alt="" />
             <h2 className='mt-4 text-6xl text-primary'>Our Laurels</h2>
          </div>
      
     
      <article className='grid gap-3 md:grid-cols-2'>

      <div className='flex items-center '>
           <img src="/images/Group 26.svg" className='w-20' alt="" />
           <span className='ml-6'>
            <h2 className='mb-3 text-2xl text-primary'>Bib Gourmound</h2>
            <p className='font-sans text-ash'>Lorem ipsum, dolor sit amet consectetur </p>
           </span>
        </div>
        <div className='flex items-center '>
           <img src="/images/Group 25.svg" className='w-20' alt="" />
           <span className='ml-6'>
            <h2 className='mb-3 text-2xl text-primary'>Rising Star</h2>
            <p className='font-sans text-ash'>Lorem ipsum, dolor sit amet consectetur </p>
           </span>
        </div>
        <div className='flex items-center mt-4 md:mt-12'>
           <img src="/images/Group 27.svg" className='w-20' alt="" />
           <span className='ml-6'>
            <h2 className='mb-3 text-2xl text-primary'>AA Hospitality</h2>
            <p className='font-sans text-ash'>Lorem ipsum, dolor sit amet consectetur </p>
           </span>
        </div>
        <div className='flex items-center mt-4 md:mt-12'>
           <img src="/images/Group 25.svg" className='w-20' alt="" />
           <span className='ml-6'>
            <h2 className='mb-3 text-2xl text-primary'>Outstanding </h2>
            <p className='font-sans text-ash'>Lorem ipsum, dolor sit amet consectetur </p>
           </span>
        </div>
      
      
      </article>
     
            </div>

            <div className='relative text-center min-[850px]:text-right'> 
                <div className='md:w-[70%] w-[80%] relative inline-block'>
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
