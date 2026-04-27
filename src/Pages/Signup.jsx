import React from 'react'
import { Link } from 'react-router'
import { useNavigate } from "react-router-dom";


const Signup = () => {
      const navigate = useNavigate()
      const HandleSignup =()=>{
    navigate("/login")
  }
    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>

            <div className='bg-white p-8 rounded-xl shadow-lg w-96'>

                <h2 className='text-2xl font-semibold text-center mb-2'>
                    Sign Up Here
                </h2>

                <p className='text-sm text-gray-500 text-center mb-6'>
                    Please fill in the information below:
                </p>

                <div className='flex flex-col gap-4'>

                     <input type="text" placeholder='First Name'
                        className='border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                    /> 

                    <input type="text" placeholder='Last Name'
                        className='border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />

                    <input type="email" placeholder='E-mail'
                        className='border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />

                    <input
                        type="password"
                        placeholder='Password'
                        className='border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />

                
                    <button onClick={HandleSignup} className='bg-black text-white py-2 rounded-md hover:bg-gray-800 transition'>
                    CREATE ACCOUNT
                    </button>

                </div>
                <p className='text-center mt-2'>Already have an account? <Link to="/login">Sign In</Link> </p>
            </div>

        </div>
    )
}

export default Signup