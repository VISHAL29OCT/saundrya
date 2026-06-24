import React from 'react'

const Instagram = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center bg-rose-50 pb-6 lg:mx-6 mx-2'>


                <h2 className='font-semibold lg:text-2xl text-3xl sm:text-3xl mb-5 mt-5 text-center px-4'>
                    FOLLOW US ON INSTAGRAM
                </h2>

                <div className='flex overflow-x-auto gap-4 px-4 w-full no-scrollbar lg:items-center lg:justify-center'>

                    <div className="h-64 w-40 overflow-hidden rounded-sm group shrink-0 ">
                        <img
                            src="https://everstylish.com/media/wysiwyg/occasion-wear/12.jpg"
                            className="w-full h-full object-cover 
      transition-transform duration-3000 ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-125"
                        />
                    </div>

                    <div className="h-64 w-40 overflow-hidden rounded-sm group shrink-0">
                        <img
                            src="https://everstylish.com/media/wysiwyg/occasion-wear/3.jpg"
                            className="w-full h-full object-cover 
      transition-transform duration-3000 ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-125"
                        />
                    </div>

                    <div className="h-64 w-40 overflow-hidden rounded-sm group shrink-0">
                        <img
                            src="https://everstylish.com/media/wysiwyg/occasion-wear/5.jpg"
                            className="w-full h-full object-cover 
      transition-transform duration-3000 ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-125"
                        />
                    </div>

                    <div className="h-64 w-40 overflow-hidden rounded-sm group shrink-0 ">
                        <img
                            src="https://everstylish.com/media/wysiwyg/occasion-wear/shop-the-look-2.jpg"
                            className="w-full h-full object-cover 
      transition-transform duration-3000 ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-125"
                        />
                    </div>

                    <div className="h-64 w-40 overflow-hidden rounded-sm group shrink-0 ">
                        <img
                            src="https://everstylish.com/media/wysiwyg/occasion-wear/1.jpg"
                            className="w-full h-full object-cover 
      transition-transform duration-3000 ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-125"
                        />
                    </div>

                </div>

            </div>


        </>
    )
}

export default Instagram