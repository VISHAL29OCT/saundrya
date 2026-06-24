import React, { useState } from 'react'

const Signup = ({ open, setOpen, openLogin }) => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = (e) => {
    e.preventDefault()

    const user = {
      firstName,
      lastName,
      email,
      password
    }

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    )

    alert("Account Created Successfully!")

    setOpen(false)

    openLogin()
  }

  if (!open) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 "
        onClick={() => setOpen(false)}
      >
        <div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-400 z-50 w-[90%] max-w-md p-6  rounded-xl shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >

          <div className="flex justify-between items-center py-3">
             <h2 className="text-3xl font-semibold text-orange-800">
              Signup Here
            </h2>

            <button
              type="button"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          <p className='text-md text-white text-center mb-6'>
            Please fill in the information below
          </p>

          <form
            onSubmit={handleSignup}
            className=' min-h-62 flex flex-col gap-4'
          >

            <input
              type="text"
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='border px-4 py-2 rounded-md  placeholder:text-gray-300'
            />

            <input
              type="text"
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='border px-4 py-2 rounded-md  placeholder:text-gray-300'
            />

            <input
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border px-4 py-2 rounded-md  placeholder:text-gray-300'
            />

            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='border px-4 py-2 rounded-md  placeholder:text-gray-300'
            />

            <button
              type="submit"
              className="w-full bg-red-400 text-white p-3 rounded"
            >
              CREATE ACCOUNT
            </button>

          </form>

          <p className='text-center py-3 text-sm'>
            Already have an account?{" "}
            <span
              onClick={() => {
                setOpen(false)
                openLogin()
              }}
              className='text-blue-500 hover:underline cursor-pointer'
            >
              Sign In
            </span>
          </p>

        </div>
      </div>
    </>
  )
}

export default Signup