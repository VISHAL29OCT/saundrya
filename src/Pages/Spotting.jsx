import React from 'react'
import { Link } from 'react-router'
import products from '../data/productsarray'



const Spotting = () => {

    return (

        <>
            <div className=" flex flex-col justiify-center items-center gap-4 text-center   px-4 py-12 border">
                <h2 className="text-2xl font-semibold">
                    CELEBRITIES & INFLUENCERS
                </h2>
                <p>
                    Saundrya isn't just fashion jewellery; it's a statement piece for those who appreciate handcrafted luxury. Our exquisite designs have captured the hearts of famous <span className="font-bold">celebrities and influencers  </span>who recognize the quality and artistry behind each creation.
                </p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 mx-6 my-4 '>
                {
                    products.slice(250, 270).map((item) => (
                        <div key={item.id} className='cursor-pointer group overflow-hidden'>
                            <Link to={`/product/${item.id}`}>
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className='w-full h-full object-cover transition-transform duration-1500 group-hover:scale-120'
                                />
                            </Link>

                            <div className='mt-2 text-center'>
                                <h3 className='font-medium'>{item.name}</h3>
                                <h4 className='text-sm text-gray-600'>{item.productuse}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Spotting