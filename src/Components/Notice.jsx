import React from 'react'

const Notice = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center px-4 lg:mx-6 mx-2 py-10 text-center bg-[url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600")] relative bg-center bg-cover'>
      <div className='absolute inset-0 bg-black/50'></div>

<div className='z-10'>
        <h2 className='font-bold text-2xl sm:text-3xl cursor-pointer border-b border-black pb-1 hover:border-transparent transition duration-300 text-white'>
          SAUNDRYA BRANDS
        </h2>

        <p className="mt-4 sm:mt-6 max-w-2xl text-md sm:text-base leading-7 sm:leading-8 text-white">
          Explore handpicked brands, ranging from everyday premium styles to festive occasion wear and discover unique finds at 
          <span className="font-semibold text-blue-300"> Saundrya Brands.</span>
        </p>

      </div>
      </div>

      {/* <hr className='mt-2' /> */}
    </>
  )
}

export default Notice