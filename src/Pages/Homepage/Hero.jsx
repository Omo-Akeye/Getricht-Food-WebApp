import React from 'react'
import Button from '../../components/Button'
import { Link } from 'react-scroll'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export default function Hero() {
 
  return (
    <div className='grid md:grid-cols-2 xl:w-[80%] w-[90%] m-auto lg:gap-40 md:gap-24 gap-8 md:mt-20 lg:mb-40 relative mb-8' id='hero'>
         <div className='mt-6 text-white max-md:order-last'>
            <h2 className='text-2xl'>Chase the new Flavour</h2>
            <img src="/images/Frame 17.svg" alt="" className='py-2'/>
            <h1 className='text-4xl lg:text-8xl md:text-7xl text-primary capitalize lg:leading-[120px]'>The key to fine dining</h1>
            <p className='pt-2 font-sans text-ash md:mb-8'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
            <Button>Explore Menu</Button>
        </div>

        <section className='text-center'>
          <div className='m-auto md:w-full sm:w-[70%] w-[90%]'>
          <LazyLoadImage
    alt={'hero'}
    effect="blur"
    src={'/images/Hero img (1).png'} />
          
          </div>

          
          
        </section>
        <div className='absolute lg:right-[-5%]  xl:right-[-8%] bottom-[5%] cursor-pointer  max-md:right-[-8%] max-md:bottom-0 md:right-[-5%]'>
         
          <Link    to="about"  spy={true}  smooth={true}  offset={50} duration={500}>
          <img src="/images/Scroll.svg" alt="" className=''  />
          </Link>
          </div>
    </div>
  )
}
