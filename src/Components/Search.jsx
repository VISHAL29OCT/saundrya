import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Search = ({ open, setOpen }) => {
    const navigate = useNavigate()
    const [search, setSearch] = useState("")

    return (
        <>
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            <div className={`fixed lg:top-20 top-12 left-0  w-full bg-white z-50 
                transform transition-all duration-500 ease-out
                ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>

                <div className='flex justify-between items-center lg:py-4  px-2 py-2 border-b'>
                    <input autoFocus
                        type="text"
                        placeholder='Search products...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && search.trim()) {
                                navigate(`/search/$encodeURIComponent{search}`)
                                setOpen(false)
                            }
                        }} className='w-full p-3 outline-none' />

                    <button onClick={() => setOpen(false)}>❌</button>

                </div>
            </div>
        </>
    )
}

export default Search