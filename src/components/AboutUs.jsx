import React from 'react'
import Button from './Button'

export default function AboutUs() {
  return (
    <div className='bg-image  py-32'>
          <section className='w-[80%] m-auto flex items-center relative z-50 max-h-screen'>
           <article className='text-center md:text-right relative z-20'>
           <h1 className='text-5xl md:text-6xl text-[#DCCA87]' >About Us</h1>
            <div className='grid justify-items-end my-2 md:my-8' >
            <img src="/images/Frame 17.svg" alt="" />
            </div>
            <p className='text-ash mb-3 md:mb-8 font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
            <Button>Know More</Button>
           </article>
           <div className='relative mx-20 z-20'>
           <img src="/images/savernake-knives-f4jl2ezowuM-unsplash_2-removebg-preview.png" alt=""  className='' />
           </div>
            
            <article className='text-center relative md:text-left z-20'>
            <h1 className='text-5xl md:text-6xl text-[#DCCA87]' >Our History</h1>
            <img src="/images/Frame 17.svg" className=' my-2 md:my-8' alt="" />
            <p className='text-[#AAA] mb-3 md:mb-8 font-sans'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
            <Button>Know More</Button>
            </article>

            <span className='absolute left-[15%]'>
            <img src="/images/G.png" className='z-0 w-[40%] m-auto' alt="" />
            </span>
        </section>
    </div>
  )
}
