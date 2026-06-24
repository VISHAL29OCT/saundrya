import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

const Payment = ({ cart }) => {


    const totalPrice = cart.reduce((total, item) => {
        return total +
            Number(
                item.price.replace("₹", "")
                    .replace(".00", "")
            ) * item.qty
    }, 0)

    const shippingCharge =
        totalPrice < 1999 ? 60 : 0

    const finalTotal =
        totalPrice + shippingCharge

    const [address, setAddress] = useState({
        name: "",
        phone: "",
        pincode: "",
        house: "",
        area: "",
        town: "",
        landmark: "",
        email: "",
    })
    const navigate = useNavigate()

    const handleProceed = () => {
        if (
            !address.name ||
            !address.phone ||
            !address.pincode
        ) {
            alert("please fill all required details")
            return
        }

        localStorage.setItem(
            "address",
            JSON.stringify(address)
        )
        navigate("/paymentpage")
    }

    const [showPincodeInput, setShowPincodeInput] = useState(false)
    const [deliveryPincode, setDeliveryPincode] = useState("")
    return (
        <>
            <div className='flex flex-col lg:flex-row mx-2 lg:mx-6'>
                <div className='flex flex-col p-4 w-full lg:w-2/3 mx-2 border-b lg:border-b-0 lg:border-r'>
                    <h3>YOUR DETAILS</h3>
                    <div className='flex flex-col lg:flex-row gap-2 py-2'>
                        <input type="tel" className='border px-3 py-1 w-full lg:w-1/2 rounded-md
                            outline-none focus:ring-1 focus:ring-orange-400 placeholder:text-sm' placeholder='Enter Your Number' required />

                        <input type="email" className='border px-3 py-1 w-full lg:w-1/2 rounded-md
                        outline-none focus:ring-1 focus:ring-orange-400 placeholder:text-sm' placeholder='Enter your Email' required />
                    </div>
                    <h3 className='border-b pb-1'>Delivery Details</h3>
                    <p className='text-xs font-extralight py-2'>WE WILL DELIVER THE ORDER AT THE BELOW ADDRESS </p>
                    <div>
                        <input type="text" name="" id="" placeholder='Recipient name' value={address.name} onChange={(e) => setAddress({ ...address, name: e.target.value })} className='border w-full px-3 py-1 my-1 placeholder:text-sm rounded-md
                            outline-none focus:ring-1 focus:ring-orange-400' required />
                        <div className='flex flex-col lg:flex-row gap-2 py-2'>
                            <input
                                type="tel"
                                className='border w-full lg:w-1/2  px-3  py-1 rounded-md outline-none focus:ring-1 focus:ring-orange-400 '
                                placeholder="Phone Number"
                                value={address.phone}
                                type="tel"
                                onChange={(e) =>
                                    setAddress({
                                        ...address,
                                        phone: e.target.value
                                    })
                                }
                            />
                            <input
                                type="text"
                                className='border w-full lg:w-1/2  px-3 py-1 rounded-md outline-none focus:ring-1 focus:ring-orange-400'
                                placeholder="Enter Pincode"
                                type="text"
                                value={address.pincode}
                                onChange={(e) =>
                                    setAddress({
                                        ...address,
                                        pincode: e.target.value
                                    })
                                }
                                required
                            />
                        </div>
                        <div className='flex flex-col lg:flex-row gap-2 py-2'>

                            <input type="text" className='border w-full lg:w-1/2  px-3  py-1 rounded-md outline-none focus:ring-1 focus:ring-orange-400 placeholder:text-sm' placeholder='Apartment /House /Flat No.' />

                            <input type="text" className='border w-full lg:w-1/2  px-3  py-1 rounded-md outline-none focus:ring-1 focus:ring-orange-400 placeholder:text-sm' placeholder='Street /Colony /Area Name' />
                        </div>
                        <div className='flex flex-col lg:flex-row gap-2 py-2'>
                            <input type="text" className='border w-full lg:w-1/2 py-1  px-3  rounded-md outline-none focus:ring-1 focus:ring-orange-400 placeholder:text-sm' placeholder='Locality/Town' />
                            <input
                                type="text"
                                className='border w-full lg:w-1/2  px-3  py-1 rounded-md outline-none focus:ring-1 focus:ring-orange-400'
                                placeholder="Landmark"
                                value={address.landmark}
                                onChange={(e) =>
                                    setAddress({
                                        ...address,
                                        landmark: e.target.value
                                    })
                                }
                            />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col p-6  w-full lg:w-1/3 mx-2'>

                    <div className='bg-blue-50 px-2 py-2 rounded-md'>

                        <h2 className='mb-2'>Delivery Check</h2>

                        {
                            !showPincodeInput ? (
                                <button
                                    onClick={() => setShowPincodeInput(true)}
                                    className='text-blue-500 text-sm cursor-pointer'
                                >
                                    Check Delivery
                                </button>
                            ) : (

                                <div>
                                    <input
                                        type="text"
                                        placeholder='Enter Pincode'
                                        value={deliveryPincode}
                                        onChange={(e) => setDeliveryPincode(e.target.value)}
                                        className='border text-sm w-full lg:w-1/2 px-2 py-1 rounded-md outline-none focus:ring-1 focus:ring-orange-400'
                                    />
                                    {
                                        deliveryPincode.length === 6 && (
                                            <p className='text-green-500 text-sm mt-1'>
                                                Delivery Available in your area
                                            </p>
                                        )

                                    }
                                    {
                                        deliveryPincode.length > 0 &&
                                        deliveryPincode.length < 6 && (
                                            <p className='text-red-500 text-sm mt-1'>
                                                Invalid Pincode
                                            </p>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                    <div className='flex justify-between py-4 border-t my-6'>
                        <h2 className='font-extralight'>ORDER SUMMARY</h2>
                        <button className='text-blue-500 text-sm'>view details</button>
                    </div>
                    <div className='flex justify-between'>
                        <h3>Subtotal item</h3>
                        <p>₹{totalPrice}</p>
                    </div>
                    <div className='flex justify-between bg-gray-100 font-semibold text-md py-2 my-4'>
                        <h3>TOTAL PAYABLE:</h3>
                        <p >₹{finalTotal}</p>
                    </div>

                    <button onClick={handleProceed} className='bg-orange-500 p-2 my-2 w-full cursor-pointer'>PROCEED TO PAYMENT</button>

                </div>
            </div>
        </>

    )
}
export default Payment