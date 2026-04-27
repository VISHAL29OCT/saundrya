import React from 'react'
import { Link, Navigate } from 'react-router'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const HandleLogin =()=>{
    navigate("/")
  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      
      <div className='bg-white p-8 rounded-xl shadow-lg w-96' >
        
        <h2 className='text-2xl font-semibold text-center mb-2'>
          Login Here
        </h2>

        <p className='text-sm text-gray-500 text-center mb-6'>
          Enter your email and password
        </p>

        <div className='flex flex-col gap-4'>
          
          <input  type="email"  placeholder='E-mail' 
            className='border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
          />

          <input 
            type="password" 
            placeholder='Password' 
            className='border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
          />

          <div className='text-right'>
            <a href="#" className='text-sm text-blue-500 hover:underline'>
              Forgot password?
            </a>
          </div>

          <button onClick={HandleLogin} type='submit' className='bg-black text-white py-2 rounded-md hover:bg-gray-800 transition'>
            Login
          </button>

        </div>
        <p className='text-center mt-2'>Don't have an account? <Link to="/signup">Sign up</Link> </p>
      </div>

    </div>
  )
}

export default Login