import React from 'react'

export default function Footer1() {
  return (
    <div className=''>
         <footer className='text-center text-ash grid grid-cols-3 pb-10'>
            <div>
                <p className='text-3xl mb-4'>Contact Us</p>
               <span className='font-sans'>
               <p>9 W 53rd St, New York, NY 10019, USA</p>
                <p>+1 212-344-1230</p>
                <p>+1 212-555-1230</p>
               </span>
            </div>

            <div className=''>
                <h1 className='text-primary text-6xl swiper-3d'>GERICHT</h1>
                <p className='font-sans text-white font-bold my-4'>"The best way to find yourself is to lose yourself in the service of others.”</p>
                <img src="/image/Frame 17.svg" alt="" className='m-auto' />
                <div className='text-white mt-2'>
                <i className="fa-brands fa-facebook-f text-2xl"></i>
                <i className="fa-brands fa-twitter text-2xl px-4"></i>
                <i className="fa-brands fa-instagram text-2xl"></i>
                </div>
            </div>

            <div>
                <p className='text-3xl mb-2'>Working Hour</p>
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
