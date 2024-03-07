import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Modal({isModalOpen,setIsModalOpen}) {
  return (
    <div className={`fixed top-0 bottom-0 z-30 w-full text-white transition-all duration-500 ease-in ${isModalOpen ? 'right-0' : '-right-full'}`}>
        <div className="w-[80%] m-auto relative">
        <i className="absolute right-0 mt-10 text-2xl cursor-pointer fa-solid fa-xmark" onClick={(e)=>setIsModalOpen(!isModalOpen)}></i>
        </div>
       <nav className='flex items-center justify-center w-full h-full min-h-screen bg-black'>
        
       <ul className='font-sans text-2xl text-center'>
        <li onClick={(e)=>setIsModalOpen(!isModalOpen)}>
           
            <NavLink to='/'>Home</NavLink>
        </li>
        <li className='py-2'><a href="#">Pages</a></li>
        <li>
        <NavLink to='/meals'>Meals</NavLink>
        </li>
        <li className='py-2'>
        <NavLink to='/savedMeals'>Favourite</NavLink>
            </li>
        <li><a href="#">Contact Us</a></li>
        
        <li>
        <ul className='text-center'>
    <li className='py-2'><a href="#">Log In / Registration</a></li>
    <li><a href="">Book Table</a></li>
    
   </ul>
        </li>
    </ul>
  
       </nav>
    </div>
  )
}