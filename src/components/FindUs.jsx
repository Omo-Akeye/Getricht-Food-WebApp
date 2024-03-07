import React from 'react'
import Button from './Button'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function FindUs() {
  return (
    <div className='pt-20 pb-12 mt-4 text-white bg-image md:pb-36'>
        <div className='md:w-[80%] w-[90%] m-auto grid md:grid-cols-2 md:gap-28 items-center gap-14'>
            <article>
            <h3 className='text-2xl'>Contact us</h3>
            <img src="/images/Frame 17.svg" className='my-2' alt="" />
            <h1 className='pb-6 text-6xl md:pb-16 text-primary'>Find Us</h1>
            <p className='font-sans text-ash'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
            <h2 className='py-3 text-2xl md:py-5 text-primary'>Opening Hours</h2>
            <article className='pb-5 font-sans md:pb-16'>
                <p>Mon - Fri: 10:00 am - 02:00 am</p>
                <p>Sat - Sun: 10:00 am - 03:00 am</p>
            </article>
           <div className='pb-5'>
           <Button>Visit Us</Button>
           </div>
            </article>
            <div className='w-full'>
            <LazyLoadImage
    alt={'hero'}
    effect="blur"
    src={'/images/find.webp'} />
        </div>
        </div>

    </div>
  )
}
