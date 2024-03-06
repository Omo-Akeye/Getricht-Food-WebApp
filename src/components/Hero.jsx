import React from 'react'
import Button from './Button'
import { Link } from 'react-scroll'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export default function Hero() {
  const divStyle = { 
    backgroundImage:"url('/images/Hero img (1).webp')"
  }
  return (
    <div className='grid grid-cols-2 lg:w-[80%] w-[90%] m-auto lg:gap-40 gap-28 md:mt-20 lg:mb-40' id='hero'>
         <div className='mt-6 text-white'>
            <h2 className='text-2xl'>Chase the new Flavour</h2>
            <img src="/images/Frame 17.svg" alt="" className='py-2'/>
            <h1 className='text-4xl lg:text-8xl md:text-7xl text-primary capitalize lg:leading-[120px]'>The key to fine dining</h1>
            <p className='pt-2 font-sans text-ash md:mb-8'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
            <Button>Explore Menu</Button>
        </div>

        <section className='relative text-center'>
          <div className='w-full m-auto'>
          <LazyLoadImage
    alt={'hero'}
    effect="blur"
    src={'/images/Hero img (1).png'} />
          {/* <img src="/images/Hero img (1).png" alt="" className='w-full' /> */}
          </div>

          <div className='absolute lg:right-[-15%] bottom-[5%] cursor-pointer right-[-12%]'>
         
          <Link    to="about"  spy={true}  smooth={true}  offset={50} duration={500}>
          <img src="/images/Scroll.svg" alt=""  />
          </Link>
          </div>
          
        </section>
        
    </div>
  )
}
