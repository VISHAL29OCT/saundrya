import React from 'react'

const Bestcategory = () => {
    return (
        <>
            <div className=' flex flex-col items-center justify-center mb-12'>
                <h2 className='font-semibold text-3xl mt-7 mb-5 '>Our Best Sellers </h2>

                <div className='flex flex-wrap sm:gap-6 gap-4  justify-center items-center'>

                    <div className='flex flex-col items-center w-[45%] sm:w-40 md:w-44 lg:w-48 '>
                        <div className='relative group overflow-hidden'>
                            <img src="image11.jpg" className="w-full h-52 object-cover rounded-b-sm " />
                            <img src="image8.jpg" className=" absolute  top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500 w-40 h-52 object-cover rounded-b-sm cursor-pointer" />
                        </div>
                        <p className='mt-2 text-xs font-medium text-center cursor-pointer '>BASRAA WEDDING</p>
                        <p className='text-sm text-gray-600 mt-2 mb-1 text-center cursor-pointer'>Heeraman Chandbali</p>
                        <p className='text-sm text-gray-500'>₹ 4,750</p>
                    </div>

        <div className=' flex flex-col items-center  w-[45%] sm:w-40 md:w-44 lg:w-48'>
                        <div className='relative group overflow-hidden'>
                            <img src="image13.jpg" className="w-full h-52 object-cover rounded-b-sm " />
                            <img src="image6.jpg" className=" absolute  top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500 w-40 h-52 object-cover rounded-b-sm cursor-pointer" />
                        </div>
                        <p className='mt-2 text-xs font-medium text-center'>BASARA</p>
                        <p className='text-sm text-gray-600 mt-2 mb-1 text-center'>CHAAND SAAJ EAR CRAWLER (SET OF 2)</p>
                        <p className='text-sm  text-gray-500'>₹ 5,250</p>
                    </div>


                    <div className=' flex flex-col items-center  w-[45%] sm:w-40 md:w-44 lg:w-48'>
                        <div className='relative group overflow-hidden'>
                            <img src="image10.jpg" className="w-full h-52 object-cover rounded-b-sm " />
                            <img src="image7.jpg" className=" absolute  top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500 w-40 h-52 object-cover rounded-b-sm cursor-pointer" />
                        </div>
                        <p className='mt-2 text-xs font-medium text-center'>SPRING SUMMER</p>
                        <p className='text-sm text-gray-600 mt-2 mb-1 text-center'>Pyaar Beshumar Pendant</p>
                        <p className='text-sm  text-gray-500'>₹ 3,250</p>
                    </div>

                    <div className='flex flex-col items-center w-[45%] sm:w-40 md:w-44 lg:w-48'>
                        <div className='relative group overflow-hidden '>
                            <img src="image9.jpg" className="w-40 h-52 object-cover rounded-b-sm" />
                            <img src="image12.jpg" className=" absolute  top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500 w-40 h-52 object-cover rounded-b-sm cursor-pointer" />
                        </div>
                        <p className='mt-2 text-xs font-medium text-center'>DARPANA</p>
                        <p className='text-sm text-gray-600 mt-2 mb-1 text-center'>Not Your Rose Earcrawler </p>
                        <p className='text-sm  text-gray-500'>₹ 2,850</p>
                    </div>

                </div>

                <button className="relative mt-8 bg-black border border-black text-white px-8 py-2 overflow-hidden group ">
                    {/* white overlay */}
                    <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full"></span>

                    {/* text */}
                    <span className="relative z-10 group-hover:text-black">
                        VIEW ALL
                    </span>
                </button>
            </div>
        </>
    )
}

export default Bestcategory