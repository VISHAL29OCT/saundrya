import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Latest = () => {
    const [category, setCategory] = useState("summer")
    const [products, setProducts] = useState([]);
    const filteredProducts = products.filter(
        (item) => item.latestCategory === category
    )
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
    return (
        <>
            <div className='bg-rose-50 pb-6 pt-6 lg:mx-6 mx-2 border-b-2 '>
                <h2 className='text-4xl md:text-3xl lg:2xl font-semibold text-stone-800 mb-6 text-center '>Latest Drops</h2>

                <div className="flex overflow-x-auto md:justify-between xl:overflow-visible whitespace-nowrap gap-10 px-2 md:px-6 no-scrollbar text-sm sm:text-lg md:text-xl bg-rose-50">

                    <h2 onClick={() => setCategory("summer")}
                        className={`cursor-pointer pb-1 border-b-2 transition duration-300 shrink-0 
    ${category === "summer" ?
                                "border-black text-black"
                                : "border-transparent"}`}>
                        SPRING SUMMER'26
                    </h2>

                    <h2 onClick={() => setCategory("summerbags")} className={`cursor-pointer pb-1 border-b-2 transition duration-300 shrink-0 
    ${category === "summerbags" ?
                            "border-black text-black"
                            : "border-transparent"}`}>
                        SPRING SUMMER BAGS
                    </h2>

                    <h2 onClick={() => setCategory("shaadi")} className={`cursor-pointer pb-1 border-b-2 transition duration-300 shrink-0 
    ${category === "shaadi" ?
                            "border-black text-black"
                            : "border-transparent"}`}>
                        SHAADI EDITS
                    </h2>

                    <h2 onClick={() => setCategory("badhai")} className={`cursor-pointer pb-1 border-b-2 transition duration-300 shrink-0 
    ${category === "badhai" ?
                            "border-black text-black"
                            : "border-transparent"}`}>
                        BADHAI HO
                    </h2>

                    <h2 onClick={() => setCategory("darpana")} className={`cursor-pointer pb-1 border-b-2 transition duration-300 shrink-0 
    ${category === "darpana" ?
                            "border-black text-black"
                            : "border-transparent"}`}>
                        DARPANA
                    </h2>

                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-2 px-2 md:px-4 py-6 bg-rose-50'>

                    {filteredProducts.slice(0, 4).map((item, index) => (
                        <div key={item._id} className='flex flex-col items-center transition duration-300'>

                            <Link to={`/product/${item._id}`}>

                                <div className='relative group w-full h-full overflow-hidden'>

                                    <img
                                        src={item.img}
                                        className="w-full h-80 object-cover"
                                    />

                                    <img
                                        src={item.hoverimg}
                                        className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500 w-full h-full object-cover"
                                    />

                                </div>

                            </Link>

                            <p className='mt-2 text-s font-medium text-center'>{item.type}</p>
                            <p className='text-md text-gray-600 mt-1 text-center wrap-break-word'>{item.name}</p>
                            <p className='text-md text-gray-500'>₹{item.price.toLocaleString("en-IN")}</p>
                        </div>
                    ))}

                </div>

                <button className="relative px-6 rounded-xl py-2 md:text-xl sm:text-sm  mx-auto bg-black border border-black text-white overflow-hidden group flex items-center justify-center ">
                    <Link to="/collection/latest">
                        <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full"></span>


                        <span className="relative z-10 group-hover:text-black">
                            VIEW ALL
                        </span>
                    </Link>

                </button>

            </div>
        </>

    )
}

export default Latest