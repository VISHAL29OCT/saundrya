import React, { useEffect } from 'react'
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router';
import Slider from '../Pages/Slider';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [open])
  return (
    <>
      <nav className="flex justify-between items-center px-3 sm:px-6 py-4 sm:py-6 border-b sticky top-0 bg-white z-30">
        <div className='text-xl sm:text-2xl cursor-pointer' onClick={() => setOpen(!open)}>☰</div>
        <Slider open={open} setOpen={setOpen} />
        <div className='font-semibold tracking-widest cursor-pointer text-lg sm:text-2xl'>AMMA</div>
        <div className='flex items-centergap-3 sm:gap-5 text-xl ' >
          <FaSearch className='cursor-pointer hover:text-gray-500 transition text-lg sm:text-xl' />
          <Link to="/login">
            <FaUser className='cursor-pointer hover:text-gray-500 transition text-lg sm:text-xl' />
          </Link>
          <FaShoppingBag className='cursor-pointer hover:text-gray-500 transition text-lg sm:text-xl' />

        </div>
      </nav>

    </>
  )
}

export default Navbar