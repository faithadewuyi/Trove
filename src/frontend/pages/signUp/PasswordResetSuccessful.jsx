
import React, { useState } from 'react';
import bgPsdSuccessful from './sigUpAssest/PsdSuccess.jpg'
import { FaRegCircleCheck } from "react-icons/fa6";

const PasswordResetSuccessful = () => {
  
 

  return (
    <div className="min-h-screen md:flex">
      {/* Left Column: Image */}
      <div className="md:w-1/2 bg-cover bg-center sm:w-full " style={{ backgroundImage: `url(${bgPsdSuccessful})` }}>
        {/* You can also use an <img> tag if you prefer */}
      </div>

      {/* Right Column: Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8 sm:w-full">
        <div className="max-w-md w-full space-y-8">
        <p><FaRegCircleCheck  className="w-20 h-20 text-green-500" /></p>
        <h2 className="text-3xl font-extrabold text-green-500 pb-4">Password Reset Successful!</h2>

          <h2 className="text-3xl font-extrabold text-textcol pb-4">You can now use your New Password to Sign In!</h2>
          {/* <p className="text-xl text-textcol">Create your account to start shopping</p> */}    

          <form className="mt-8 space-y-6" >
            <div>
              <button
                type="submit"
                className="group  relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-black bg-btn hover:bg-btnHover focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Back To Sign In Page
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetSuccessful;
