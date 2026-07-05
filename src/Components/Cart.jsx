import React, { useEffect } from 'react'
import { Link } from 'react-router'
import { MdDelete } from "react-icons/md";

const Cart = ({ open, setOpen, cart, increaseQty, decreaseQty, removeFromCart }) => {

    const totalPrice = cart.reduce((total, item) => {

        const price =
            Number(item.price) || 0;

        return total + (price * item.qty)

    }, 0)

    const shippingCharge =
        totalPrice < 1999 ? 60 : .00

    const finalTotal = totalPrice + shippingCharge

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    return (
    <>

            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            <div

                className={`fixed top-0 right-0 w-full sm:w-[420px] h-dvh bg-white flex flex-col z-50 transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b bg-white">
                    <h2 className="text-xl font-semibold">
                        MINI BAG ({cart.length})
                    </h2>

                    <button
                        onClick={() => setOpen(false)}
                        className="text-3xl"
                    >
                        ×
                    </button>
                </div>

                {/* Products */}
                <div className="flex-1 overflow-y-auto">

                    {cart.length === 0 ? (

                        <div className="flex flex-col items-center justify-center h-full gap-4">
                            <p>Your Bag is Empty</p>

                            <Link to="/product">
                                <button
                                    onClick={() => setOpen(false)}
                                    className="bg-red-300 text-white px-6 py-3 rounded"
                                >
                                    SHOP NOW
                                </button>
                            </Link>

                        </div>

                    ) : (

                        cart.map((item) => (

                            <div
                                key={item._id}
                                className="p-4 border-b"
                            >

                                <div className="flex gap-4">

                                    {/* Image */}

                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-24 h-24 rounded-lg object-cover border"
                                    />

                                    {/* Right */}

                                    <div className="flex-1">

                                        <h2 className="text-sm font-medium leading-5 line-clamp-2">
                                            {item.name}
                                        </h2>

                                        <p className="text-lg font-semibold mt-2">
                                            ₹{Number(item.price).toLocaleString("en-IN")}
                                        </p>

                                        {/* Qty */}

                                        <div className="flex justify-between items-center mt-3">

                                            <div className="flex items-center border rounded">

                                                <button
                                                    onClick={() => decreaseQty(item._id)}
                                                    className="w-8 h-8 hover:bg-gray-100"
                                                >
                                                    -
                                                </button>

                                                <span className="w-8 text-center">
                                                    {item.qty}
                                                </span>

                                                <button
                                                    onClick={() => increaseQty(item._id)}
                                                    className="w-8 h-8 hover:bg-gray-100"
                                                >
                                                    +
                                                </button>

                                            </div>

                                            <span className="font-semibold">
                                                ₹{Number(item.price * item.qty).toLocaleString("en-IN")}
                                            </span>

                                        </div>

                                        {/* Remove */}

                                        <div className="flex mt-4 pt-3 border-t">

                                            <button
                                                onClick={() => removeFromCart(item._id)}
                                                className="flex-1 text-center text-sm font-medium hover:text-red-500"
                                            >
                                                REMOVE
                                            </button>

                                            <button 
                                                className="flex-1 border-l text-center text-sm font-medium hover:text-pink-500"
                                            >
                                                WISHLIST
                                            </button>

                                        </div>

                                    </div>

                                </div>
                                </div>
                                ))
                               )}
                                
                            </div>
                    

                {/* Price Details */ }

                {
                                cart.length > 0 && (

                                    <div className="border-t bg-white">

                                        <div className="px-5 py-4">

                                            <h3 className="font-semibold text-gray-700 mb-3">
                                                PRICE DETAILS
                                            </h3>

                                            <div className="space-y-2 text-sm">

                                                <div className="flex justify-between">
                                                    <span>MRP</span>
                                                    <span>
                                                        ₹{totalPrice.toLocaleString("en-IN")}
                                                    </span>
                                                </div>

                                                <div className="flex justify-between">
                                                    <span>Shipping</span>

                                                    <span className="text-green-600 font-medium">

                                                        {shippingCharge === 0
                                                            ? "FREE"
                                                            : `₹${shippingCharge}`}

                                                    </span>

                                                </div>

                                                <div className="border-t my-3"></div>

                                                <div className="flex justify-between text-lg font-semibold">

                                                    <span>Total Amount</span>

                                                    <span>
                                                        ₹{finalTotal.toLocaleString("en-IN")}
                                                    </span>

                                                </div>

                                            </div>

                                        </div>

                                        {/* Checkout */}

                                        <div className="border-t p-4 bg-white">

                                            <div className="flex items-center justify-between">

                                                <div>

                                                    <p className="text-xs text-gray-500">
                                                        Total Payment
                                                    </p>

                                                    <h2 className="text-xl font-bold">
                                                        ₹{finalTotal.toLocaleString("en-IN")}
                                                    </h2>

                                                </div>

                                                <Link
                                                    to="/checkout"
                                                    onClick={() => setOpen(false)}
                                                    className="w-[55%]"
                                                >

                                                    <button className="w-full bg-red-400 hover:bg-red-500 transition text-white font-semibold py-4 rounded-lg">

                                                        CHECKOUT

                                                    </button>

                                                </Link>

                                            </div>

                                        </div>

                                    </div>

                                )
                            }
                    


</div>
            </>
                )
    
            }
                export default Cart