import React from 'react'
// import Button from './Button'
import Footer1 from './Footer1'

export default function Footer() {
  return (
    <div className='bg-image text-white m'>
        <section  className='w-[80%] m-auto'>
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
           {/* <Button className='h-2 w-52'>Subscribe</Button> */}
            </div>
          </article>
            
           </main>

          <Footer1/>

        </section>
    </div>
  )
}
