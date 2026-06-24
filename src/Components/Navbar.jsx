import React, { useEffect } from 'react'
import { FaSearch, FaUser, FaShoppingBag, FaHeart } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router';
import Slider from '../Pages/Slider';
import Search from './Search';
import Cart from './Cart';
import Account from '../Pages/Account';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

const Navbar = ({ cart, increaseQty, decreaseQty, removeFromCart, isLoggedIn, setIsLoggedIn }) => {
  const [open, setOpen] = useState(false)
  const [profileopen, setprofileOpen] = useState(false)
  const [SearchOpen, setSearchOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [open])

  useEffect(() => {
    if (SearchOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [SearchOpen])
  return (
    <>
      <nav className="flex justify-between items-center sm:px-6  mx-2 lg:mx-6 py-6 lg:py-4 border-b sticky top-0 bg-white z-30">
        <div className='text-xl sm:text-2xl cursor-pointer' onClick={() => setOpen(!open)}>☰</div>
        <Slider open={open} setOpen={setOpen} />
        <Link to="/" className='absolute left-1/2 -translate-x-1/2'>
          <div className='font-semibold tracking-widest cursor-pointer text-lg sm:text-2xl text-rose-400'>SAUNDRYA</div>
        </Link>
        <div className='flex items-center gap-3 sm:gap-5 text-xl ' >

          <FaSearch className='hidden lg:block  font-light cursor-pointer hover:text-gray-500 transition text-lg sm:text-xl'
            onClick={() => setSearchOpen(!SearchOpen)} />
          <Search open={SearchOpen} setOpen={setSearchOpen} />


          <FaUser className='cursor-pointer hover:text-gray-500 transition text-lg sm:text-xl' onClick={() => {
            if (isLoggedIn) {
              setprofileOpen(true)
            } else {
              setLoginOpen(true)
            }
          }} />

          <Account open={profileopen} setOpen={setprofileOpen} setIsLoggedIn={setIsLoggedIn} />
          <Login
            open={loginOpen}
            setOpen={setLoginOpen}
            setIsLoggedIn={setIsLoggedIn}
            openSignup={() => {
              setLoginOpen(false)
              setSignupOpen(true)
            }}
          />
          <Signup
            open={signupOpen}
            setOpen={setSignupOpen}
            openLogin={() => {
              setSignupOpen(false)
              setLoginOpen(true)
            }}
          />

          <Link to="/mywishlist">
            <FaHeart className='cursor-pointer hover:text-red-500 transition text-lg sm:text-xl' />
          </Link>


          <FaShoppingBag onClick={() => setCartOpen(true)} className='text-black cursor-pointer hover:text-red-800 transition text-lg sm:text-xl' />
          <span>{cart.length}</span>
          <Cart
            open={cartOpen}
            setOpen={setCartOpen}
            cart={cart}
            removeFromCart={removeFromCart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
          />
        </div>
      </nav>

    </>
  )
}

export default Navbar