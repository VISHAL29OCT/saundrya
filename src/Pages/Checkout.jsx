import React from 'react'
import { Link } from 'react-router'

const Checkout = ({ cart, removeFromCart }) => {

   const totalPrice = cart.reduce((total, item) => {
  return total + item.price * item.qty;
}, 0);

    const shippingCharge =
        totalPrice < 1999 ? 60 : 0

    const finalTotal =
        totalPrice + shippingCharge

    const addToWishlist = (product) => {
        const oldwishlist = JSON.parse(localStorage.getItem("wishlist")) || []

        const alreadyExist = oldwishlist.find(
            item => item.id === product.id
        )

        if (!alreadyExist) {
            localStorage.setItem(
                "wishlist",
                JSON.stringify([...oldwishlist, product])
            )
            removeFromCart(product.id)
            alert("added to wishlist")
        } else {
            alert("Already in wishList")
        }

    }

    return (
        <>
            <div className='flex flex-col lg:flex-row gap-4 p-4'>

                <div className='flex flex-col p-4 w-full lg:w-2/3 mx-2'>

                    <h3 className='text-xl font-semibold'> MY SHOPPING CART</h3>
                    {
                        cart.length === 0 ? (
                            <div className='flex flex-col items-center gap-4 mt-10'>
                                <h2 className='text-2xl'>
                                    Your Cart is Empty
                                </h2>

                                <Link to="/product">
                                    <button className='bg-black text-white px-6 py-3 rounded-xl'>
                                        Continue Shopping
                                    </button>
                                </Link>
                            </div>
                        ) : (
                            cart.map((item) => (
                                <div key={item.id} className='flex flex-col sm:flex-row gap-3 py-4'>
                                    <img src={item.img} alt="" className=' w-full sm:w-48 h-48 object-cover' />

                                    <div className='flex flex-col p-4 gap-3'>

                                        <div className='flex flex-col sm:flex-row sm:justify-between gap-2'>
                                            <h2 className='leading-6 lg:text-sm'>{item.name}</h2>
                                            <p className='font-semibold'>Rs {item.price}/-</p>
                                        </div>

                                        <p>product code:78333</p>
                                        <span> QTY:{item.qty}</span>

                                        <div className='flex flex-col sm:flex-row  gap-2 lg:gap-4 text-sm'>
                                            <button onClick={() => removeFromCart(item._id)} className='border py-1 rounded-sm bg-gray-100'>REMOVE</button>

                                            <button onClick={() => addToWishlist(item)} className='border  rounded-sm bg-gray-100 py-1 '>MOVE TO WISHLIST</button>
                                        </div>

                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>



                <div className='flex flex-col lg:mx-6 w-full lg:w-1/3 gap-4 mx-2'>

                    <h4 className='text-gray-500'>ORDER SUMMARY</h4>

                    <div className='flex justify-between'>
                        <h3>Subtotal:</h3>
                        <p>₹{totalPrice}</p>
                    </div>

                    <div className='flex justify-between bg-gray-200 p-2'>
                        <h3>Total Payable:</h3>
                        <p>₹{finalTotal}</p>
                    </div>

                    <p className='cursor-pointer'>APPLY COUPON</p>


                    {cart.length > 0 ? (
                        <Link to="/payment">
                            <button className="bg-amber-600 p-2 text-white w-full">
                                PLACE ORDER
                            </button>
                        </Link>
                    ) : (
                        <button
                            disabled
                            className="bg-gray-400 p-2 text-white w-full cursor-not-allowed"
                        >
                            CART IS EMPTY
                        </button>
                    )}

                </div>
            </div>
        </>
    )
}

export default Checkout



