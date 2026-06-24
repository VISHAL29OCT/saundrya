import React from 'react'
import { Link } from 'react-router'

const Success = () => {

    return (

        <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>

            <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center'>

                <div className='text-green-500 text-6xl mb-4'>
                    ✔
                </div>

                <h1 className='text-2xl font-semibold mb-2'>
                    Order Placed Successfully
                </h1>

                <p className='text-gray-500 mb-4'>
                    Thank you for shopping with us.
                </p>

                <div className='bg-gray-100 rounded-md p-4 mb-6'>

                    <p className='text-sm text-gray-500'>
                        Order ID
                    </p>

                    <h2 className='font-medium'>
                        #ORD45872
                    </h2>

                </div>

                <p className='text-sm text-green-600 mb-6'>
                    Expected delivery within 3-5 days
                </p>

                <Link to="/">

                    <button className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md cursor-pointer'>
                        CONTINUE SHOPPING
                    </button>

                </Link>

            </div>

        </div>
    )
}

export default Success