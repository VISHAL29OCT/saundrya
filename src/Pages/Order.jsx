import React, { useState, useEffect } from 'react'

const Order = () => {
    const [orders, setOrders] = useState([])

    useEffect (() =>{
        const saveOrders = JSON.parse(localStorage.getItem("orders")) || []
        setOrders(saveOrders)
    } ,[])
    return (
        <div className='bg-pink-50 min-h-screen mx-2 p-4'>

            <h2 className='text-3xl font-semibold mb-8'>
                My Orders
            </h2>

            <div className='flex flex-col gap-6 '>

                {orders.map((item) => (
                    <div
                        key={item.id}
                        className='bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition duration-300'
                    >
                        <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-4 '>

                            {/* Left */}
                            <div className='flex flex-col sm:flex-row gap-5'>

                                <img
                                    src={item.image}
                                    alt=""
                                    className='w-28 h-28 object-cover rounded-xl'
                                />

                                <div className='flex flex-col gap-2'>
                                    <h3 className='font-semibold text-lg'>
                                        {item.name}
                                    </h3>

                                    <p className='text-gray-500'>
                                        Order #{item.orderId}
                                    </p>

                                    <p className='text-gray-500'>
                                        Ordered on {item.date}
                                    </p>

                                    <p>
                                        Qty : {item.qty}
                                    </p>

                                    <p className='font-bold'>
                                        ₹{item.price}
                                    </p>
                                </div>

                            </div>

                            {/* Right */}
                            <div className='flex flex-col items-start lg:items-end gap-4'>

                                <span className='bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm'>
                                    Delivered
                                </span>

                                <div className='flex flex-wrap gap-3'>
                                    <button className='border px-4 py-2 rounded-lg'>
                                        Track
                                    </button>

                                    <button className='bg-blue-400 text-white px-4 py-2 rounded-lg'>
                                        Buy Again
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Order