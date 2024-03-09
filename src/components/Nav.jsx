import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Nav({isModalOpen, setIsModalOpen}) {
  return (
  <div className='text-ash flex justify-between font-sans w-[90%] lg:w-[90%] m-auto mt-5 mb-12'>
       <div>
       <NavLink to='/'>
           <img src="/images/Gerícht.svg" alt=""  className='w-28 lg:w-48' />
           </NavLink>
        </div>
    <ul className='justify-between hidden min-[864px]:flex'>
        <li>
           
            <NavLink to='/'>Home</NavLink>
        </li>
        <li className='px-8'><a href="#">Pages</a></li>
        <li>
        <NavLink to='/meals'>Meals</NavLink>
        </li>
        <li className='px-8'>
        <NavLink to='/savedMeals'>Favourite</NavLink>
            </li>
        <li><a href="#">Contact Us</a></li>
    </ul>
   <ul className='justify-between hidden min-[864px]:flex'>
    <li><a href="#">Log In / Registration</a></li>
    <li className='px-8 hidden lg:block' >
        <span className='h-3 border-solid border-l-[2px] border-l-ash'></span>
    </li>
    <li className='max-lg:ml-8'><a href="">Book Table</a></li>
    
   </ul>

   <div className='min-[864px]:hidden block '>
   <i className="text-4xl cursor-pointer fa-solid fa-bars"  onClick={(e)=>setIsModalOpen(!isModalOpen)}
   ></i>
   </div>
  </div>
  )
}
