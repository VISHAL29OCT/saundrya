import React from 'react'

const Links = () => {
  return (
    <>
      <div className='relative lg:mx-6 mx-2'>
        <img src="contact.jpg"
          className='absolute inset-0 w-full h-full object-cover' />

        <div className='absolute inset-0 bg-black/70'></div>

        <div className='relative z-10 text-white'>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-10 py-10'>

            <div>
              <h2 className='font-semibold text-white'>QUICK LINKS</h2>
              <div className='flex flex-col gap-2 mt-3 cursor-pointer text-sm'>
                <p className='text-white/70 hover:text-white transition'>Press & Media</p>
                <p className='text-white/70 hover:text-white transition'>Store Locator</p>
                <p className='text-white/70 hover:text-white transition'>Our Story</p>
                <p className='text-white/70 hover:text-white transition'>Contact Us</p>
                <p className='text-white/70 hover:text-white transition'>Careers</p>
                <p className='text-white/70 hover:text-white transition'>Blogs</p>
                <p className='text-white/70 hover:text-white transition'>Request Exchange</p>
                <p className='text-white/70 hover:text-white transition'>SHOP ALL</p>
              </div>
            </div>

            <div>
              <h2 className='font-semibold text-white'>POLICY LINKS</h2>
              <div className='flex flex-col gap-2 mt-3 cursor-pointer text-sm'>
                <p className='text-white/70 hover:text-white transition'>Terms and Conditions</p>
                <p className='text-white/70 hover:text-white transition'>Privacy Policy</p>
                <p className='text-white/70 hover:text-white transition'>Shipping Policy</p>
                <p className='text-white/70 hover:text-white transition'>Exchange & Repair Policy</p>
                <p className='text-white/70 hover:text-white transition'>FAQ</p>
              </div>
            </div>

            <div>
              <h2 className='font-semibold text-white'>CONTACT US</h2>
              <div className='flex flex-col gap-2 mt-3 text-sm'>
                <p className='font-semibold text-white'>
                  Order status, delivery issues related queries
                </p>
                <p className='text-white/70'>
                  email us at:{' '}
                  <span className='font-light hover:underline cursor-pointer text-rose-300'>
                    customercare@saundrya.in
                  </span>
                </p>
                <p className='text-white/70'>Mon - Fri (10 AM - 6 PM)</p>
              </div>
            </div>

            <div>
              <h2 className='font-semibold text-white'>NEWSLETTERS</h2>
              <div className='flex flex-col gap-2 mt-3 text-sm'>
                <p className='text-white/70'>Sign Up to get our latest updates & offers</p>
                <input
                  type="email"
                  placeholder='E-mail'
                  className='border border-white/30 bg-white/10 text-white placeholder:text-white/50 py-2 px-4 w-full outline-none focus:border-white transition'
                />
          
                    <button className="relative mt-5 bg-black border border-black text-white px-8 py-2 overflow-hidden group ">
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
        </div>
      </div>
    </>
  )
}

export default Links