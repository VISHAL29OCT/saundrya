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
            {
                open && (
                    <div className='fixed inset-0 bg-black/40 z-40'
                        onClick={() => setOpen(false)} />
                )}
            <div className={`fixed top-0 right-0 w-full lg:w-100 h-screen bg-white flex flex-col  z-50 transition-transform duration-500
                ${open ? "translate-x-0" : "translate-x-full"}`}>

                <div className='flex justify-between p-4 bg-red-300 '>
                    <h2 className=' text-2xl text-white font-semibold font-serif'>MINI BAG</h2>
                    <button onClick={() => setOpen(false)}>❌</button>
                </div>
                <div className='flex-1 overflow-y-auto'>
                    {
                        cart.length === 0 ? (
                            <div className='flex flex-col items-center justify-center h-full gap-4'>
                                <p>No Items Added</p>
                                <Link to="/product">
                                    <button onClick={() => setOpen(false)} className='bg-red-300 px-6 py-3'>
                                        SHOP NOW
                                    </button>
                                </Link>
                            </div>
                        ) : (
                            cart.map((item) => (
                                <div key={item._id} className='p-4'>
                                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                                        <img src={item.img} alt="" className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg border" />
                                        <div className='flex flex-col gap-2'>
                                            <h2 className="text-sm font-medium leading-5 line-clamp-2">
                                                {item.name}
                                            </h2>
                                            <p className='font-semibold'>₹{item.price}</p>
                                            <div className='flex items-center gap-2'>
                                                <button className="w-8 h-8 border rounded hover:bg-gray-100" onClick={() => decreaseQty(item._id)}>
                                                    -
                                                </button>
                                                <span> {item.qty}</span>
                                                <button className="w-8 h-8 border rounded hover:bg-gray-100" onClick={() => increaseQty(item._id)}>
                                                    +
                                                </button>
                                                <button className="text-red-500 hover:text-red-700 text-xl" onClick={() => removeFromCart(item._id)} >
                                                    <MdDelete />
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
                <h6 className='border-b py-2 px-4 text-md' >
                    Shipping: {shippingCharge === 0 ? "FREE " : `₹${shippingCharge}`}
                    <span className='text-sm'>(Free for orders above ₹1999</span>)</h6>
                <h3 className='border-t py-2 px-4 '>Cart Subtotal :₹{totalPrice}</h3>
                <h5 className='border-y py-2 px-4'>Grand Total : ₹{finalTotal}
                </h5>
                {
                    cart.length > 0 && (

                        <Link to={"/checkout"}>
                            <button onClick={() => setOpen(false)} className='bg-red-300 w-[90%]  p-4 m-4 hover:cursor-pointer hover:bg-red-400'>CHECKOUT</button>
                        </Link>
                    )}

            </div>
        </>
    )
}
export default Cart