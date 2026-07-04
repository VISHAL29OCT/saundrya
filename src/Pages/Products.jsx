import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"

const Products = ({ addToCart }) => {
    const { category, query } = useParams()
    const [filterOpen, setFilterOpen] = useState(false)
    const [price, setPrice] = useState(5000)
    const [sortOption, setSortOption] = useState("")
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(
            `${import.meta.env.VITE_API_URL}/products`
        )
            .then((res) =>
                res.json()
            )
            .then((data) => {
                setProducts(data);
            });
    }, []);
    const filteredProducts =
        products.filter((item) => {

            const priceValue =
                Number(item.price);

            if (category) {

                return (
                    item.type === category &&
                    priceValue <= price
                )

            }

            if (query) {

                return (
                    item.name
                        .toLowerCase()
                        .includes(query.toLowerCase()) &&

                    priceValue <= price
                )
            }
        })
    const sortedProducts = [...filteredProducts]

    if (sortOption === "low") {

        sortedProducts.sort((a, b) => {

            return (
                a.price - b.price
            )

        })

    }

    if (sortOption === "high") {

        sortedProducts.sort((a, b) => {

            return (
                b.price - a.price
            )

        })

    }

    if (sortOption === "az") {

        sortedProducts.sort((a, b) =>
            a.name.localeCompare(b.name)
        )

    }
    if (sortOption === "za") {

        sortedProducts.sort((a, b) =>
            b.name.localeCompare(a.name)
        )

    }

    return (
        <>
            <div className='bg-[url("https://everstylish.com/media/.renditions/catalog/category/sanjoya-cate-b-1.jpg")] bg-cover bg-center relative lg:h-60 h-30 '>

                <div className='absolute inset-0 bg-black/30'></div>
                <div className='relative z-10 items-stretch text-center'>

                    <h1 className='text-white font-bold lg:text-3xl pt-10'>
                        {
                            category
                                ? `${category.toUpperCase()} WEAR`
                                : `SEARCH : ${query.toUpperCase()}`
                        }
                    </h1>

                </div>
            </div>

            <div className='lg:px-6 mt-4 flex justify-end mx-2'>
                <h4 className='text-center lg:p-2'>sort by:</h4>
                <select onChange={(e) => setSortOption(e.target.value)} className=' border px-1 lg:p-2 '>
                    <option value="">
                        Recomended
                    </option>

                    <option value="low">
                        Price: Low to High
                    </option>

                    <option value="high">
                        Price: High to Low
                    </option>

                    <option value="az">
                        Name: A-Z
                    </option>

                    <option value="za">
                        Name: Z-A
                    </option>
                </select>
            </div>

            <div className='lg:flex lg:p-6 lg:mx-6 bg-pink-50'>
                <div className='w-[20%] hidden lg:flex flex-col gap-2 px-4'>
                    <h4>Price:</h4>
                    <div className='flex justify-between text-sm mb-2'>
                        <span className='pr-2'>400</span>
                        <input type="range"
                            min="400"
                            max="5000"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className='w-1/2'
                        />
                        <span className='w-1/2 pl-2'>5000</span>
                    </div>
                    <p className='mt-2 border px-4 py-2 w-[80%] font-medium text-m'>
                        Selected: ₹{price}
                    </p>
                    <h4>BASE COLOUR</h4>
                    <h4>DISPATCH TIME</h4>

                </div>

                <div className='flex justify-between items-center mb-2 mx-2 lg:hidden'>

                    <button
                        onClick={() => setFilterOpen(true)}
                        className='border px-4 py-2'
                    >
                        FILTER
                    </button>
                    {
                        filterOpen && (

                            <div
                                className='fixed inset-0 bg-black/40 z-40 lg:hidden'
                                onClick={() => setFilterOpen(false)}
                            />

                        )
                    }

                </div>
                {/* MOBILE FILTER */}

                <div
                    className={`lg:hidden fixed top-0 left-0 h-screen w-80  bg-white z-50 p-6 transition-all duration-500
            ${filterOpen ? "translate-x-0" : "-translate-x-full"}
                `}
                >

                    <button
                        onClick={() => setFilterOpen(false)}
                        className='mb-6'
                    >
                        ✕
                    </button>

                    <div className='flex flex-col gap-4'>

                        <h4>Price:</h4>

                        <input
                            type="range"
                            min="400"
                            max="5000"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />

                        <p>
                            Selected: ₹{price}
                        </p>

                        <h4>BASE COLOUR</h4>

                        <h4>DISPATCH TIME</h4>

                    </div>

                </div>


                <div className='lg:w-[80%] grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4  '>

                    {
                        sortedProducts.map((item) => (

                            <div key={item._id} className='relative group cursor-pointer'>
                                <Link to={`/product/${item._id}`}>
                                    <img
                                        src={item.img}
                                        alt=""
                                        className='w-full h-[60%] object-cover'
                                    />
                                </Link>
                                <div className='absolute top-3 right-3 flex flex-row gap-3 opacity-0 group-hover:opacity-100 transition-duration-300'>
                                    <button className='bg-white p-2 rounded-full shadow'>🤍</button>
                                    <button onClick={() => addToCart(item)} className='bg-white p-2 rounded-full shadow'>🛒</button>
                                </div>
                                <h2 className='pr-4 pt-4 text-xs leading-4 h-24 text-center '>{item.name}</h2>

                                <p className='p-2 text-center text-red-400 '>{item.price}</p>
                            </div>

                        ))
                    }
                </div>
            </div>


        </>
    )
}

export default Products