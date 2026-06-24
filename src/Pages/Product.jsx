import React, { useState } from 'react'
import { Link } from 'react-router';

const Product = () => {

    const testimonials = [
        {
            name: "PALLUCK SINGH",
            image: "https://everstylish.com/media/wysiwyg/occasion-wear/Review_6_-_Palluck.jpg",
            text: "I ordered from Saundrya for a special occasion, and the jewelry looked even more beautiful in person. The detailing, shine, and overall quality felt truly premium. It added the perfect finishing touch to my outfit."
        },

        {
            name: "SHRESHTHA PALAK",
            image: "https://everstylish.com/media/wysiwyg/occasion-wear/Review_2_-_Shreshtha.jpg",
            text: "What I love about Saundrya is how elegant and timeless the designs feel. The jewelry is lightweight, comfortable to wear, and still manages to stand out beautifully. I received so many compliments wearing it."
        },
        {
            name: "PROJNA PATAL",
            image: "https://everstylish.com/media/wysiwyg/occasion-wear/Projna.png",
            text: "“Saundrya has become my favorite place for occasion jewelry. Every piece feels thoughtfully designed and beautifully crafted. The quality and packaging made the whole experience feel really special."
        },

        {
            name: "ARTI GUPTA",
            image: "https://everstylish.com/media/wysiwyg/occasion-wear/Review_3_-_Aarti.jpg",
            text: "“I was searching for jewelry that looked luxurious without feeling overdone, and Saundrya was exactly what I needed. The designs are classy, versatile, and perfect for both traditional and modern outfits."
        },
        {
            name: "AYUSHI Mishra",
            image: "https://everstylish.com/media/wysiwyg/occasion-wear/Review_3_-_Aarti.jpg",
            text: "“The attention to detail in Saundrya’s jewelry is honestly impressive. From the finishing to the overall design, everything feels elegant and carefully made. It instantly elevates any look."
        },
        {
            name: "RIYA Mishra",
            image: "https://everstylish.com/media/wysiwyg/occasion-wear/Review_5_-_Riya.jpg",
            text: "Shopping from Saundrya felt more personal than just buying jewelry online. Every piece carries a beautiful charm and elegance that makes it feel unique and memorable.”."
        },
        {
            name: "PROJNA Mishra",
            image: "https://everstylish.com/media/wysiwyg/occasion-wear/Projna.png",
            text: "Shopping from Saundrya felt more personal than just buying jewelry online. Every piece carries a beautiful charm and elegance that makes it feel unique and memorable.”"
        },
        {
            name: "Jyoti Mishra",
            image: "https://everstylish.com/media/wysiwyg/occasion-wear/Review_2_-_Shreshtha.jpg",
            text: "AShopping from Saundrya felt more personal than just buying jewelry online. Every piece carries a beautiful charm and elegance that makes it feel unique and memorable.”"
        },
        {
            name: "Ranju Mishra",
            image: "https://everstylish.com/media/wysiwyg/occasion-wear/Review_2_-_Shreshtha.jpg",
            text: "Shopping from Saundrya felt more personal than just buying jewelry online. Every piece carries a beautiful charm and elegance that makes it feel unique and memorable.”"
        },
    ]
    const [index, setIndex] = useState(0)
    const [activeMenu, setActiveMenu] = useState(null)

    const next = () => {
        if (index < testimonials.length - 3) {
            setIndex(index + 1)
        }
    }

    const prev = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }
    return (
        <>
            <div className=' hidden md:hidden lg:block bg-[url("https://everstylish.com/media/wysiwyg/occasion-wear/occasion.jpg")] 
        h-screen bg-cover bg-top lg:mx-6 mx-2'>


                <ul className='flex gap-15 items-center justify-center text-2xl text-white pt-2 font-bold cursor-pointer relative'>
                    <Link to="/">
                        <li className='hover:text-pink-300 pb-5'>Home</li>
                    </Link>
                    <Link to="/collection/all">
                        <li className='hover:text-pink-300 pb-5'>Jewellery</li>
                    </Link>


                    <li
                        className=' hover:text-pink-300 list-none pb-5'
                        onMouseEnter={() => setActiveMenu("daily")}
                        onMouseLeave={() => setActiveMenu(null)}>

                        Daily Wear ▾
                        {
                            activeMenu === "daily" && (
                                <div className='bg-white flex border border-black h-80 w-200 p-10 gap-10  absolute mt-3 left-1/2 -translate-x-1/2   max-w-225 '>
                                    <div>

                                        <h3 className='text-red-300 font-semibold mb-2 text-xl'>  VIEW ALL <br />NEW ARRIVALS <br /> STYLE WITH</h3>
                                        <Link to="/products/indian">
                                            <p className='text-gray-500 text-sm hover:text-red-400'>Indian Wear</p>
                                        </Link>
                                        <Link to="/products/western">
                                            <p className='text-gray-500 text-sm hover:text-red-400'>Western Wear</p>
                                        </Link>
                                    </div>
                                    <div>
                                        <h3 className='text-red-300 font-semibold mb-2 text-xl leading-4'>  CATEGORY</h3>
                                        <Link to="/collection/earring">

                                            <p className='text-gray-500 text-sm hover:text-red-400'>Earing</p>
                                        </Link>
                                        <Link to="/collection/necklace">
                                            <p className='text-gray-500 text-sm hover:text-red-400'>Neckpieces</p>
                                        </Link>
                                        <Link to="/collection/handaccessories">
                                            <p className='text-gray-500 text-sm hover:text-red-400'>Bracelets</p>
                                        </Link>
                                        <Link to="/collection/rings">
                                            <p className='text-gray-500 text-sm hover:text-red-400  '>Rings</p>
                                        </Link>
                                        <Link to="/collection/anklets">
                                            <p className='text-gray-500 text-sm hover:text-red-400'>Anklets</p>
                                        </Link>
                                        <Link to="/collection/hairaccessories">
                                            <p className='text-gray-500 text-sm hover:text-red-400'>Hair Accessories</p>
                                        </Link>
                                    </div>

                                    <div>
                                        <h3 className='text-red-300 font-semibold mb-2 text-xl leading-4'>COLLECTION</h3>
                                        <p className='text-gray-500 text-sm'>Under 99</p>
                                        <p className='text-gray-500 text-sm'>The Soft Girl Essentials</p>
                                        <p className='text-gray-500 text-sm'>Funks & Quirks</p>
                                        <p className='text-gray-500 text-sm'>The Executive Ensemble</p>
                                        <p className='text-gray-500 text-sm'>  The Glam Goddess</p>
                                        <p className='text-gray-500 text-sm'> The Desi Girl Collection</p>
                                        <p className='text-gray-500 text-sm'> The Party-Night Collection</p>
                                        <p className='text-gray-500 text-sm'>The Boho Banjaran</p>
                                        <p className='text-gray-500 text-sm'>The Great Indian Celebration Collection</p>


                                    </div>
                                    <div>
                                        <h3 className='text-red-300 font-semibold mb-2 text-xl leading-4'>TYPE</h3>
                                        <p className='text-gray-500 text-sm'>Anti Tarnish</p>
                                        <p className='text-gray-500 text-sm'>Minimalist</p>
                                        <p className='text-gray-500 text-sm'>Statement</p>
                                        <p className='text-gray-500 text-sm'>Pearl</p>
                                        <p className='text-gray-500 text-sm'>Hoops</p>

                                    </div>
                                </div>
                            )}
                    </li>

                    <li
                        className='hover:text-pink-300 list-none pb-5'
                        onMouseEnter={() => setActiveMenu("occasion")}
                        onMouseLeave={() => setActiveMenu(null)} >
                        Occasion Wear ▾
                        {
                            activeMenu === "occasion" && (
                                <div className='bg-white flex border border-black h-80 w-200 p-10 gap-15 pb-4 mt-3 absolute left-1/2 -translate-x-1/2'>
                                    <div>
                                        <h3 className='text-red-300 font-semibold mb-2 text-xl'>  VIEW ALL <br />NEW ARRIVALS <br /> STYLE WITH</h3>
                                        <Link to="/products/indian">
                                            <p className='text-gray-500 text-sm hover:text-red-400'>Indian Wear</p>
                                        </Link>
                                        <Link to="/products/western">
                                            <p className='text-gray-500 text-sm hover:text-red-400'>Western Wear</p>
                                        </Link>
                                    </div>
                                    <div>
                                        <h3 className='text-red-300 font-semibold mb-2 text-xl leading-4'>  CATEGORY</h3>
                                        <Link to="/collection/earring">
                                            <p className='text-gray-500 text-sm  hover:text-red-400'>Earing</p>
                                        </Link>
                                        <Link to="/collection/neckpieces">
                                            <p className='text-gray-500 text-sm hover:text-red-400'>Neckpieces</p>
                                        </Link>
                                        <Link to="/collection/bracelets">
                                            <p className='text-gray-500 text-sm hover:text-red-400'>Bracelets</p>
                                        </Link>
                                        <Link to="/collection/haathphool">

                                            <p className='text-gray-500 text-sm hover:text-red-400'>Haathphool</p>
                                        </Link>
                                        <Link to="/collection/rings">
                                            <p className='text-gray-500 text-sm hover:text-red-400  '>Rings</p>
                                        </Link>
                                        <Link to="/collection/anklets">
                                            <p className='text-gray-500 text-sm hover:text-red-400'>Anklets</p>
                                        </Link>
                                        <Link to="/collection/hairaccessories">
                                            <p className='text-gray-500 text-sm hover:text-red-400'> Hair Accessories</p>
                                        </Link>
                                        <Link to="/collection/maangtikka">
                                            <p className='text-gray-500 text-sm hover:text-red-400'>Maangtikka</p>
                                        </Link>
                                        <Link to="/collection/necklacesets">
                                            <p className='text-gray-500 text-sm hover:text-red-400'>Necklace Sets</p>
                                        </Link>
                                        <Link to="/collection/bridalsets">
                                            <p className='text-gray-500 text-sm hover:text-red-400'>Bridal Sets</p>
                                        </Link>
                                        <Link to="/collection/necklacesets">
                                            <p className='text-gray-500 text-sm hover:text-red-400'>Necklace Sets</p>
                                        </Link>
                                    </div>


                                    <div>
                                        <h3 className='text-red-300 font-semibold mb-2 text-xl leading-4'>COLLECTION</h3>
                                        <p className='text-gray-500 text-sm'>Apsara</p>
                                        <p className='text-gray-500 text-sm'>Shringaar</p>
                                        <p className='text-gray-500 text-sm'>Swatantra</p>
                                        <p className='text-gray-500 text-sm'>Rangrez</p>
                                        <p className='text-gray-500 text-sm'>Rangoli</p>
                                        <p className='text-gray-500 text-sm'>Saumya</p>
                                        <p className='text-gray-500 text-sm'>Maryada</p>
                                        <p className='text-gray-500 text-sm'> Collectibl</p>
                                    </div>

                                    <div>
                                        <h3 className='text-red-300 font-semibold mb-2 text-xl text-center leading-4 '>TYPE</h3>
                                        <p className='text-gray-500 text-sm'>Engagement</p>
                                        <p className='text-gray-500 text-sm'>Haldi - Mehendi</p>
                                        <p className='text-gray-500 text-sm'>Cocktail</p>
                                        <p className='text-gray-500 text-sm'>Wedding</p>
                                        <p className='text-gray-500 text-sm'>Reception</p>
                                    </div>
                                </div>

                            )
                        }

                    </li>
                    <Link to="/collection/gifting">

                        <li className='hover:text-pink-300 pb-5'>Gifting</li>
                    </Link>
                </ul>

            </div >


            <div className=' lg:mx-6 mx-2 block md:block lg:hidden
      bg-[url("https://everstylish.com/media/wysiwyg/occasion-wear/occasion-m.jpg")]
      h-100 bg-cover bg-center'>
            </div>

            <div className='flex gap-2 lg:mx-6 mx-2 overflow-x-auto py-2 items-center text-center'>

                <Link to="/collection/anklets">
                    <div className='relative cursor-pointer lg:min-w-30 min-w-30 md:min-w-25 text-center'>
                        <img src="https://everstylish.com/media/wysiwyg/occasion-wear/O-ANKLETS.jpg" alt="" className='object-cover' />
                        <h2 className='absolute inset-0 flex items-end justify-center lg:pb-4
        text-white text-lg font-semibold lg:text-xl'>  Anklets</h2>
                    </div>
                </Link>

                <Link to="/collection/earring">
                    <div className='relative cursor-pointer lg:min-w-30 min-w-30 md:min-w-25  text-center'>
                        <img src="https://everstylish.com/media/wysiwyg/occasion-wear/O-EARRINGS.jpg" alt="" className='w-full h-full object-cover' />
                        <h2 className='absolute inset-0 flex items-end justify-center lg:pb-4
        text-white text-lg font-semibold lg:text-xl'>EarRing</h2>
                    </div>
                </Link>


                <Link to="/collection/handaccessories">
                    <div className='relative cursor-pointer lg:min-w-30 min-w-30 md:min-w-25  text-center'>
                        <img src="https://everstylish.com/media/wysiwyg/occasion-wear/O-RINGS.jpg" alt="" className='w-full h-full object-cover' />
                        <h2 className='absolute inset-0 flex items-end justify-center lg:pb-4
        text-white text-lg font-semibold lg:text-xl'>Rings</h2>
                    </div>
                </Link>

                <Link to="/collection/necklace">
                    <div className='relative cursor-pointer lg:min-w-30 min-w-30 md:min-w-25 text-center'>
                        <img src="https://everstylish.com/media/wysiwyg/occasion-wear/O-NECKPIECES.jpg" alt="" className='w-full h-full object-cover' />
                        <h2 className='absolute inset-0 flex items-end justify-center lg:pb-4
        text-white text-lg font-semibold lg:text-xl'>NeckPieces</h2>
                    </div>
                </Link>

                <Link to="/collection/handaccessories">
                    <div className='relative cursor-pointer lg:min-w-30 min-w-30 md:min-w-25  text-center'>
                        <img src="https://everstylish.com/media/wysiwyg/occasion-wear/O-BRACELETS.jpg" alt="" className='w-full h-full object-cover' />
                        <h2 className='absolute inset-0 flex items-end justify-center lg:pb-4
        text-white text-lg font-semibold lg:text-xl'>Bracelets</h2>
                    </div>
                </Link>

                <Link to="/collection/hairaccessories">
                    <div className='relative cursor-pointer lg:min-w-30 min-w-30 md:min-w-25  text-center'>
                        <img src="https://everstylish.com/media/wysiwyg/occasion-wear/O-HAIR-ACCESSORIES.jpg" alt="" className='w-full h-full object-cover' />
                        <h2 className='absolute inset-0 flex items-end justify-center lg:pb-4
        text-white text-md font-semibold lg:text-xl'>Hair accessories</h2>
                    </div>
                </Link>

            </div>



            <div className='relative  cursor-pointer lg:mx-6 mx-2'>
                <img src="https://everstylish.com/media/wysiwyg/occasion-wear/hand-embroidered-clutches-1440.jpg" alt="" className='w-full h-full object-cover' />

                <div className='absolute inset-0 flex justify-end items-end mb-2 mr-2 lg:mb-12 lg:mr-12'>
                    <Link to="/products/handclutches/">
                        <button className='bg-white text-black rounded-full px-2 py-1 lg:px-8 lg:py-4 lg:text-xl text-sm lg:font-semibold hover:text-white hover:bg-slate-400 cursor-pointer'>
                            SHOP NOW</button>
                    </Link>
                </div>

            </div>

            <div className='flex lg:mx-6 mx-2 my-2'>

                <div className='relative cursor-pointer w-1/2  '>
                    <img src="https://everstylish.com/media/wysiwyg/occasion-wear/Western_Wear_1.jpg" alt="" className='w-full h-full object-cover' />

                    <Link to="/products/western">
                        <div className='absolute inset-0  flex items-end justify-center pb-4'>
                            <h2 className='text-white lg:text-4xl text-lg font-semibold lg:pb-4'>WESTERN WEAR</h2>
                        </div>
                    </Link>
                </div>

                <div className='relative cursor-pointer w-1/2'>
                    <img src="https://everstylish.com/media/wysiwyg/occasion-wear/Indian_Wear_2.jpg" alt="" className='w-full h-full object-cover' />

                    <Link to="/products/indian">
                        <div className='absolute inset-0  flex items-end justify-center lg:pb-4'>
                            <h2 className='text-white text-lg lg:text-4xl text-md font-semibold pb-4'>INDIAN WEAR</h2>
                        </div>
                    </Link>

                </div>

            </div>

            <div>
                <h1 className='text-center text-3xl md:text-2xl lg:text-4xl font-serif lg:mt-6 mt-2'>Collection</h1>

                <div className='flex items-center justify-center gap-3 mt-1'>
                    <div className='w-3 h-3 bg-pink-900 rounded-full'></div>
                    <div className='w-1/3 h-0.5 bg-pink-400'></div>
                    <div className='w-3 h-3 bg-pink-900 rounded-full'></div>
                </div>

                <div className='flex gap-2 mt-3 lg:mx-6 mx-2'>

                    <div className='relative cursor-pointer w-1/2'>
                        <img src="https://everstylish.com/media/wysiwyg/occasion-wear/Maryada.jpg" alt="" className='w-full h-full object-cover' />
                        <Link to="/products/maryada">
                            <div className='absolute inset-0  flex items-end justify-center lg:pb-4'>
                                <h2 className='text-white text-lg lg:text-4xl text-md font-semibold'>MARYADA</h2>
                            </div>
                        </Link>

                    </div>

                    <div className='relative cursor-pointer w-1/2'>
                        <img src="https://everstylish.com/media/wysiwyg/occasion-wear/Shringaar.jpg" alt="" className='w-full h-full object-cover' />
                        <Link to="/products/shringaar">
                            <div className='absolute inset-0  flex items-end justify-center lg:pb-4'>
                                <h2 className='text-white text-lg lg:text-4xl text-md font-semibold'>SHRINGAAR</h2>
                            </div>
                        </Link>
                    </div>

                </div>

                <div className='relative cursor-pointer mt-3 lg:mx-6 mx-2'>
                    <img src="https://everstylish.com/media/wysiwyg/occasion-wear/Apsara-img.jpg" alt="" className='w-full h-full object-cover' />
                    <Link to="/products/apsara">
                        <div className='absolute inset-0  flex items-end justify-center lg:pb-4'>
                            <h2 className='text-white text-2xl lg:text-4xl text-md font-semibold'>APSARA</h2>

                        </div>
                    </Link>
                </div>


                <div className='flex gap-3 mt-3 lg:mx-6 mx-2'>

                    <div className='relative cursor-pointer w-1/2 '>
                        <img src="https://everstylish.com/media/wysiwyg/occasion-wear/Rangoli.jpg" alt="" className='w-full h-full object-cover' />
                        <Link to="/products/rangoli">
                            <div className='absolute inset-0 flex items-end justify-center lg:pb-4'>
                                <h2 className='text-white text-lg lg:text-4xl text-md font-semibold'>RANGOLI</h2>
                            </div>
                        </Link>
                    </div>

                    <div className='relative cursor-pointer w-1/2'>
                        <img src="https://everstylish.com/media/wysiwyg/occasion-wear/Saumya.jpg" alt="" className='w-full h-full object-cover' />
                        <Link to="/products/saumya">
                            <div className='absolute inset-0  flex items-end justify-center lg:pb-4'>
                                <h2 className='text-white lg:text-3xl font-bold'>SAUMYA</h2>
                            </div>
                        </Link>

                    </div>

                </div>



                <div className='flex gap-3 mt-2 lg:mx-6 mx-2'>

                    <div className='relative cursor-pointer w-1/2'>
                        <img src="https://everstylish.com/media/wysiwyg/occasion-wear/Rangrez.jpg" alt="" className='w-full h-full object-cover' />
                        <Link to="/products/rangrez">
                            <div className='absolute inset-0  flex items-end justify-center lg:pb-4'>
                                <h2 className='text-white text-lg lg:text-4xl text-md font-semibold'>RANGREZ</h2>
                            </div>
                        </Link>
                    </div>

                    <div className='relative cursor-pointer w-1/2'>
                        <img src="https://everstylish.com/media/wysiwyg/occasion-wear/Swatantra.jpg" alt="" className='w-full h-full object-cover' />
                        <Link to="/products/swatantra/">
                            <div className='absolute inset-0  flex items-end justify-center lg:pb-4'>
                                <h2 className='text-white text-lg lg:text-4xl text-md font-semibold'>SWATANTRA</h2>
                            </div>
                        </Link>
                    </div>

                </div>



                <div className='flex gap-3 mt-2 lg:mx-6 mx-2'>

                    <div className='relative cursor-pointer w-1/2'>
                        <img src="https://everstylish.com/media/wysiwyg/occasion-wear/Collectibles.jpg" alt="" className='w-full h-full object-cover' />
                        <Link to="/products/collectibles">
                            <div className='absolute inset-0  flex items-end justify-center lg:pb-4'>
                                <h2 className='text-white text-lg lg:text-4xl text-md font-semibold'>COLLECTIBLES</h2>
                            </div>
                        </Link>
                    </div>


                    <div className='relative cursor-pointer w-1/2'>
                        <Link to="/collection/all">
                            <img src="https://everstylish.com/media/wysiwyg/occasion-wear/View_All.jpg" alt="" className='w-full h-full object-cover' />
                            <div className='absolute inset-0  flex items-end justify-center lg:pb-4'>
                                <h2 className='text-white text-lg lg:text-4xl text-md font-semibold'>VIEW ALL</h2>
                            </div>
                        </Link>
                    </div>


                </div>
            </div>

            <div className=' lg:mx-6  mx-2'>
                <h1 className='text-center lg:text-5xl text-3xl font-serif mt-6'>ABOUT US</h1>
                <div className='flex items-center justify-center gap-3 mt-1'>
                    <div className='w-3 h-3 bg-pink-900 rounded-full'></div>
                    <div className='w-1/3 h-0.5 bg-pink-400'></div>
                    <div className='w-3 h-3 bg-pink-900 rounded-full'></div>
                </div>

                <div className='items-center text-center lg:font-light lg:mt-6 text-md mt-2 px-2 '>
                    <p >At Saundrya, we believe every celebration deserves jewelry that feels elegant, timeless, and truly special. That’s why each piece in our collection is thoughtfully designed to add beauty, grace, and charm to your unforgettable moments.
                    </p>
                    <p className='p-1'> Whether you are the bride, bridesmaid, wedding guest, or someone who simply loves beautiful jewelry, Sandrya brings together traditional artistry with a modern touch. Every piece is made to feel lightweight and effortlessly luxurious so you can celebrate freely while looking your best.</p>

                    <p>
                        Our collections are inspired by the beauty of Indian celebrations, the elegance of handcrafted craftsmanship, and the confidence jewelry brings to every outfit. Designed with attention to detail and made with love, each creation becomes more than an accessory—it becomes a memory.</p>
                    <p className='p-3'>
                        Celebrate every moment with jewelry crafted to shine with you, only at  <span className='font-black'> Saundrya</span>.</p>
                </div>


            </div>

            <div className='relative lg:mx-6 mx-2 my-6'>
                <div onClick={prev} className=' absolute top-1/2 -translate-y-1/2 -left-5 bg-red-300 text-pink-900 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-10'>
                    ←
                </div>
                {/* TESTIMONIAL GRID */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        testimonials
                            .slice(
                                index,
                                index +
                                (
                                    window.innerWidth >= 1024
                                        ? 3
                                        : window.innerWidth >= 640
                                            ? 2
                                            : 1
                                )
                            )
                            .map((item, index) => (
                                <div key={index} className='border rounded-xl shadow-xl min-h-80 p-6 flex flex-col justify-between text-center'>
                                    <img src={item.image} alt="" className="w-20 h-20 rounded-full mx-auto" />
                                    <p className='text-sm leading-6 text-gray-600 mt-4'>
                                        {item.text}
                                    </p>
                                    <span className='font-medium mt-4 block'>
                                        {item.name}
                                    </span>
                                </div>
                            ))
                    }
                </div>

                {/* RIGHT ARROW */}
                <div
                    onClick={next}
                    className=' absolute top-1/2 -translate-y-1/2 -right-5 bg-red-300 text-pink-900 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-10'>
                    →
                </div>

            </div>


        </>
    )
}

export default Product