import React from 'react'
import { Link } from 'react-router'

const Slider = ({ open, setOpen }) => {
    return (
        <>
            {open && (
                <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setOpen(!open)}>
                </div>
            )}
            <div className={`fixed overflow-y-auto top-0 left-0 h-full w-[80%] sm:w-[60%] md:w-[40%] lg:w-1/3 bg-white z-50 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"}`} >
                <div className="p-4">
                    <button onClick={() => setOpen(!open)} className='mb-9'>❌</button>

                    <div className='flex flex-col gap-5 font-sans'>
                        <Link to="/collection/bestseller">
                            <div onClick={() => setOpen(!open)} className='border-b cursor-pointer pb-4 mt-5 '>KERAN :KUNDAN JWELLERY</div>
                        </Link>

                        <Link to="/collection/springsummer">
                            <div onClick={() => setOpen(!open)} className='border-b cursor-pointer pb-4 '>SPRING SUMMER</div>
                        </Link>
                        <Link to="/collection/silver">
                            <div onClick={() => setOpen(!open)} className='border-b cursor-pointer pb-4'>CHANDRO 925 SILVER</div>
                        </Link>
                        <Link to="/collection/bestseller">
                            <div onClick={() => setOpen(!open)} className='border-b cursor-pointer pb-4'>BESTSELLERS</div>
                        </Link>
                        <Link to="/collection/lastchance">
                            <div onClick={() => setOpen(!open)} className='border-b cursor-pointer pb-4'>LAST CHANCE</div>
                        </Link>
                        <Link to="/collection/all">
                            <div onClick={() => setOpen(!open)} className='border-b cursor-pointer pb-4'>JWELLERY</div>
                        </Link>
                        <Link to="/collection/bags">
                            <div onClick={() => setOpen(!open)} className='border-b cursor-pointer pb-4'>BAGS</div>
                        </Link>
                        <Link to="/celebrity-spotting">
                            <div onClick={() => setOpen(!open)} className='border-b cursor-pointer pb-4'>SPOTTINGS</div>
                        </Link>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Slider