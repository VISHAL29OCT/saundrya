import React from 'react'
// import { Link } from "react-router-dom";
import { useState } from 'react'
import axios from "axios";

const Login = ({ open, setOpen, openSignup, setIsLoggedIn }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      setIsLoggedIn(true);
      setOpen(false);

      alert("Login Successful");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };
  if (!open) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={() => setOpen(false)}
      >


        <div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-400 z-50 w-[90%] max-w-md p-6 rounded-xl shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >

          <div className="flex justify-between items-center my-8">
            <h2 className="text-3xl font-semibold text-orange-800">
              Login Here
            </h2>

            <button
              type="button"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>


          </div>

          <p className='text-md text-white text-center mb-8'>
            Enter your account credentials
          </p>

          <form className='flex flex-col gap-8  min-h-62 '>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-3 rounded  placeholder:text-gray-300"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-3 mb-4 rounded  placeholder:text-gray-300"
            />


            <button
              type='button'
              onClick={handleLogin}
              className="w-full bg-red-400 text-white p-3 rounded"
            >

              LOGIN
            </button>
          </form>

          <p className='text-center my-4 text-sm'>
            Don't have an account?{" "}
            <span
              onClick={openSignup}
              className='text-blue-500 hover:underline cursor-pointer'
            >
              Sign up
            </span>
          </p>

        </div >
      </div >
    </>

  )
}
export default Login