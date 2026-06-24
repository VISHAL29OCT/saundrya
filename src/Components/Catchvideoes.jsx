import React from 'react'

const Catchvideoes = () => {
  return (
    <>
      <div className='flex flex-col lg:items-center lg:justify-center pb-6 bg-rose-50 border-b mx-2 lg:mx-6'>

        <h2 className='text-3xl sm:text-2xl font-semibold text-center py-2'>
          Catch the Magic of  Being Saundrya !
        </h2>

        <div className="flex w-[97%] gap-2 overflow-x-auto md:overflow-visible xl:overflow-visible md:justify-between pt-5 no-scrollbar">

          {/* VIDEO CARD */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-32 sm:w-40 md:w-52 h-56 sm:h-72 md:h-96 object-cover rounded-md shrink">
            <source src="/video1.mp4" type="video/mp4" />
          </video>

          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-32 sm:w-40 md:w-52 h-56 sm:h-72 md:h-96 object-cover rounded-md shrink" >
            <source src="/video2.mp4" type="video/mp4" />
          </video>

          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-32 sm:w-40 md:w-52 h-56 sm:h-72 md:h-96 object-cover rounded-md shrink" >
            <source src="/video3.mp4" type="video/mp4" />
          </video>

          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-32 sm:w-40 md:w-52 h-56 sm:h-72 md:h-96 object-cover rounded-md shrink" >
            <source src="/video4.mp4" type="video/mp4" />
          </video>

        </div>
      </div>

    </>
  )
}

export default Catchvideoes