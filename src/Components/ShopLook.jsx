import React, { useState } from 'react'
import products from '../data/productsarray'
import { Link } from 'react-router'

const ShopLook = () => {
  const [index, setIndex] = useState(0)
  const [start, setStart] = useState(0)

  const slides = products.filter(
    (item) => item.shopLook
  )
  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <>
      <div className="text-center px-4  bg-rose-50 pt-6 lg:mx-6 mx-2">
        <h2 className="font-semibold text-3xl lg:text-2xl md:text-3xl ">
          Shop the look
        </h2>
        <p className="mt-2 sm:mt-4 text-md sm:text-base text-gray-600">
          Elevate your style game with the hottest trend of the season
        </p>
      </div>


      <div className="flex flex-col lg:mx-6 mx-2 md:flex-row justify-center items-center gap-6 md:gap-10 pt-6 md:pt-8 pb-7  px-4 bg-rose-50">

        {/* LEFT ARROW (DESKTOP ONLY) */}
        <div
          onClick={prev}
          className="hidden md:flex bg-black text-white rounded-full items-center justify-center text-2xl w-10 h-10 cursor-pointer"
        >
          ←
        </div>

        <div
          className="w-full md:w-125 h-[55vh] sm:h-[60vh] md:h-125 overflow-hidden"
          onTouchStart={(e) => setStart(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            let end = e.changedTouches[0].clientX
            if (start - end > 50) next()
            if (end - start > 50) prev()
          }}
        >
          <Link to={`/product/${slides[index].id}`}>

            <img
              src={slides[index].img}
            />

          </Link>


        </div>

        <div className="md:hidden mt-4 text-center">
          <Link to={`/product/${slides[index].id}`}>
            <button className="bg-black text-white px-6 py-2 text-sm">
              VIEW PRODUCT
            </button>
          </Link>
        </div>

        <div className="hidden md:flex flex-col items-center">

          <div className="relative group overflow-hidden">
            <img
              src={slides[index].smallimg}
              className="w-60 h-72 object-cover"
            />
            <img
              src={slides[index].hoverimg}
              className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500 w-60 h-72 object-cover"
            />
          </div>


          <div className="text-center mt-4">
            <h3 className="font-semibold">{slides[index].name}</h3>
            <p className="text-gray-600 text-sm">{slides[index].type}</p>
            <p className="mt-2">{slides[index].price}</p>
          </div>

          <button className="relative bg-black border border-black text-white px-8 py-2 mt-6 overflow-hidden group">
            <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
            <Link to={`/product/${slides[index].id}`}>
              <span className="relative z-10 group-hover:text-black">
                VIEW PRODUCT
              </span>
            </Link>
          </button>
        </div>


        <div
          onClick={next}
          className="hidden md:flex bg-black text-white rounded-full items-center justify-center text-2xl w-10 h-10 cursor-pointer"
        >
          →
        </div>

      </div >
    </>
  )
}

export default ShopLook