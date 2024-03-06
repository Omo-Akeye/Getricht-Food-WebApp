import React from 'react'
import Button from './Button'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function FindUs() {
  return (
    <div className='bg-image text-white mt-4 pt-20 pb-36'>
        <div className='w-[80%] m-auto grid grid-cols-2 gap-28 items-center'>
            <article>
            <h3 className='text-2xl'>Contact us</h3>
            <img src="/images/Frame 17.svg" className='my-2' alt="" />
            <h1 className='text-6xl text-primary pb-16'>Find Us</h1>
            <p className='text-ash font-sans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
            <h2 className='text-2xl text-primary py-5'>Opening Hours</h2>
            <article className='font-sans py-5  pb-16'>
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
           {/* <img src="/images/find.png" className='' alt="" loading='lazy'/> */}
        </div>
        </div>

    </div>
  )
}
