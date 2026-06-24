import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdDeleteOutline } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

const Wishlist = ({addToCart}) => {
    const [wishlist, setwishlist] = useState([])

    useEffect(() => {
        const savedwishlist =
            JSON.parse(localStorage.getItem("wishlist")) || []
        setwishlist(savedwishlist)
    }, [])

    const removeItem = (id) => {
        const updatedwishlist =
            wishlist.filter(item => item.id != id)
        setwishlist(updatedwishlist)
        localStorage.setItem(
            "wishlist",
            JSON.stringify(updatedwishlist)
        )
    }

    const moveToCart = (item) => {

    addToCart({ ...item })

    const updatedWishlist =
        wishlist.filter(
            wishItem => wishItem.id !== item.id
        )

    setwishlist(updatedWishlist)

    localStorage.setItem(
        "wishlist",
        JSON.stringify(updatedWishlist)
    )
}

    // const wishlist = JSON.parse(localStorage.getItem("wishlist")) || []

    return (
        <div className='min-h-screen bg-pink-50 px-4 mx-6'>

            <div className=' py-4 px-4 '>
                <h1 className='text-3xl text-orange-500 font-semibold'>
                    My Wishlist ({wishlist.length})
                    {/* <span>{wishlist.length}</span> */}
                </h1>

                <p className='text-gray-500 mt-2'>
                    Your favorite picks saved for later
                </p>
            </div>

            {
                wishlist.length === 0 ? (

                    <div className='flex flex-col items-center gap-4 mt-20'>
                        <FaHeart className='text-6xl text-pink-300' />

                        <h2 className='text-2xl'>
                            Wishlist is Empty
                        </h2>

                        <Link to="/product">
                            <button className='bg-black text-white px-6 py-3 rounded-xl'>
                                Explore Products
                            </button>
                        </Link>

                    </div>

                ) : (

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>

                        {wishlist.map((item) => (
                            <div key={item.id}
                                className='bg-pink-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group' >

                                <div className='relative overflow-hidden'>

                                    <img
                                        src={item.img}
                                        alt=""
                                        className='w-full h-64 p-5 object-cover group-hover:scale-104 transition duration-700'
                                    />

                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className='absolute top-4 right-4 bg-white p-3 rounded-full shadow'
                                    >
                                        <MdDeleteOutline />
                                    </button>

                                </div>

                                <div className='p-5 flex flex-col gap-2'>

                                    <h3 className='font-medium text-lg min-h-14'>
                                        {item.name}
                                    </h3>

                                    <p className='text-red-400 font-semibold'>
                                        {item.price}
                                    </p>

                                    <button onClick= {
                                        ()=> moveToCart(item)
                                    }
                                        className='bg-black text-white py-2 rounded-xl hover:scale-105 transition'
                                    >
                                        Add To Cart
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>

                )
            }

        </div>
    )
}

export default Wishlist