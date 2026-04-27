import React from 'react'

const Categories = () => {
    return (
        <>
            <div className=' flex flex-col items-center justify-center mt-7 '>

                <h2 className='font-semibold text-3xl mt-7 mb-5 '>SHOP BY CATEGORIES </h2>

                <div className='flex justify-center gap-6 items-center w-full h-84 '>

                    <div className="h-80 w-52 overflow-hidden rounded-sm group">
                        <img
                            src="image51.webp"
                            className="w-full h-full object-cover 
      transition-transform duration-3000 ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-125"
                        />
                    </div>

                    <div className="h-80 w-52 overflow-hidden rounded-sm group">
                        <img
                            src="image50.webp"
                            className="w-full h-full object-cover 
      transition-transform duration-3000 ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-125"
                        />
                    </div>

                    <div className="h-80 w-52 overflow-hidden rounded-sm group">
                        <img
                            src="image53.webp"
                            className="w-full h-full object-cover 
      transition-transform duration-3000 ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-125"
                        />
                    </div>

                    <div className="h-80 w-52 overflow-hidden rounded-sm group ">
                        <img
                            src="image54.webp"
                            className="w-full h-full object-cover 
      transition-transform duration-3000 ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-125"
                        />
                    </div>

                </div>
            </div>
            <hr className='mt-7' />
        </>
    )
}

export default Categories