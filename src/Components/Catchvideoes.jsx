import React from 'react'

const Catchvideoes = () => {
    return (
        <>
        <div className=' flex flex-col items-center justify-center mt-7'>
                <h2 className='text-3xl font-semibold'>Catch the Magic of Amama!</h2>
            <div className=" overflow-hidden flex justify-center pt-5 gap-2">

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-36 h-60 object-cover"
                >
                    <source src="/video1.mp4" type="video/mp4" />
                </video>

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-36 h-60 object-cover"
                >
                    <source src="/video2.mp4" type="video/mp4" />
                </video>

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-36 h-60 object-cover"
                >
                    <source src="/video3.mp4" type="video/mp4" />
                </video>

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-36 h-60 object-cover"
                >
                    <source src="/video4.mp4" type="video/mp4" />
                </video>
            </div>
            </div>

        </>
    )
}

export default Catchvideoes