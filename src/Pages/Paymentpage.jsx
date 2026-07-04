import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

const Paymentpage = ({ cart, setCart }) => {
    const navigate = useNavigate()

    const totalPrice = cart.reduce((total, item) => {
        return total + item.price * item.qty;
    }, 0);

    const [savedAddress, setSavedAddress] =
        useState({});

    useEffect(() => {
        fetch(
            `${import.meta.env.VITE_API_URL}/address`,
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
                if (data.length > 0) {
                    setSavedAddress(
                        data[data.length - 1]
                    );
                }
            });
    }, []);

    const [paymentMethod, setPaymentMethod] = useState("online")

    const handlePayment = async () => {

        if (paymentMethod === "cod") {
            await saveOrder()
            setCart([])
            navigate("/success")
        }
        else {
            await openRazorpay()
        }
    }

    const shippingCharge =
        totalPrice < 1999 ? 60 : 0

    const finalTotal =
        totalPrice + shippingCharge

    const openRazorpay = async () => {
        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/payment/create-order`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                    body: JSON.stringify({
                        amount: finalTotal,
                    }),
                }
            );

            const order = await res.json();

            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: order.amount,
                currency: order.currency,
                order_id: order.id,
                name: "Saundrya",
                description: "Order Payment",

                handler: async function (response) {
                    try {
                        const verifyRes = await fetch(
                            `${import.meta.env.VITE_API_URL}/payment/verify-payment`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                                },
                                body: JSON.stringify(response),
                            }
                        );

                        const data = await verifyRes.json();

                        if (data.success) {
                            await saveOrder();
                            setCart([]);
                            navigate("/success");
                        } else {
                            alert("Payment verification failed");
                        }
                    } catch (error) {
                        console.log(error);
                    }
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();

        } catch (error) {
            console.log(error);
        }
    };
    console.log("CART:", cart);

    console.log(
        "PRODUCTS:",
        cart.map((item) => ({
            productId: item._id,
            name: item.name,
            image: item.img,
            price: item.price,
            qty: item.qty,
        }))
    );
    const saveOrder = async () => {
        try {
            await fetch(
                `${import.meta.env.VITE_API_URL}/orders`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },

                    body: JSON.stringify({
                        products: cart.map(
                            (item) => ({
                                productId: item.id,
                                name: item.name,
                                image: item.img,
                                price: item.price,
                                qty: item.qty,
                            })
                        ),

                        address: savedAddress,
                        totalPrice,
                        shippingCharge,
                        paymentMethod,
                    }),
                }
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='bg-gray-100 min-h-screen p-4'>
            <div className='flex flex-col lg:flex-row   mx-auto'>
                {/* LEFT SIDE */}
                <div className='w-full lg:w-[15%] bg-white flex flex-col gap-2 shadow-sm py-4 px-6 h-fit'>
                    <button onClick={() => setPaymentMethod("online")} className={`w-full py-3 rounded-md border transition-all text-left pl-2
                    ${paymentMethod === "online"
                            ? "border-orange-500 shadow-sm"
                            : "border-gray-200 hover:bg-gray-50"}
                       `}>
                        <h3>Cards</h3>
                        <h3>Netbanking</h3>
                        <h3>UPI</h3>
                    </button>

                    <button onClick={() => setPaymentMethod("cod")} className={`w-full text-left py-3 pl-3 rounded-md border transition-all
                    ${paymentMethod === "cod"
                            ? "border-orange-500 shadow-sm"
                            : "border-gray-200 hover:bg-gray-50"}
                       `}>
                        <h1>COD</h1>
                    </button>

                </div>

                <div className='bg-white lg:w-[50%] p-4 '>
                    <h3 className='border-b py-3 font-medium'>Pay With Card , Net Banking  or UPI</h3>
                    <p className='py-4'>You'll be securely redirected to enter your Card, Net Banking or UPI details, and complete your purchase.
                    </p>
                    <button onClick={handlePayment} className='bg-orange-600 w-full my-4 p-2 text-white'>
                        {
                            paymentMethod === "cod"
                                ? "PLACE ORDER"
                                : "PROCEED TO PAY"
                        }
                    </button>
                </div>

                {/* RIGHT SIDE */}
                <div className='w-full lg:w-[30%]'>

                    <div className='bg-white shadow-sm p-6 sticky top-4'>

                        <h2 className='text-xl font-semibold border-b pb-2 mb-4'>
                            ORDER SUMMARY
                        </h2>

                        <div className='space-y-3'>

                            <div className='flex justify-between'>
                                <p>Subtotal</p>
                                <p>₹{totalPrice}</p>
                            </div>

                            <div className='flex justify-between'>
                                <p>Delivery Charges</p>
                                <p>
                                    {
                                        shippingCharge === 0
                                            ? "FREE"
                                            : `₹${shippingCharge}`
                                    }
                                </p>
                            </div>

                            <hr />

                            <div className='flex justify-between font-medium  bg-gray-200 py-2 px-1'>
                                <p>Total Payable</p>
                                <p>{finalTotal}</p>
                            </div>

                        </div>

                        <div className='my-4 border p-4'>
                            <h3 className='text-sm text-gray-400'>DELIVERY ADDRESS</h3>
                            <p>{savedAddress.name}</p>
                            <p>{savedAddress.phone}</p>
                            <p>{savedAddress.pincode}</p>
                            <p>{savedAddress.landmark}</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Paymentpage