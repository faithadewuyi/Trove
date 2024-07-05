import React, { useState } from 'react';
import ForgotPass from './sigUpAssest/forgotPass.jpg'
import { RiEmotionSadFill } from "react-icons/ri";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type} = e.target;
    setFormData((prevData) => ({
      ...prevData
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Submit form
      console.log('Form submitted:', formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="min-h-screen md:flex">
      {/* Left Column: Image */}
      <div className="md:w-1/2 bg-cover bg-center sm:w-full " style={{ backgroundImage: `url(${ForgotPass})` }}>
        {/* You can also use an <img> tag if you prefer */}
      </div>

      {/* Right Column: Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8 sm:w-full">
        <div className="max-w-md w-full space-y-8">
        <p><RiEmotionSadFill className="w-20 h-20 text-red-700" /></p>
          <h2 className="text-4xl font-extrabold text-textcol pb-4">Recover Your Password</h2>
          {/* <p className="text-xl text-textcol">Create your account to start shopping</p> */}
          <p className="sm:text-sm md:text-xl text-textcol mt-3">Don't Worry you can request password reset below! We will send a security code to your registered email address, please make sure it is correct.</p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                 
                  value={formData.email}
                  onChange={handleChange}
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-btn focus:border-btn focus:z-10 sm:text-sm `}
                  placeholder="Email address"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
             
            </div>

            <div className="flex items-center justify-between">
             

              <div className="text-sm">
                <p>For further support, you may visit the <span className='font-bold'>Help center</span> or contact our <span className='font-bold'>Customer support team.</span>  </p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-black bg-btn hover:bg-btnHover focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
               Request Reset Password
              </button>
            </div>
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
