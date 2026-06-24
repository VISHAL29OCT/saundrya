import React from 'react'
import { Link } from 'react-router'

const Categories = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center pb-6 bg-rose-50 lg:mx-6 mx-2 '>

        <h2 className='font-semibold text-3xl text-center sm:text-3xl mt-4 mb-7'>
          SHOP BY CATEGORIES
        </h2>

        <div className='flex flex-wrap justify-center  gap-2  w-full max-w-6xl'>

          {/* CARD */}

          <div className='w-[45%] sm:w-[25%] md:w-[23%] h-64 sm:h-72 md:h-80 overflow-hidden group'>
            <Link to="/collection/necklace">
              <img
                src="image51.webp"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
            </Link>
          </div>

          <div className='w-[45%] sm:w-[25%] md:w-[23%] h-64 sm:h-72 md:h-80 overflow-hidden group'>
            <Link to="/collection/earring">
              <img
                src="image50.webp"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
            </Link>
          </div>

          <div className='w-[45%] sm:w-[25%] md:w-[23%] h-64 sm:h-72 md:h-80 overflow-hidden group'>
            <Link to="/collection/handaccessories">
              <img
                src="image53.webp"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
            </Link>
          </div>

          <div className='w-[45%] sm:w-[25%] md:w-[23%] h-64 sm:h-72 md:h-80 overflow-hidden group'>
            <Link to="/collection/hairaccessories">
              <img
                src="image54.webp"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
            </Link>
          </div>

        </div>
      </div>

      <hr />
    </>
  )
}

export default Categories