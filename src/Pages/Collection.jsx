import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import products from '../data/productsarray'

const Collection = ({ addToCart }) => {
    const { category, query } = useParams()
    const [sortOption, setSortOption] = useState("")
    const { filter } = useParams()
    const [open, setOpen] = useState(null)
    const [price, setPrice] = useState(5000)
    const [selectedFilter, setSelectedFilter] = useState("")
    const [gridCols, setGridCols] = useState("lg:grid-cols-4")
    const [showSort, setShowSort] = useState(false)
    const [visibleProducts, setVisibleProducts] = useState(20)

    const filteredProducts = products.filter((item) => {

        const priceValue = Number(
            item.price.replace(/[₹,\s]/g, "")
                .replace(".00", "")
        )

        if (priceValue > price) return false


        // Search
        if (
            query &&
            !item.name
                .toLowerCase()
                .includes(query.toLowerCase())
        ) {
            return false
        }


        // Category
        if (
            category &&
            category !== "all" &&
            item.type !== category
        ) {
            return false
        }


        // Main filter
        if (
            filter &&
            filter !== "all" &&
            item[filter] !== true
        ) {
            return false
        }

        // Selected filter
        if (
            selectedFilter &&
            !item[selectedFilter]
        ) {
            return false
        }

        return true

    })
    const sortedProducts = [...filteredProducts]

    if (sortOption === "low") {

        sortedProducts.sort((a, b) => {

            return (
                Number(a.price.replace("₹", "").replace(".00", "")) -
                Number(b.price.replace("₹", "").replace(".00", ""))
            )

        })

    }

    if (sortOption === "high") {

        sortedProducts.sort((a, b) => {

            return (
                Number(b.price.replace("₹", "").replace(".00", "")) -

                Number(a.price.replace("₹", "").replace(".00", ""))
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

    const headings = {
        bestseller: "Best Seller",
        necklace: "Necklace",
        latest: "Latest",
        earring: "Earring",
        handaccessories: "Hand Accessories",
        hairaccessories: "Hair Accessories",
        festival: "Festival Picks",
        gifting: "Gifting",
        party: "Party",
        traditional: "Traditional",
        vacation: "Vacation Ready",
        luxe: "Parishiri",
        shaadi: "The Shaadi Edit",
        bags: "Bags",
        feathers: "Daily Jewels",
        anklets: "Anklets"
    }
    const para = {
        bestseller: "Discover our most loved pieces, handpicked by customers.",
        necklace: "Elegant necklaces and chokers crafted for every occasion.",
        latest: "Explore our newest arrivals and fresh designs.",
        earring: "From studs to statement earrings, find your perfect pair.",
        handaccessories: "Bracelets, bangles and hathphools to elevate your style.",
        hairaccessories: "Beautiful hair accessories for every look.",
        festival: "Celebrate every festival with our festive collection.",
        gifting: "Thoughtful gifts that make every moment special.",
        party: "Stand out with dazzling party-ready accessories.",
        traditional: "Timeless traditional designs inspired by heritage.",
        vacation: "Lightweight and stylish pieces for your next getaway.",
        luxe: "Premium handcrafted jewellery with a luxurious touch.",
        shaadi: "Wedding-ready jewellery for every celebration.",
        bags: "Stylish bags and clutches to complete your outfit.",
        feathers: "Everyday jewellery designed for effortless elegance.",
        anklets: "Graceful anklets to add charm to every step."
    }

    let heading = category || headings[filter] || "All Products"

    if (query) {
        heading = `Search: ${query}`
    }

    const paragraph = para[category] || para[filter] || "Explore our exquisite collection of jewellery and accessories, crafted to elevate your style for every occasion."


    const dynamicFilters = {
        earring: {
            collection: [
                "Earrings & Ear crawlers",
                "maangtikka"
            ],

            style: [
                "Chaandbali",
                "Chandbalis",
                "Danglers",
                "Ear stacks",
                "Earchains",
                "Earcrawler",
                "Earcuff",
                "Earcuffs",
                "Earrings",
                "Jhumka",
                "Kaan chain",
                "Studs"
            ]
        },
        bags: {
            collection: [
                "NanoBags",
                "bags",
                "OtherAccessories"
            ],

            style: [
                "Batua",
                "BucketBags",
                "Clutches",
                "Clutch",
                "MoneyEnvelope",
                "NanoBags",
                "Potli",
                "ShoulderBag",
                "SlingBag",
            ]
        },

        necklace: {
            collection: [
                "Necklace Set",
                "Necklaces & Chokers"
            ],

            style: [
                "Chains",
                "Choker",
                "Chokers",
                "Hasli",
                "Jewelery Set",
                "Jewellery Set",
                "Necklace",
                "Necklace Set",
                "Necklaces",
                "Pendant",
            ]
        },
        handaccessories: {
            collection: [
                "Bracelets & Hathphools"
            ],

            style: [
                "Bangles"
            ]
        },
        hairaccessories: {
            collection: [
                "Parandi",
                "Hair Accessories"
            ],

            style: [
                "Gajra",
                "Hair Accessories",
                "Hair Clips / Pins",
                "Hair Harness",
                "Hairbands",
                "Hairpins",
                "Head Jewels",
                "Parandi",
                "Ponycuff",
                "Rakhi"
            ]
        },
        default: {
            collection: [
                "necklace",
                "earring",
                "rings",
                "bags",
                "hairaccessories",
                "handaccessories",
                "Maangtikka",
                "Necklace Set",
                "other Accessories",
            ],

            style: [
                "bangles",
                "bracelet",
                "jhumka",
                "pendants",
                "studs",
                "Hairbands",
                "Maangtika",
                "Necklace Set",
                "Rings",
                "Shoulder Bags",
                "Studs"
            ]
        }
    }

    const currentFilter =
        dynamicFilters[filter] ||
        dynamicFilters[category] ||
        dynamicFilters.default

    useEffect(() => {
        setSelectedFilter("")
    }, [filter, category])

    return (
        <>
        <div className='mx-2 lg:mx-6'>
            <div className='bg-[url("https://www.amama.in/cdn/shop/collections/Untitled_Capture5166.jpg?v=1742365330&width=1200")] lg:bg-cover lg:bg-center relative lg:h-80 h-full w-full text-center flex flex-col justify-center items-center'>
                <h2 className='text-white lg:text-4xl text-2xl sm:p-4'>{heading.toUpperCase()}</h2>
                <p className='text-white text-md text-center p-4  lg:text-2xl '>{para[filter] || para[category] || "Discover our latest arrivals and fresh designs."}</p>
            </div>
            </div>

            <div className='flex justify-between items-center border-y mx-2 lg:mx-6  '>

                <div className='w-[25%] flex gap-3  p-3'>
                    <button
                        onClick={() => setGridCols("lg:grid-cols-4")}
                        className='border py-1 px-2 hover:bg-black hover:text-white'
                    >
                        ::
                    </button>

                    <button
                        onClick={() => setGridCols("lg:grid-cols-5")}
                        className='border py-1 px-2 hover:bg-black hover:text-white'
                    >
                        :::
                    </button>

                    <button
                        onClick={() => setGridCols("lg:grid-cols-2")}
                        className='border  py-1 px-2 hover:bg-black hover:text-white'
                    >
                        ━━
                    </button>
                </div>

                <div className=' p-4 w-[50%] '>

                </div>

                <div className='lg:px-6  flex justify-end relative w-[30%] p-1'>
                    <button
                        onClick={() => setShowSort(!showSort)}
                        className='p-3 text-xl '
                    >
                        Sort By ↓
                    </button>

                    {
                        showSort && (

                            <div className='absolute top-12 bg-white shadow-xl border w-52 z-50'>

                                <div
                                    onClick={() => {
                                        setSortOption("low")
                                        setShowSort(false)
                                    }}
                                    className='p-3 hover:bg-gray-100 cursor-pointer'
                                >
                                    Price: Low to High
                                </div>

                                <div
                                    onClick={() => {
                                        setSortOption("high")
                                        setShowSort(false)
                                    }}
                                    className='p-3 hover:bg-gray-100 cursor-pointer'
                                >
                                    Price: High to Low
                                </div>

                                <div
                                    onClick={() => {
                                        setSortOption("az")
                                        setShowSort(false)
                                    }}
                                    className='p-3 hover:bg-gray-100 cursor-pointer'
                                >
                                    Name: A-Z
                                </div>

                                <div
                                    onClick={() => {
                                        setSortOption("za")
                                        setShowSort(false)
                                    }}
                                    className='p-3 hover:bg-gray-100 cursor-pointer'
                                >
                                    Name: Z-A
                                </div>

                            </div>

                        )
                    }
                </div>
            </div >

            <div className='flex gap-2 flex-wrap mb-4 mt-4 mx-2 lg:mx-4'>

                {filter && (
                    <div className='px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2'>
                        {filter}
                        <button>
                            ✕
                        </button>
                    </div>
                )}

                {selectedFilter && (
                    <div className='px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2'>
                        {selectedFilter}
                        <button
                            onClick={() => setSelectedFilter("")}
                        >
                            ✕
                        </button>
                    </div>
                )}

            </div>

            <div className='flex mx-2 lg:mx-6 py-2 items-start bg-pink-50'>
                <div className='w-[30%] mr-2'>
                    <div className='flex flex-col gap-2 lg:gap-4 font-sans'>

                        <div className='border-b pb-2 lg:pb-4'>
                            <div className='cursor-pointer llg:pl-3 flex justify-between'
                                onClick={() => setOpen(open === "collection" ? null : "collection")} >
                                <span>Collection</span>
                                <span>{open === "collection" ? "-" : "+"}</span>
                            </div>

                            {open === "collection" && (
                                <div className='lg:pl-6 mt-2 flex flex-col gap-2 text-gray-500'>

                                    {
                                        currentFilter.collection.map((item) => (
                                            <label
                                                key={item}
                                                onClick={() => setSelectedFilter(item)}
                                                className='cursor-pointer'
                                            >
                                                {item}
                                            </label>
                                        ))
                                    }

                                </div>
                            )}

                        </div>

                        <div className='border-b pb-4'>
                            <div className='cursor-pointer lg:pl-3 flex justify-between'
                                onClick={() => setOpen(open === "style" ? null : "style")} >
                                <span>STYLE</span>
                                <span>{open === "style" ? "-" : "+"}</span>
                            </div>

                            {open === "style" && (
                                <div className='lg:pl-6 mt-2 flex flex-col gap-2 text-gray-500'>
                                    {
                                        currentFilter.style.map(item => (
                                            <label
                                                key={item}
                                                onClick={() => setSelectedFilter(item)}
                                                className='cursor-pointer'
                                            >
                                                {item}
                                            </label>
                                        ))
                                    }
                                </div>
                            )}
                        </div>

                        <div className='border-b pb-4'>
                            <div className='cursor-pointer lg:pl-3 flex justify-between'
                                onClick={() => setOpen(open === "discount" ? null : "discount")} >
                                <span>DISCOUNT</span>
                                <span>{open === "discount" ? "-" : "+"}</span>
                            </div>

                            {open === "discount" && (
                                <div className='lg:pl-6 mt-2 flex flex-col gap-2 text-gray-500'>
                                    <label onClick={() => setSelectedFilter("discount30")}
                                        className='cursor-pointer'>
                                        Upto 30%
                                    </label>

                                    <label onClick={() => setSelectedFilter("discount50")}
                                        className='cursor-pointer'>
                                        30-50 %
                                    </label>

                                    <label onClick={() => setSelectedFilter("discount50more")}
                                        className='cursor-pointer'>
                                        More than 50%
                                    </label>
                                </div>
                            )}
                        </div>

                        <div className='border-b pb-4'>
                            <div className='cursor-pointer lg:pl-3 flex justify-between'
                                onClick={() => setOpen(open === "brand" ? null : "brand")} >
                                <span>BRAND</span>
                                <span>{open === "brand" ? "-" : "+"}</span>
                            </div>

                            {open === "brand" && (
                                <div className='lg:pl-6 mt-2 flex flex-col gap-2 text-gray-500'>
                                    <label onClick={() => setSelectedFilter("accessories24")}
                                        className='cursor-pointer'>
                                        ACCESSORIES SS'24
                                    </label>

                                    <label onClick={() => setSelectedFilter("accessories25")}
                                        className='cursor-pointer'>
                                        ACCESSORIES'25
                                    </label>

                                    <label onClick={() => setSelectedFilter("badhai")}
                                        className='cursor-pointer'>
                                        BADHAI HO!
                                    </label>
                                    <label onClick={() => setSelectedFilter("basara")}
                                        className='cursor-pointer'>
                                        BASRAA WEDDING
                                    </label>
                                    <label>
                                        DAILY JEWELS
                                    </label>
                                    <label onClick={() => setSelectedFilter("darpana")}
                                        className='cursor-pointer'>
                                        DARPANA
                                    </label>
                                    <label>
                                        KIRAN MALA
                                    </label>
                                    <label>
                                        RANGREZ
                                    </label>
                                    <label onClick={() => setSelectedFilter("rozaana")}
                                        className='cursor-pointer'>
                                        ROZAANA
                                    </label>
                                    <label onClick={() => setSelectedFilter("spring")}
                                        className='cursor-pointer' >
                                        SPRING SUMMER
                                    </label>
                                    <label onClick={() => setSelectedFilter("sajavat")}
                                        className='cursor-pointer'>
                                        SAJAVAT
                                    </label>
                                    <label onClick={() => setSelectedFilter("others")}
                                        className='cursor-pointer'>
                                        OTHERS
                                    </label>
                                </div>
                            )}
                        </div>

                        <div className='border-b pb-4'>
                            <div className='cursor-pointer lg:pl-3 flex justify-between'
                                onClick={() => setOpen(open === "price" ? null : "price")} >
                                <span>PRICE</span>
                                <span>{open === "price" ? "-" : "+"}</span>
                            </div>

                            {open === "price" && (
                                <div className='lg:pl-6 mt-2 flex flex-col gap-2 text-gray-500'>
                                    <span className='pr-2'>400</span>
                                    <input type="range"
                                        min="400"
                                        max="5000"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className='w-1/2'
                                    />
                                    <span className='pr-2'>5000</span>
                                </div>
                            )}
                        </div>

                        <div className='border-b cursor-pointer pb-4 lg:pl-3'>color</div>

                        <div className='border-b pb-4'>
                            <div className='cursor-pointer lg:pl-3 flex justify-between'
                                onClick={() => setOpen(open === "occasion" ? null : "occasion")} >
                                <span>OCCASION</span>
                                <span>{open === "occasion" ? "-" : "+"}</span>
                            </div>

                            {open === "occasion" && (
                                <div className='lg:pl-6 mt-2 flex flex-col gap-2 text-gray-500'>
                                    <label onClick={() => setSelectedFilter("daily")}
                                        className='cursor-pointer'>
                                        Daily Jewels
                                    </label>

                                    <label onClick={() => setSelectedFilter("festive")}
                                        className='cursor-pointer'>
                                        Festive Jewels
                                    </label>

                                    <label onClick={() => setSelectedFilter("homedecor")}
                                        className='cursor-pointer'>
                                        Home Décor
                                    </label>
                                    <label onClick={() => setSelectedFilter("party")}
                                        className='cursor-pointer'
                                    >Party Jewels</label>
                                    <label onClick={() => setSelectedFilter("wedding")}
                                        className='cursor-pointer'>
                                        Wedding Edit
                                    </label>
                                </div>
                            )}
                        </div>
                        <div className='border-b pb-4'>
                            <div className='cursor-pointer lg:pl-3 flex justify-between'
                                onClick={() => setOpen(open === "platings" ? null : "platings")} >
                                <span>PLATINGS</span>
                                <span>{open === "platings" ? "-" : "+"}</span>
                            </div>

                            {open === "platings" && (
                                <div className='lg:pl-6 mt-2 flex flex-col gap-2 text-gray-500'>
                                    <label onClick={() => setSelectedFilter("crystals")}
                                        className='cursor-pointer'>
                                        Crystals
                                    </label>
                                    <label onClick={() => setSelectedFilter("goldplated")}
                                        className='cursor-pointer'>
                                        Gold Plated
                                    </label>
                                    <label onClick={() => setSelectedFilter("handembrided")}
                                        className='cursor-pointer'>
                                        Hand Embroided
                                    </label>
                                    <label onClick={() => setSelectedFilter("silverplated")}
                                        className='cursor-pointer'>
                                        Silver Plated
                                    </label>
                                    <label onClick={() => setSelectedFilter("kundan")}
                                        className='cursor-pointer'>
                                        Kundan
                                    </label>

                                    <label onClick={() => setSelectedFilter("pearl")}
                                        className='cursor-pointer'>
                                        Pearl
                                    </label>
                                    <label onClick={() => setSelectedFilter("limited")}
                                        className='cursor-pointer'>
                                        Limited Edition
                                    </label>
                                    <label onClick={() => setSelectedFilter("preciousstones")}
                                        className='cursor-pointer'>
                                        Semi-precious stones
                                    </label>
                                    <label onClick={() => setSelectedFilter("silver")}
                                        className='cursor-pointer'>
                                        Silver
                                    </label>
                                    <label onClick={() => setSelectedFilter("silverplatted")}
                                        className='cursor-pointer'>
                                        Silver Platted
                                    </label>
                                </div>
                            )}
                        </div>


                    </div>
                </div>


                <div className='w-[70%] lg:p-2'>
                    <div className={`grid grid-cols-2 md:grid-cols-3 ${gridCols} lg:gap-4 gap-2 self-start`}>
                        {
                            sortedProducts
                                .slice(0, visibleProducts)
                                .map((item) =>

                                    <div key={item.id} className='relative group cursor-pointer'>
                                        <Link to={`/product/${item.id}`}>
                                            <img
                                                src={item.img}
                                                className='w-full h-full object-cover '
                                            />
                                        </Link>
                                        <div className='absolute top-3 right-3 flex flex-row gap-3 opacity-0 group-hover:opacity-100 transition-duration-300'>

                                            <button onClick={() => addToCart(item)} className='bg-white p-2 rounded-full shadow'>🛒</button>
                                        </div>
                                    </div>
                                )

                        }
                    </div>
                    {
                        visibleProducts < sortedProducts.length && (

                            <div className='flex justify-center mt-5'>
                                <button onClick={() =>
                                    setVisibleProducts(
                                        prev => prev + 20
                                    )}
                                    className='bg-pink-300  px-4 py-1 my-2 rounded-full hover:scale-102 transition'>
                                    Load More
                                </button>
                            </div>

                        )
                    }

                </div>
            </div>


        </>
    )
}

export default Collection