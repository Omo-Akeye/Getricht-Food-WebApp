import React from 'react'

export default function Footer1() {
  return (
    <div className=''>
         <footer className='grid pb-10 text-center text-ash md:grid-cols-3 max-md:gap-8'>
            <div>
                <p className='mb-4 text-3xl'>Contact Us</p>
               <span className='font-sans'>
               <p>9 W 53rd St, New York, NY 10019, USA</p>
                <p>+1 212-344-1230</p>
                <p>+1 212-555-1230</p>
               </span>
            </div>

            <div className=''>
                <h1 className='text-6xl text-primary swiper-3d'>GERICHT</h1>
                <p className='my-4 font-sans font-bold text-white'>"The best way to find yourself is to lose yourself in the service of others.”</p>
                <img src="/image/Frame 17.svg" alt="" className='m-auto' />
                <div className='mt-2 text-white'>
                <i className="text-2xl fa-brands fa-facebook-f"></i>
                <i className="px-4 text-2xl fa-brands fa-twitter"></i>
                <i className="text-2xl fa-brands fa-instagram"></i>
                </div>
            </div>

            <div>
                <p className='mb-2 text-3xl'>Working Hour</p>
             <span className='font-sans'>
              <div className='mb-2'>
              <p>Monday-Fridays</p>
                <p>08:00am - 12:00am</p>
              </div>
                <p>Saturday-Sunday:</p>
                <p>07:00am - 11:00pm</p>
             </span>
            </div>
           </footer>
    </div>
  )
}
