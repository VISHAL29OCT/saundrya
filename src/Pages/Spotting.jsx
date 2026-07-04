import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'




const Spotting = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(
            `${import.meta.env.VITE_API_URL}/products`
        )
            .then((res) =>
                res.json()
            )
            .then((data) => {
                setProducts(data.filter((item) => item.spotting));
            });


    }, [])
    return (

        <>
            <div className=" flex flex-col justiify-center items-center gap-4 text-center lg:mx-6 mx-2 py-12 border-y">
                <h2 className="text-2xl font-semibold">
                    CELEBRITIES & INFLUENCERS
                </h2>
                <p>
                    Saundrya isn't just fashion jewellery; it's a statement piece for those who appreciate handcrafted luxury. Our exquisite designs have captured the hearts of famous <span className="font-bold">celebrities and influencers  </span>who recognize the quality and artistry behind each creation.
                </p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 mx-6 my-4 '>
                {console.log(products[0])}
                {
                    products.map((item) => (
                        <div key={item._id} className='cursor-pointer group overflow-hidden'>
                            <Link to={`/product/${item._id}`}>
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-80 object-cover"
                                />
                            </Link>

                            <div className="mt-2 text-center">
                                <h3 className="font-medium">
                                    {item.name}
                                </h3>

                                <h4 className="text-sm text-gray-600">
                                    {item.productuse}
                                </h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Spotting