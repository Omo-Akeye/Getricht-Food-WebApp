import React from 'react'
import Footer1 from '../../components/Footer1'

import { Link } from 'react-scroll'

export default function Footer() {
  return (
    <div className='relative text-white bg-image'>
        <section  className='md:w-[80%] m-auto w-[90%]'>

          <div className='absolute right-[5%] top-[50%] cursor-pointer'>
            <Link  to="hero"  spy={true}  smooth={true}  offset={-120} duration={1200}>
            <img src="/images/Back to top.svg" alt="" />
            </Link>
          
          </div>

           <main className='m-auto md:px-4 md:pt-12 pt-6 md:pb-16 pb-6 bg-[#0C0C0C] border-[#DCCA8733] border-[2px] text-center md:mb-32 mb-16'>
          <article className='md:w-[80%] m-auto'>
          <h2 className='text-2xl'>Newsletter</h2>
            <img src="/images/Frame 17.svg" alt="" className='m-auto' />
            <h1 className='my-3 text-4xl md:my-6 md:text-6xl text-primary'>Subscribe To Our Newsletter</h1>
            <p className='font-sans'> And never miss latest updates</p>
            <div className='flex md:w-[80%] m-auto items-center md:mt-10 mt-5 max-md:flex-col w-[90%]'>
            <input type="email" placeholder='Email Address' className='p-3 w-full my-4 bg-transparent border-[#F5EFDB] border-[1px] font-sans md:mr-9' />
            <button className='bg-primary border-2 px-10 text-[#0C0B08] py-3  hover:bg-[#0C0B08] hover:text-primary  border-primary'>
                       Subscribe</button>
            </div>
          </article>
            
           </main>

          <Footer1/>

        </section>
    </div>
  )
}
