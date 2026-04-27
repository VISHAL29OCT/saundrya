import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex justify-between bg-gray-400 text-black mt-4 items-center px-6 py-2'>

      <div className='font-light'>
        © 2026 - Amama Powered by VISHAL
      </div>

      <div className='flex gap-4 items-center'>

        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-xl hover:text-pink-500 transition hover:scale-110 cursor-pointer" />
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl hover:text-blue-700 transition hover:scale-110 cursor-pointer" />
        </a>

        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-xl hover:text-blue-600 transition hover:scale-110 cursor-pointer" />
        </a>

        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-xl hover:text-red-600 transition hover:scale-110 cursor-pointer" />
        </a>

      </div>
    </div>
  )
}

export default Footer