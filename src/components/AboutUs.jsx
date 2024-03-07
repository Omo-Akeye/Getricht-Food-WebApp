import React from 'react'
import Button from './Button'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function AboutUs() {
  return (
    <div className='py-32 bg-image' id='about'>
          <section className='lg:w-[80%] w-[90%] m-auto flex items-center relative z-50 max-h-screen max-md:flex-col'>
           <article className='relative z-20 text-center md:text-right'>
           <h1 className='text-5xl md:text-6xl text-[#DCCA87]' >About Us</h1>
            <div className='grid my-2 justify-items-end md:my-8' >
            <img src="/images/Frame 17.svg" alt="" className='max-md:m-auto'/>
            </div>
            <p className='mb-3 font-sans text-ash md:mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
            <Button>Know More</Button>
           </article>
           <div className='relative z-20 mx-20 max-md:rotate-90 max-md:h-[120px] flex justify-center items-center'>
           <LazyLoadImage
    alt={'knife'}
    effect="blur"
    src={'/images/savernake-knives-f4jl2ezowuM-unsplash_2-removebg-preview.webp'}
    className='max-h-[300px] md:max-h-full ' />
           </div>
            
            <article className='relative z-20 text-center md:text-left'>
            <h1 className='text-5xl md:text-6xl text-primary' >Our History</h1>
            <div className='my-2 md:my-8'>
            <img src="/images/Frame 17.svg" className='max-md:m-auto' alt='' />
            </div>
            <p className='text-[#AAA] mb-3 md:mb-8 font-sans'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
            <Button>Know More</Button>
            </article>

            <span className='absolute md:left-[15%] max-md:top-1/4'>
            <img src="/images/G.png" className='z-0 md:w-[40%] m-auto w-[80%]' alt="" loading='lazy' />
            </span>
        </section>
    </div>
  )
}
