import React from 'react'
import { Link } from 'react-router'

const Ocassion = () => {
    return (
        <>
            <div className=' flex flex-col items-center justify-center bg-rose-50 pt-4 pb-7 lg:mx-6 mx-2 border-b  '>

                <h2 className='font-semibold text-3xl lg:text-2xl mb-5  '>SHOP BY OCASSIONS </h2>

                <div className='flex overflow-x-auto gap-4 px-4 w-full no-scrollbar lg:items-center lg:justify-center'>

                    <div className="h-64 w-40 overflow-hidden rounded-sm group shrink-0 ">
                        <Link to="/collection/festival">
                            <img
                                src="image55.webp"
                                className="w-full h-full object-cover 
      transition-transform duration-3000 ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-125"
                            />
                        </Link>

                    </div>

                    <div className="h-64 w-40 overflow-hidden rounded-sm group shrink-0">
                        <Link to="/collection/gifting">
                            <img
                                src="image56.webp"
                                className="w-full h-full object-cover 
      transition-transform duration-3000 ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-125"
                            />
                        </Link>
                    </div>

                    <div className="h-64 w-40 overflow-hidden rounded-sm group shrink-0">
                        <Link to="/collection/party">
                            <img
                                src="image57.webp"
                                className="w-full h-full object-cover 
      transition-transform duration-3000 ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-125"
                            />
                        </Link>
                    </div>

                    <div className="h-64 w-40 overflow-hidden rounded-sm group shrink-0 ">
                        <Link to="/collection/traditional">
                            <img
                                src="image58.webp"
                                className="w-full h-full object-cover 
      transition-transform duration-3000 ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-125"
                            />
                        </Link>
                    </div>

                    <div className="h-64 w-40 overflow-hidden rounded-sm group shrink-0 ">
                        <Link to="/collection/vacation">
                            <img
                                src="image60.webp"
                                className="w-full h-full object-cover 
      transition-transform duration-3000 ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-125"
                            />
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Ocassion