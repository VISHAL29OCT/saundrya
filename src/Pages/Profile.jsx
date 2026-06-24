import React, { useEffect, useState } from 'react'

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: "", lastName: "", email: "", phone: "", gender: "", birthday: "", country: ""
  })

  const [isEditing, setIsEditing] = useState(false)

  const API_URL = import.meta.env.VITE_API_URL

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = async () => {
    await fetch(`${API_URL}/myprofile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        phone: profile.phone,
        gender: profile.gender,
        birthday: profile.birthday,
        country: profile.country
      })
    })

    alert("Profile updated ")
    setIsEditing(false)
  }

  useEffect(() => {
    fetch(`${API_URL}/myprofile`, {
      headers: {
        Authorization: ` Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        const names = data.name ? data.name.split(" ") : ["", ""]
        setProfile({
          firstName: names[0] || "",
          lastName: names[1] || "",
          email: data.email || "",
          phone: data.phone || "",
          gender: data.gender || "",
          birthday: data.birthday || "",
          country: data.country || ""
        })
      })

  }, [])

  return (

    <div className='max-w-full mx-auto  lg:p-8 p-2  shadow-md bg-pink-50'>

      <h2 className='text-2xl text-orange-600 font-semibold lg:mb-6 mb-2'>
        My Profile
      </h2>

      <div className='lg:grid lg:grid-cols-2  gap-2'>

        <div className='flex flex-col'>
          <label className='lg:mb-2 mb-1 mt-2'>First Name</label>
          <input
            name='firstName'
            value={profile.firstName}
            type="text"
            className='border lg:p-2 p-1 rounded'
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col '>
          <label className='lg:mb-2 mb-1 mt-2'>Last Name</label>
          <input
            name='lastName'
            value={profile.lastName}
            type="text"
            className='border p-2 rounded'
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col'>
          <label className='lg:mb-2 mb-1 mt-2'>Email</label>
          <input
            name='email'
            value={profile.email}
            type="email"
            className='border p-2 rounded'
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col'>
          <label className='lg:mb-2 mb-1 mt-2'>Mobile No.</label>
          <input
            name='phone'
            value={profile.phone}
            type="tel"
            className='border p-2 rounded'
            onChange={handleChange}
          />
        </div>

        <div className='col-span-2 lg:grid grid-cols-3 gap-4'>

          <div className='flex flex-col'>
            <label className='lg:mb-2 mb-1 mt-2'>Gender</label>
            <select
              name='gender'
              value={profile.gender}
              className='border p-2 rounded'
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className='flex flex-col'>
            <label className='lg:mb-2 mb-1 mt-2 '>Birthday</label>
            <input
              name='birthday'
              value={profile.birthday}
              type='date'
              className='border p-2 rounded'
              onChange={handleChange}
            />
          </div>

          <div className='flex flex-col'>
            <label className='lg:mb-2 mb-1 mt-2'>Country</label>
            <input
              name='country'
              value={profile.country}
              type="text"
              className='border p-2 rounded'
              onChange={handleChange}
            />
          </div>

        </div>
      </div>

      <button
        className='mt-6 bg-black text-white px-6 py-2 rounded'
        onClick={() => {
          if (isEditing) {
            handleSave()
          } else {
            setIsEditing(true)
          }
        }}
      >
        {isEditing ? "Save Changes" : "Edit Profile"}
      </button>

    </div>
  )
}

export default Profile