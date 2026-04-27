import React from 'react'
import { FaSearch, FaUser, FaShoppingBag} from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className="flex justify-between items-center px-6 py-6 border-b">
        <div className='text-2xl cursor-pointer' onClick={() => setOpen(!open)}>☰</div>
        <div className='text-2xl font-semibold tracking-widest cursor-pointer'>AMMA</div>
        <div className='flex items-center gap-5 text-xl ' >
          <FaSearch  className='cursor-pointer hover:text-gray-500 transition'/>
          <Link to="/login">
          <FaUser   className='cursor-pointer hover:text-gray-500 transition'/>
          </Link>
          <FaShoppingBag  className='cursor-pointer hover:text-gray-500 transition'/>
  
        </div>
      </nav>

    </>
  )
}

export default Navbar