import React from 'react'
import { Link } from 'react-router'
const HeroSection2 = () => {
    return (
        <>
            <div className='h-auto'>
                <div className="overflow-hidden whitespace-nowrap py-2 lg:mx-6 mx-2">

                    {/* LEFT MOVE */}
                    <div className="marquee-left gap-5 text-xs">
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                    </div>

                </div>
                <div className=' lg:mx-6 mx-2'>
                    <picture>
                        <source media="(max-width:full)" srcSet="mobbg6.webp" />
                       <Link to="/collection/luxe">
                        <img src="bg4.webp" alt="" className='w-full h-full object-cover' />
                        </Link>
                    </picture>
                </div>



                <div className="overflow-hidden whitespace-nowrap py-2 lg:mx-6 mx-2">
                    <div className="marquee-right gap-5 text-xs">
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>
                        <span>SAUNDRYA Brands</span>

                    </div>

                </div>

            </div>
            <div className='lg:mx-6 mx-2'>
<Link to= "/ourstores">
                <img src="bg5.webp" className='w-[96vw] h-full lg:w-[96vw] lg:h-[80vh] sm:h-[60vh] object-cover' />
           </Link>
            </div>
        </>
    )
}

export default HeroSection2