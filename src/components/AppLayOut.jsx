import React, { useState } from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Modal from './Modal';

export default function AppLayOut() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
         <Nav isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
         {isModalOpen && <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
         <Outlet/>
        
    </div>
  )
}
