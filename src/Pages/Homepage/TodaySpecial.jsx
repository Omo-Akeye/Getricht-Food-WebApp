import React from 'react'
import Button from '../../components/Button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


export default function TodaySpecial() {
  return (
    <div className='xl:w-[80%] m-auto text-center py-12 w-[90%]'>
        <section className='text-white'>
            <div className='mb-10'>
            <h2 className='text-3xl'>Menu that Fits You Palatte</h2>
            <img src="/images/Frame 17.svg" alt="" className='m-auto my-2'/>
            <h1 className='text-4xl text-primary md:text-6xl' >Today's Special</h1>
           
            </div>

           <article className='flex justify-between max-md:flex-col items-center'>
           <main>
           <h1 className='mb-8 text-4xl md:mb-12'>Wine & Beer</h1>
                
                  <div className='flex justify-between items-center lg:mb-10 mb-8 md:mb-5'>
                    <span className='text-start'>
                        <h2 className='text-2xl text-primary mb-2'>Chapel Hill Shiraz</h2>
                        <p className='font-sans text-ash'>AU | Bottle</p>
                    </span>

                    <span className='flex justify-center items-center '>
                        <p className=' w-28 h-[1px] bg-white mr-4'></p>
                         <h4 className='text-2xl text-ash' >$59</h4>
                    </span>

                </div>

                <div className='flex items-center justify-between lg:mb-10 mb-8 md:mb-5'>
                    <span className='text-start'>
                        <h2 className='mb-2 text-2xl text-primary'>Catena Malbee</h2>
                        <p className='font-sans text-ash'>AR | Bottle</p>
                    </span>

                    <span className='flex items-center justify-center '>
                        <p className='w-28 h-[1px] bg-white mr-4'></p>
                         <h4 className='text-2xl text-ash' >$59</h4>
                    </span>

                </div>

                <div className='flex items-center justify-between lg:mb-10 mb-8 md:mb-5'>
                    <span className='text-start'>
                        <h2 className='text-2xl text-primary'>Rhino Pale Ale</h2>
                        <p className='font-sans text-ash'>CA | 750 ml</p>
                    </span>

                    <span className='flex items-center justify-center '>
                        <p className='w-28 h-[1px] bg-white mr-4'></p>
                         <h4 className='text-2xl text-ash' >$59</h4>
                    </span>

                </div>

                <div className='flex items-center justify-between lg:mb-10 mb-8 md:mb-5'>
                    <span className='text-start'>
                        <h2 className='mb-2 text-2xl text-primary'>Rhino Pale Ale</h2>
                        <p className='font-sans text-ash '>CA | 750 ml</p>
                    </span>

                    <span className='flex items-center justify-center '>
                        <p className='w-28 h-[1px] bg-white mr-4'></p>
                         <h4 className='text-2xl text-ash' >$59</h4>
                    </span>

                </div>
                <div className='flex items-center justify-between '>
                    <span className='text-start'>
                        <h2 className='mb-2 text-2xl text-primary'>Irish Guinness</h2>
                        <p className='font-sans text-ash'>IE | 750 ml</p>
                    </span>

                    <span className='flex items-center justify-center '>
                        <p className='w-28 h-[1px] bg-white mr-4'></p>
                         <h4 className='text-2xl text-ash' >$59</h4>
                    </span>

                </div>


              
            </main>

            <div className='xl:w-[40%] md:w-[50%] m-auto max-md:mb-8' > 
            <LazyLoadImage
    alt={'hero'}
    effect="blur"
    src={'/images/today-removebg-preview.webp'} />
               
            </div>

            <main className=''>
            <h1 className='mb-8 text-5xl md:mb-12'>Cocktails</h1>
                <div className='flex items-center justify-between lg:mb-10 mb-8 md:mb-5'>
                    <span className='text-start'>
                        <h2 className='text-2xl text-primary'>Aperol Spritz</h2>
                        <p className='font-sans text-ash'>Aperol | Bottle </p>
                    </span>

                    <span className='flex items-center justify-center '>
                        <p className='w-28 h-[1px] bg-white mr-4'></p>
                         <h4 className='text-2xl text-ash' >$59</h4>
                    </span>

                </div>

                <div className='flex items-center justify-between lg:mb-10 mb-8 md:mb-5'>
                    <span className='text-start'>
                        <h2 className='text-2xl text-primary'>Catena Malbee</h2>
                        <p className='font-sans text-ash'>AR | Bottle</p>
                    </span>

                    <span className='flex items-center justify-center '>
                        <p className='w-28 h-[1px] bg-white mr-4'></p>
                         <h4 className='text-2xl text-ash' >$59</h4>
                    </span>

                </div>

                <div className='flex items-center justify-between lg:mb-10 mb-8 md:mb-5'>
                    <span className='text-start'>
                        <h2 className='text-2xl text-primary'>Rhino Pale Ale</h2>
                        <p className='font-sans text-ash'>CA | 750 ml</p>
                    </span>

                    <span className='flex items-center justify-center '>
                        <p className='w-28 h-[1px] bg-white mr-4'></p>
                         <h4 className='text-2xl text-ash' >$59</h4>
                    </span>

                </div>

                <div className='flex items-center justify-between lg:mb-10 mb-8 md:mb-5'>
                    <span className='text-start'>
                        <h2 className='text-2xl text-primary'>Rhino Pale Ale</h2>
                        <p className='font-sans text-ash'>CA | 750 ml</p>
                    </span>

                    <span className='flex items-center justify-center '>
                        <p className='w-28 h-[1px] bg-white mr-4'></p>
                         <h4 className='text-2xl text-ash' >$59</h4>
                    </span>

                </div>
                <div className='flex items-center justify-between '>
                    <span className='text-start'>
                        <h2 className='text-2xl text-primary'>Irish Guinness</h2>
                        <p className='font-sans text-ash'>IE | 750 ml</p>
                    </span>

                    <span className='flex items-center justify-center '>
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
