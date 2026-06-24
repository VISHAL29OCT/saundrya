import React from 'react'
import { Link } from 'react-router'
import { useNavigate } from "react-router-dom"


const Account = ({ open, setOpen, setIsLoggedIn }) => {
    const navigate = useNavigate()
    const logout = () => {

        localStorage.removeItem("isLoggedIn")

        setIsLoggedIn(false)

        setOpen(false)
        navigate("/")
    }
    return (

        <>
            {open && (
                <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setOpen(!open)}>
                </div>
            )}
            <div className={`fixed overflow-y-auto top-0 left-0 h-full w-[80%] sm:w-[60%] md:w-[40%] lg:w-[25%] bg-pink-100 z-50 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"}`} >
                <div className="p-4">
                    <button onClick={() => setOpen(!open)} className='mb-9'>❌</button>

                    <div className='flex flex-col gap-2 font-semibold'>
                        <Link to="/profile">
                            <div onClick={() => setOpen(!open)} className=' cursor-pointer pb-4 '>My Profile</div>
                        </Link>
                        <Link to="/myorders">
                            <div onClick={() => setOpen(!open)} className=' cursor-pointer pb-4'>My Orders</div>
                        </Link>
                        <Link to="/mywishlist">
                            <div onClick={() => setOpen(!open)} className=' cursor-pointer pb-4'>My Wishlist</div>
                        </Link>
                        <Link to="/">
                            <div onClick={() => setOpen(!open)} className=' cursor-pointer pb-4'>Saved Address</div>
                        </Link>
                        <div
                            onClick={logout}
                            className='cursor-pointer pb-4 text-red-500'
                        >
                            Logout
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Account