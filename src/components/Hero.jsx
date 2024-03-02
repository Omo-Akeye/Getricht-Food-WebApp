import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='grid grid-cols-2 w-[80%] m-auto gap-40 md:mt-20 lg:mb-40'>
         <div className='text-white mt-6'>
            <h2 className='text-2xl'>Chase the new Flavour</h2>
            <img src="/images/Frame 17.svg" alt="" className='py-2'/>
            <h1 className='text-4xl md:text-8xl text-primary capitalize md:leading-[120px]'>The key to fine dining</h1>
            <p className='text-ash font-sans pt-2 md:mb-8'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
            <Button>Explore Menu</Button>
        </div>

        <section className='text-center'>
          <div className='w-full m-auto'>
          <img src="/images/Hero img (1).png" alt="" className='w-full' />
          </div>
        </section>
    </div>
  )
}
