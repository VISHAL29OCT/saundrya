import React from 'react'
import Login from '../Pages/Login'
import { useState } from 'react';
import { Navigate } from 'react-router';
import Signup from '../Pages/Signup';


const ProtectedRoute = ({ children, setIsLoggedIn }) => {
  const isLoggedIn = 
   !!localStorage.getItem("token");

  const [loginOpen, setLoginOpen] = useState(true);
  const [signupOpen, setSignupOpen] = useState(false);
  const [goHome, setGoHome] = useState(false);

  if (goHome) {
    return <Navigate to="/" />;
  }

  if (!isLoggedIn) {
    return (
      <>
        <Login
          open={loginOpen}
          setOpen={(value) => {
            setLoginOpen(value);

            if (!value) {
              setGoHome(true)
            }
          }}

          setIsLoggedIn={setIsLoggedIn}
          openSignup={() => {
            setLoginOpen(false);
            setSignupOpen(true);
          }}
          />

     <Signup
          open={signupOpen}
          setOpen={(value) => {
            setSignupOpen(value);

            if (!value) {
              setGoHome(true);
            }
          }}
          openLogin={() => {
            setSignupOpen(false);
            setLoginOpen(true);
          }}
        />

      </>

    )
  }
  return children;
}

export default ProtectedRoute