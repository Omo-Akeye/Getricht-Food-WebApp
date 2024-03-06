import React from 'react'
import Footer1 from './Footer1'
import { Link } from 'react-scroll'

export default function Footer() {
  return (
    <div className='bg-image text-white relative'>
        <section  className='w-[80%] m-auto'>

          <div className='absolute right-[5%] top-[50%] cursor-pointer'>
            <Link  to="hero"  spy={true}  smooth={true}  offset={-120} duration={1200}>
            <img src="/images/Back to top.svg" alt="" />
            </Link>
          
          </div>

           <main className=' m-auto px-4 pt-12 pb-16 bg-[#0C0C0C] border-[#DCCA8733] border-[2px] text-center mb-32'>
          <article className='w-[80%] m-auto'>
          <h2 className='text-2xl'>Newsletter</h2>
            <img src="/images/Frame 17.svg" alt="" className='m-auto' />
            <h1 className='text-primary text-6xl  my-6'>Subscribe To Our Newsletter</h1>
            <p className='font-sans'> And never miss latest updates</p>
            <div className='flex w-[80%] m-auto items-center mt-10'>
            <input type="email" placeholder='Email Address' className='p-3 w-[95%] my-4 bg-transparent border-[#F5EFDB] border-[1px] font-sans mr-9' />
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
