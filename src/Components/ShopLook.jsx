import React, { useState } from 'react'

const ShopLook = () => {
    const [index, setIndex] = useState(0)
    const slides
        = [
            {
                big: "image59.webp",
                hover: "image63.webp",
                small: "image62.jpg",
                desc: "Grand Palais Fountain Choker",
                title: "BADHAI HO !",
                price: "₹ 8,250",
            },
            {
                big: "image61.webp",
                small: "image71.webp",
                hover: "image72.webp",
                title: "Darpana",
                desc: "Modern festive wear",
                price: "₹ 2,850",
            },
               {
                big: "image64.webp",
                small: "image5.jpg",
                hover: "image67.webp",
                title: "Darpana",
                desc: "Modern festive wear",
                price: "₹ 2,850",
            },
               {
                big: "image68.webp",
                small: "image70.jpg",
                hover: "image69.webp",
                title: "Darpana",
                desc: "Modern festive wear",
                price: "₹ 2,850",
            },
               {
                big: "image66.webp",
                small: "image8.jpg",
                hover: "image67.webp",
                title: "Darpana",
                desc: "Modern festive wear",
                price: "₹ 2,850",
            },
        ];


    const next = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    }
    const prev = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
    return (
        <>
            <div className="text-center">
                <h2 className="font-semibold text-3xl mt-5">Shop the look</h2>
                <p className="mt-4">
                    Elevate your style game with the hottest trend of the season
                </p>
            </div>

            <div className="flex justify-center items-center gap-10 mt-10">

                <div onClick={prev} className='bg-black text-orange-300 rounded-full  text-center  justify-center text-3xl  w-10 h-10 hover:cursor-pointer '>←</div>

                {/* LEFT BIG IMAGE */}
                <div className="w-120 h-125 overflow-hidden">
                    <img src={slides[index].big} className="w-full h-full object-cover" />
                </div>

                {/* RIGHT SIDE */}
                <div className=" relative group overflow-hidden flex flex-col items-center">
                    <img src={slides[index].small} className="w-60 h-72 object-cover items-start" />
                    <img src={slides[index].hover} className=" absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-100 w-60 h-72 object-cover cursor-pointer" />

                    {/* DETAILS */}
                    <div className="text-center mt-4">
                        <h3 className="font-semibold">{slides[index].title}</h3>
                        <p className="text-gray-600 text-sm">{slides[index].desc}</p>
                        <p className="mt-2">{slides[index].price}</p>
                    </div>

                    <button className="relative bg-black border border-black text-white px-8 py-2 mt-6 overflow-hidden group ">
                        {/* white overlay */}
                        <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full"></span>

                        {/* text */}
                        <span className="relative z-10 group-hover:text-black">
                            VIEW PRODUCT
                        </span>
                    </button>
                </div>
                <div onClick={next} className='bg-black text-orange-300 rounded-full  text-center  justify-center text-3xl  w-10 h-10 cursor-pointer'>→</div>
            </div>
        </>
    )
}

export default ShopLook