import React from 'react'

const Search = ({ open, setOpen }) => {
    return (
        <>
            {open && (
                <div 
                  className="fixed inset-0 bg-black/40 z-40"
                  onClick={() => setOpen(false)}
                />
            )}

            <div className={`fixed top-20 left-0 w-full bg-white z-50 
                transform transition-all duration-500 ease-out
                ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>

                <div className='flex justify-between items-center px-4 py-4 border-b'>

                    <input 
                      type="text" 
                      placeholder='Search products...' 
                      className='w-full p-3 outline-none'
                    />

                    <button onClick={() => setOpen(false)}>❌</button>

                </div>
            </div>
        </>
    )
}

export default Search