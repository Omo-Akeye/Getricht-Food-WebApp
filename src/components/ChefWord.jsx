import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export default function ChefWord() {
  return (
    <div className='bg-image bg-cover bg-no-repeat relative text-ash py-24'>
     
    <section className='w-[80%] m-auto grid grid-cols-2 gap-24 items-center'>

    <div className=' '>
    <LazyLoadImage
    alt={'hero'}
    effect="blur"
    src={'/public/images/chef.webp'} />
          {/* <img src="/images/chef.png" loading='lazy' className=' ' alt="" /> */}
       </div>
          <div>
          <h5 className='text-white text-2xl'>Chef's Word</h5>
       <img src="/images/Frame 17.svg" alt="" className='my-2'/>
       <h1 className='text-primary text-6xl'>What We Believe In</h1>
     
     <article className='my-5'>
     <p className='flex items-center font-sans italic'>
         <img src="/images/“.svg" alt="" />Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor 
       </p>
       <p className='font-sans italic'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>

     </article>
       <h2 className='text-primary text-4xl'>Kevin Luo</h2>
       <h4 className='font-sans'>Chef & Founder</h4>
        <img src="/images/Kevin Luo.svg" alt="" className='my-6' />
          </div>

    

       
    </section>
   </div>
  )
}
