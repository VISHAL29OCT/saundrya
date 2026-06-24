import React from 'react'
import products from '../data/productsarray'
import { Link } from 'react-router'


const Bestcategory = () => {

    const bestproducts = products.filter(
        (item) =>
            item.id >= 112 &&
            item.id <= 115

    )
    return (
        <>
            <div className=' flex flex-col  pb-6  lg:mx-6 mx-2 bg-rose-50 border-b-2 '>
                <h2 className='font-semibold text-4xl text-center pt-6'>Our Best Sellers </h2>

                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-6 p-4 gap-4'>

                    {
                        bestproducts.map((item) => (

                            <div key={item.id} className='flex flex-col'>

                                <Link to={`/product/${item.id}`}>

                                    <div className='relative group overflow-hidden'>

                                        <img
                                            src={item.img}
                                            className='w-full h-48 lg:h-80 object-cover rounded-sm'
                                        />

                                        <img
                                            src={item.hoverimg}
                                            className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500 w-full h-48 lg:h-80 object-cover rounded-sm'
                                        />

                                    </div>
                                </Link>

                                <p className='mt-2 text-xs font-medium text-center'>
                                    {item.type}
                                </p>

                                <p className='text-sm text-gray-600 mt-2 mb-1 text-center min-h-10'>
                                    {item.name}
                                </p>

                                <p className='text-sm text-rose-400 text-center'>
                                    {item.price}
                                </p>
                            </div>
                        ))
                    }
                </div>

                <button className="relative  self-center  bg-black border border-black text-white px-6 rounded-xl py-2 md:text-xl sm:text-sm overflow-hidden group ">
                    {/* white overlay */}
                    <Link to="/collection/bestseller">
                        <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full"></span>

                        {/* text */}
                        <span className="relative z-10 group-hover:text-black">
                            VIEW ALL
                        </span>
                    </Link>
                </button>


            </div >

        </>
    )
}

export default Bestcategory