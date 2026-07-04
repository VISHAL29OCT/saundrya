import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const Order = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(
            `${import.meta.env.VITE_API_URL}/orders/my`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "token"
                    )}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setOrders(data);
            });
    }, []);

    return (
        <div className='bg-pink-50 min-h-screen mx-2 p-4'>

            <h2 className='text-3xl font-semibold mb-8'>
                My Orders
            </h2>

            <div className='flex flex-col gap-6 '>

                {
                    orders.length === 0 ? (
                        <div className='text-center mt-20'>
                            <h2 className='text-2xl'>
                                No Orders Yet
                            </h2>

                            <p className='text-gray-500 mt-2'>
                                Start shopping to see your orders here.
                            </p>
                        </div>
                    ) : (

                        
                            orders.map((order) =>
                                order.products.map((item) => (
                                    <div
                                        key={`${order._id}-${item.productId}`}
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
                                                        Order #{order._id.slice(-6).toUpperCase()}
                                                    </p>

                                                    <p className='text-gray-500'>
                                                        Ordered on {new Date(
                                                            order.createdAt
                                                        ).toLocaleDateString("en-IN")}
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
                                                    {order.status}
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
                                )
                                ))
                        
                    )
                }


            </div>

        </div>
    )
}

export default Order