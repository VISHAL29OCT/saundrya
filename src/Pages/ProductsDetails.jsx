import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'


const ProductsDetails = ({ addToCart, cart }) => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const { id } = useParams()
    const [index, setIndex] = useState(0)
    const [qty, setQty] = useState(1)
    const [singleProduct, setSingleProduct] = useState(null);
    const [products, setProducts] = useState([]);


    const alreadyInCart = cart.some(
        item => item._id === singleProduct?._id
    );
    const [mainImage, setMainImage] = useState(null)

    useEffect(() => {
        fetch(
            `${import.meta.env.VITE_API_URL}/products/${id}`
        )
            .then((res) => res.json())
            .then((data) => {
                setSingleProduct(data);
            });
    }, [id]);


    useEffect(() => {
        fetch(
            `${import.meta.env.VITE_API_URL}/products`
        )
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    useEffect(() => {

        if (singleProduct?.img) {
            setMainImage(singleProduct.img)
        }

    }, [singleProduct])

    if (!singleProduct) {
        return <h1>Loading .....</h1>
    }

    const next = () => {
        if (index < products.length - 4) {
            setIndex(index + 1)
        }
    }

    const prev = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }

    const addToWishlist = async (product) => {
        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/wishlist/${product._id}`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );

            const data =
                await res.json();

            alert(data.message);
        } catch (error) {
            console.log(error);
        }
        
        const oldwishlist = JSON.parse(localStorage.getItem("wishlist")) || []

        const alreadyExist = oldwishlist.find(
            item => item._id === product._id
        )

        if (!alreadyExist) {
            localStorage.setItem(
                "wishlist",
                JSON.stringify([...oldwishlist, product])
            )
            alert("added to wishlist")
        }

    }

    const dispatchDate = new Date();

    dispatchDate.setDate(
        dispatchDate.getDate() + 3
    );

    const formattedDate =
        dispatchDate.toLocaleDateString("en-GB");

    return (
        <>
            <div className='mx-2 lg:mx-6 md:mx-4'>
                <img src="https://everstylish.com/media/blueskytechco/banner/default/d_1.jpg" alt="" className='w-full h-40 lg:h-32 object-cover' />
            </div>

            <div className='grid lg:grid-cols-[10%_40%_50%] grid-cols-1 lg:m-6 m-2'>
                <div className='flex lg:flex-col flex-row w-full lg:w-full lg:gap-4 gap-2 items-center justify-center '>
                    <img src='https://everstylish.com/media/catalog/product/cache/ac2c59ce2d1db889513bb64205931a03/j/e/jew1108557-m1-1-1.jpg' onClick={() => setMainImage("https://everstylish.com/media/catalog/product/cache/ac2c59ce2d1db889513bb64205931a03/j/e/jew110object-cover8557-m1-1-1.jpg")} className='lg:w-full w-20 h-24 object-cover' />
                    <img src='https://everstylish.com/media/catalog/product/cache/ac2c59ce2d1db889513bb64205931a03/j/e/jew1108557-2-2-2.jpg' onClick={() => setMainImage("https://everstylish.com/media/catalog/product/cache/ac2c59ce2d1db889513bb64205931a03/j/e/jew1108557-2-2-2.jpg")} className='lg:w-full w-20 h-24 object-cover ' />
                    <img src='https://everstylish.com/media/catalog/product/cache/ac2c59ce2d1db889513bb64205931a03/j/e/jew1108557-1-1-1.jpg' onClick={() => setMainImage("https://everstylish.com/media/catalog/product/cache/ac2c59ce2d1db889513bb64205931a03/j/e/jew1108557-1-1-1.jpg")} className='lg:w-full w-20 h-24 object-cover' />
                    <img src='https://everstylish.com/media/catalog/product/cache/ac2c59ce2d1db889513bb64205931a03/j/e/jew1108557-1_1.jpg' onClick={() => setMainImage("https://everstylish.com/media/catalog/product/cache/ac2c59ce2d1db889513bb64205931a03/j/e/jew1108557-1_1.jpg")} className='lg:w-full w-20 h-24 object-cover' />
                </div>

                <div className='my-2 lg:mx-4 mx-2  aspect-square self-start'>
                    {
                        mainImage && (
                            <img src={mainImage} className='object-cover w-full h-full lg:w-full ' />
                        )}
                </div>

                <div className='flex flex-col lg:gap-6 gap-2 p-2'>
                    <h2 className='lg:text-3xl text-2xl font-semibold leading-snug'>
                        {singleProduct.name}
                    </h2>
                    <span className="text-2xl lg:text-xl font-medium">Price - Rs {singleProduct.price}/-</span>

                    <div className='flex items-center gap-2'>

                        <span className='font-medium'>qty:</span>
                        <button onClick={() => {
                            if (qty > 1) { setQty(qty - 1) }
                        }} className='border px-2 py-1'>-</button>
                        <span>{qty}</span>

                        <button onClick={() => setQty(qty + 1)} className='border px-2 py-1'>+</button>
                    </div>

                    <div className='flex items-center gap-4'>
                        <button onClick={() => addToWishlist(singleProduct)} className='border p-3 rounded-md'>🤍</button>

                        {
                            alreadyInCart ? (
                                <button onClick={() => navigate("/checkout")} className='flex-1 py-3 bg-green-600 text-white font-semibold rounded-md'>
                                    Go To Bag
                                </button>
                            ) : (
                                <button onClick={() => addToCart({ ...singleProduct, qty })} className='flex-1 py-3 bg-red-400 text-white font-semibold rounded-md'>
                                    Add To Bag
                                </button>
                            )
                        }

                    </div>

                    <div className='space-y-2 text-gray-700'>
                        <h3>Availablity:IN Stock</h3>
                        <h3>SKU:VAK{Math.floor(100000 + Math.random() * 900000)}</h3>
                        <h3>Brand:INgiy</h3>
                    </div>

                    <div>
                        <button onClick={() => setShow(!show)} className='w-full p-2  font-medium text-left border '>PRODUCT DETAILS -</button>
                        {
                            show &&

                            <p className='lg:mt-4 mt-2  leading-6 text-gray-500'>
                                GULRATNA by Saundrya. A handcrafted choker necklace with hand-embroidered roses, vibrant stones, soft bead fringes, and pearl gem details. Featherlight and easy on the neck and ears, this wedding jewelry blends modern style with fine craftsmanship. Thoughtfully handcrafted, easy to style, and , it suits weddings, parties, and festive dinners. A lovely gift. Style tip: pair with a lehenga, saree, or a solid-toned outfit so the jewelry stands out.
                            </p>
                        }
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3 lg:p-2 p-2 mt-4 mx-4  justify-center border-t border-b'>
                <div className='flex flex-col lg:gap-2  items-center text-xs'>
                    <img src="https://everstylish.com/media/wysiwyg/dispatch.png" alt="" className='w-16 h-16' />
                    <p> Easy return or exchange</p>
                </div>
                <div className='flex flex-col lg:gap-2 items-center text-xs'>
                    <img src="https://everstylish.com/media/wysiwyg/shipping.png" alt="" className='w-16 h-16' />
                    <p>Dispatch Time: {formattedDate} </p>
                </div>

                <div className='flex flex-col text-center text-xs lg:gap-2 items-center'>
                    <img className='w-16 h-16' src="https://everstylish.com/media/wysiwyg/return.png" alt="" />
                    <p>FREE SHIPPING for all orders with value above INR 1999/-</p>
                </div>
            </div>

            <h3 className='text-2xl p-6'>RELATED PRODUCTS :</h3>

            <div className='relative mx-6 my-4'>

                <div onClick={prev} className=' absolute top-1/2 -translate-y-1/2 -left-5 bg-red-300 text-pink-900 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-10'>
                    ←
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        products
                            .slice(
                                index,
                                index +
                                (
                                    window.innerWidth >= 1024
                                        ? 4
                                        : window.innerWidth >= 640
                                            ? 3
                                            : 2
                                )
                            )
                            .map((item) => (
                                <Link
                                    to={`/product/${item._id}`}
                                    key={item.id}
                                >
                                    <div>
                                        <img src={item.img} alt="" className='w-full h-80 object-cover' />
                                        <h3 className='justify-center w-fit items-center leading-6 mt-2 '>{item.name}</h3>
                                    </div>
                                </Link>
                            ))
                    }
                </div>


                <div
                    onClick={next}
                    className=' absolute top-1/2 -translate-y-1/2 -right-5 bg-red-300 text-pink-900 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-10'>
                    →
                </div>

            </div>
        </>
    )
}

export default ProductsDetails