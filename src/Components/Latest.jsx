import React, { useState } from 'react'

const Latest = () => {
    const [category, setCategory] = useState("summer");

    const products = {
        summer: [
            { img: "image10.jpg", hover: "image7.jpg", name: "Pyaar Beshumar Pendant", price: "₹ 3,250", category: "SPRING SUMMER" },
            { img: "image9.jpg", hover: "image12.jpg", name: "Not Your Rose Earcrawler", price: " ₹ 2,850", category: "SPRING SUMMER" },
            { img: "image14.jpg", hover: "image9.jpg", name: "Colosseum Earstack", price: "₹ 3,500", category: "SPRING SUMMER" },
            { img: "image16.webp", hover: "image15.webp", name: "Colosseum Rings (Set of 2)", price: "₹ 2,000", category: "SPRING SUMMER" },
        ],
        summerbags: [
            { img: "image31.webp", hover: "image17.jpg", name: "The Holiday Infinity Nano Bag", price: "₹12,500", category: "SPRING SUMMER" },
            { img: "image32.webp", hover: "image18.jpg", name: "The Holiday Cowrie Bag", price: "₹ 10,500", category: "SPRING SUMMER" },
            { img: "image33.webp", hover: "image19.jpg", name: "Not Your Rose Nano Bag", price: "₹ 9,500", category: "SPRING SUMMER" },
            { img: "image34.webp", hover: "image20.jpg", name: "Twiddle Charms Nano Bag", price: "₹ 8,500", category: "SPRING SUMMER" },
        ],
        shaadi: [
            { img: "image35.webp", hover: "image21.jpg", name: "Darpan Bindi (set of 5)", price: "₹ 1,100", category: "SHADI EDIT" },
            { img: "image43.webp", hover: "image22.jpg", name: "Grand Palais Bugadi (Set Of 2)", price: "₹ 2,000", category: "SHADI EDIT" },
            { img: "image36.webp", hover: "image23.jpg", name: "Darpan Meen Earstack (set of 4)", price: "₹ 3,000", category: "SHADI EDIT" },
            { img: "image38.webp", hover: "image24.jpg", name: "Darpan Meen Maangtika", price: "₹ 2,250", category: "SHADI EDIT" },

        ],
        badhai: [
            { img: "image39.webp", hover: "image25.jpg", name: "Maharaja Of Patiala Choker", price: "₹ 6,000", category: "BADHAI HO!" },
            { img: "image40.webp", hover: "image26.jpg", name: "Grand Palais Earcrawler", price: "₹ 4,250", category: "BADHAI HO!" },
            { img: "image41.webp", hover: "image27.jpg", name: "Solomon Mismatched Earrings", price: "₹ 3,550", category: "BADHAI HO!" },
            { img: "image42.webp", hover: "image28.jpg", name: "Solomon Akshar Clutch", price: "₹ 13,250", category: "BADHAI HO!" },

        ],
        darpana: [
            { img: "image35.webp", hover: "image21.jpg", name: "Darpan Bindi (set of 5)", price: "₹ 5,000", category: "DARPANA" },
            { img: "image45.webp", hover: "image5.jpg", name: "Sheeshmahal Choker", price: "₹ 4,250", category: "DARPANA" },
            { img: "image44.webp", hover: "image29.jpg", name: "Surya Darpan Sahara Earrings", price: "₹ 3,050", category: "DARPANA" },
            { img: "image30.jpg", hover: "image7.jpg", name: "Darpan Meen Handstack", price: "₹ 5,250", category: "DARPANA" },
        ]
    };
    return (
        <>
            <div className='flex gap-12 items-center justify-center text-xl'>

                <div className='cursor-pointer'>
                    <h2 onClick={() => setCategory("summer")}
                        className={`cursor-pointer pb-1 border-b-2 transition duration-300 
    ${category === "summer" ? "border-black text-black" : "border-transparent"}`}
                    > SPRING SUMMER'26</h2>
                </div>

                <div className='cursor-pointer'>
                    <h2 onClick={() => setCategory("summerbags")} className={`cursor-pointer pb-1 border-b-2 transition duration-300 
    ${category === "summerbags" ? "border-black text-black" : "border-transparent"}`}>SPRING SUMMER BAGS</h2>
                </div>

                <div className='cursor-pointer'>
                    <h2 onClick={() => setCategory("shaadi")} className={`cursor-pointer pb-1 border-b-2 transition duration-300 
    ${category === "shaadi" ? "border-black text-black" : "border-transparent"}`}>SHAADI EDITS</h2>
                </div>

                <div className='cursor-pointer'>
                    <h2 onClick={() => setCategory("badhai")} className={`cursor-pointer pb-1 border-b-2 transition duration-300 
    ${category === "badhai" ? "border-black text-black" : "border-transparent"}`}>BADHAI HO</h2>
                </div>

                <div className='cursor-pointer'>
                    <h2 onClick={() => setCategory("darpana")} className={`cursor-pointer pb-1 border-b-2 transition duration-300 
    ${category === "darpana" ? "border-black text-black" : "border-transparent"}`}>DARPANA</h2>
                </div>

            </div>

            <div className='flex gap-6 justify-center items-center h-96'>

                {products[category].map((item, index) => (
                    <div key={index} className='flex flex-col items-center w-52 h-80  mt-10 hover: transition duration-300'>

                        <div className='relative group w-52 h-52 overflow-hidden'>
                            <img src={item.img} className="w-full h-full object-cover" />
                            <img src={item.hover} className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500 w-full h-full object-cover" />
                        </div>

                        <p className='mt-2 text-xs font-medium text-center'>{item.category}</p>
                        <p className='text-sm text-gray-600 mt-1 text-center wrap-break-wordbreak-words'>{item.name}</p>
                        <p className='text-sm text-gray-500'>{item.price}</p>

                    </div>
                ))}

            </div>


            <div className=' flex flex-col items-center justify-center'>

                <button className="relative bg-black border border-black text-white px-8 py-2 overflow-hidden group ">
                    {/* white overlay */}
                    <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full"></span>

                    {/* text */}
                    <span className="relative z-10 group-hover:text-black">
                        VIEW ALL
                    </span>
                </button>

            </div>
        </>

    )
}

export default Latest