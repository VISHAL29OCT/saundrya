import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center bg-gray-200 text-black px-4 sm:px-6 py-4 gap-3'>

      {/* LEFT TEXT */}
      <div className='text-xs sm:text-sm text-center sm:text-left'>
        © 2026 - Saundrya Powered by VISHAL
      </div>

      {/* SOCIAL ICONS */}
      <div className='flex gap-4 items-center'>

        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-lg sm:text-xl hover:text-pink-500 transition hover:scale-110 cursor-pointer" />
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-lg sm:text-xl hover:text-blue-700 transition hover:scale-110 cursor-pointer" />
        </a>

        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-lg sm:text-xl hover:text-blue-600 transition hover:scale-110 cursor-pointer" />
        </a>

        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-lg sm:text-xl hover:text-red-600 transition hover:scale-110 cursor-pointer" />
        </a>

      </div>
    </div>
  )
}

export default Footer