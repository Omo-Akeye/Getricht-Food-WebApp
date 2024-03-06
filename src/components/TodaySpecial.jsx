import React from 'react'
import Button from './Button'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export default function TodaySpecial() {
  return (
    <div className='w-[80%] m-auto text-center py-12'>
        <section className='text-white'>
            <div className='mb-10'>
            <h2 className='text-3xl'>Menu that Fits You Palatte</h2>
            <img src="/images/Frame 17.svg" alt="" className='m-auto my-2'/>
            <h1 className='text-primary md:text-6xl text-4xl' >Today's Special</h1>
           
            </div>

           <article className='flex justify-between'>
           <main>
           <h1 className='text-4xl mb-12'>Wine & Beer</h1>
                <div className='flex justify-between items-center mb-10'>
                    <span className='text-start'>
                        <h2 className='text-2xl text-primary mb-2'>Chapel Hill Shiraz</h2>
                        <p className='font-sans text-ash'>AU | Bottle</p>
                    </span>

                    <span className='flex justify-center items-center '>
                        <p className=' w-28 h-[1px] bg-white mr-4'></p>
                         <h4 className='text-2xl text-ash' >$59</h4>
                    </span>

                </div>

                <div className='flex justify-between items-center mb-10'>
                    <span className='text-start'>
                        <h2 className='text-2xl text-primary mb-2'>Catena Malbee</h2>
                        <p className='font-sans text-ash'>AR | Bottle</p>
                    </span>

                    <span className='flex justify-center items-center '>
                        <p className='w-28 h-[1px] bg-white mr-4'></p>
                         <h4 className=' text-ash text-2xl' >$59</h4>
                    </span>

                </div>

                <div className='flex justify-between items-center mb-10'>
                    <span className='text-start'>
                        <h2 className='text-2xl text-primary mb-2'>La Vieille Rose</h2>
                        <p className='font-sans text-ash'>FR | 750 ml</p>
                    </span>

                    <span className='flex justify-center items-center '>
                        <p className='w-28 h-[1px] bg-white mr-4'></p>
                         <h4 className='text-ash text-2xl' >$59</h4>
                    </span>

                </div>

                <div className='flex justify-between items-center mb-10'>
                    <span className='text-start'>
                        <h2 className='text-2xl text-primary mb-2'>Rhino Pale Ale</h2>
                        <p className='font-sans text-ash '>CA | 750 ml</p>
                    </span>

                    <span className='flex justify-center items-center '>
                        <p className='w-28 h-[1px] bg-white mr-4'></p>
                         <h4 className=' text-ash text-2xl' >$59</h4>
                    </span>

                </div>
                <div className='flex justify-between items-center '>
                    <span className='text-start'>
                        <h2 className='text-2xl text-primary mb-2'>Irish Guinness</h2>
                        <p className='font-sans text-ash'>IE | 750 ml</p>
                    </span>

                    <span className='flex justify-center items-center '>
                        <p className='w-28 h-[1px] bg-white mr-4'></p>
                         <h4 className=' text-ash text-2xl' >$59</h4>
                    </span>

                </div>


              
            </main>

            <div className='w-[80%] m-auto' > 
            <LazyLoadImage
    alt={'hero'}
    effect="blur"
    src={'/images/today-removebg-preview.webp'} />
                {/* <img src="" loading='lazy'  alt="" /> */}
            </div>

            <main className=''>
            <h1 className='text-5xl mb-12'>Cocktails</h1>
                <div className='flex justify-between items-center mb-10'>
                    <span className='text-start'>
                        <h2 className='text-2xl text-primary'>Aperol Spritz</h2>
                        <p className='font-sans text-ash'>Aperol | Bottle |</p>
                    </span>

                    <span className='flex justify-center items-center '>
                        <p className='w-28 h-[1px] bg-white mr-4'></p>
                         <h4 className='text-2xl text-ash' >$59</h4>
                    </span>

                </div>

                <div className='flex justify-between items-center mb-10'>
                    <span className='text-start'>
                        <h2 className='text-2xl text-primary'>Catena Malbee</h2>
                        <p className='font-sans text-ash'>AR | Bottle</p>
                    </span>

                    <span className='flex justify-center items-center '>
                        <p className='w-28 h-[1px] bg-white mr-4'></p>
                         <h4 className='text-2xl text-ash' >$59</h4>
                    </span>

                </div>

                <div className='flex justify-between items-center mb-10'>
                    <span className='text-start'>
                        <h2 className='text-2xl text-primary'>La Vieille Rose</h2>
                        <p className='font-sans text-ash'>FR | 750 ml</p>
                    </span>

                    <span className='flex justify-center items-center '>
                        <p className='w-28 h-[1px] bg-white mr-4'></p>
                         <h4 className='text-2xl text-ash' >$59</h4>
                    </span>

                </div>

                <div className='flex justify-between items-center mb-10'>
                    <span className='text-start'>
                        <h2 className='text-2xl text-primary'>Rhino Pale Ale</h2>
                        <p className='font-sans text-ash'>CA | 750 ml</p>
                    </span>

                    <span className='flex justify-center items-center '>
                        <p className='w-28 h-[1px] bg-white mr-4'></p>
                         <h4 className='text-2xl text-ash' >$59</h4>
                    </span>

                </div>
                <div className='flex justify-between items-center '>
                    <span className='text-start'>
                        <h2 className='text-2xl text-primary'>Irish Guinness</h2>
                        <p className='font-sans text-ash'>IE | 750 ml</p>
                    </span>

                    <span className='flex justify-center items-center '>
                        <p className='w-28 h-[1px] bg-white mr-4'></p>
                         <h4 className='text-2xl text-ash' >$59</h4>
                    </span>

                </div>              
            </main>
           
           </article>

           <Button>View More</Button>
        </section>
    </div>
  )
}
