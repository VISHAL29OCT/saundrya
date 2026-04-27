import React from 'react'

const Links = () => {
    return (
        <>
            <div className='flex justify-around mt-5'>
                <div>
                    <h2 className='font-semibold'>POLICY LINKS</h2>

                    <div className='flex flex-col gap-2 mt-3 cursor-pointer'>
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Shipping Policy</p>
                        <p>Exchange & Repair Policy</p>
                        <p>FAQ</p>
                    </div>
                </div>

                <div>
                    <h2 className='font-semibold'>QUICK LINKS</h2>
                    <div className='flex flex-col gap-2 mt-3 cursor-pointer'>
                        <p>Press & Media</p>
                        <p>Store Locator</p>
                        <p>Our Story</p>
                        <p>Contact Us</p>
                        <p>Careers</p>
                        <p>Blogs</p>
                        <p>Request Exchange</p>
                        <p>SHOP ALL</p>
                    </div>
                </div>

                <div>
                   
                    <h2 className='font-semibold'>NEWSLETTERS</h2>
                     <div className='flex flex-col gap-2 mt-3 cursor-pointer'>
                    <p>Sign Up to get our latest updates & offers</p>
                    <input type="email" placeholder='E-mail' className='border py-2 px-6' />

                    <button className="relative bg-black border border-black text-white px-8 py-2 overflow-hidden group w-1/2 ">
                        {/* white overlay */}
                        <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full"></span>

                        {/* text */}
                        <span className="relative z-10 group-hover:text-black">
                            SUBSCRIBE
                        </span>
                    </button>
                </div>
                </div>

            </div>
        </>
    )
}

export default Links