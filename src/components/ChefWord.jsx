import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export default function ChefWord() {
  return (
    <div className='relative py-12 md:py-24 bg-image text-ash'>
     
    <section className='md:w-[80%] w-[90%] m-auto grid md:grid-cols-2 md:gap-24 items-center gap-12'>

    <div className=''>
    <LazyLoadImage
    alt={'hero'}
    effect="blur"
    src={'/images/chef.webp'} />
        
       </div>
          <div>
          <h5 className='text-2xl text-white'>Chef's Word</h5>
       <img src="/images/Frame 17.svg" alt="" className='my-2'/>
       <h1 className='text-5xl md:text-6xl text-primary'>What We Believe In</h1>
     
     <article className='my-5'>
     <p className='flex items-center font-sans italic'>
         <img src="/images/“.svg" alt="" />Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor 
       </p>
       <p className='font-sans italic'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>

     </article>
       <h2 className='text-4xl text-primary'>Kevin Luo</h2>
       <h4 className='font-sans'>Chef & Founder</h4>
        <img src="/images/Kevin Luo.svg" alt="" className='my-6' />
          </div>

    

       
    </section>
   </div>
  )
}
