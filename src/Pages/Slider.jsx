import React from 'react'

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
                        <div className='border-b cursor-pointer pb-4 mt-5 '>KERAN :KUNDAN JWELLERY</div>
                        <div className='border-b cursor-pointer pb-4 '>SPRING SUMMER</div>
                        <div className='border-b cursor-pointer pb-4'>CHANDRO 925 SILVER</div>
                        <div className='border-b cursor-pointer pb-4'>BESTSELLERS</div>
                        <div className='border-b cursor-pointer pb-4'>LAST CHANACE</div>
                        <div className='border-b cursor-pointer pb-4'>JEWLLERY</div>
                        <div className='border-b cursor-pointer pb-4'>BAGS</div>
                        <div className='border-b cursor-pointer pb-4'>SPOTTINGS</div>
                    </div>

                </div>
            </div>

        </>

    )
}

export default Slider