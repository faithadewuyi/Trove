import  { useState } from 'react';
import bgSignUP from './sigUpAssest/signup.jpg'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";

const SignUp = () => {
  const [formData, setFormData] = useState({ email: '', password: '', remember: false });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
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
      <div className="md:w-1/2 bg-cover bg-center sm:w-full " style={{ backgroundImage: `url(${bgSignUP})` }}>
        {/* You can also use an <img> tag if you prefer */}
      </div>

      {/* Right Column: Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8 sm:w-full">
        <div className="max-w-md w-full space-y-8">
          <h2 className="text-5xl font-extrabold text-textcol pb-4">Sign In</h2>
          {/* <p className="text-xl text-textcol">Create your account to start shopping</p> */}
          <span className="sm:text-sm md:text-xl text-textcol mt-3">Don&apos;t have an account with Luxe Trove?</span><a href="#"><span className="text-xl font-bold text-btn  pl-2 hover:underline">Sign Up</span></a>
    

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
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                
                  value={formData.password}
                  onChange={handleChange}
                  className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-btn focus:border-btn focus:z-10 sm:text-sm mt-5`}
                  placeholder="Password"
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember"
                  type="checkbox"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-btn  hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-btn hover:bg-btnHover focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Log In
              </button>
            </div>
          </form>

          <div className="mt-6 flex items-center justify-between">
            <hr className="w-full border-t border-gray-300" />
            <span className="px-3 text-gray-500">or</span>
            <hr className="w-full border-t border-gray-300" />
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <button
              className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-btn"
            >
                < FcGoogle  className="w-5 h-5 mr-2"/> Sign up with Google
            </button>
            <button
              className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-btn"
            >
              <FaFacebookF className="w-5 h-5 mr-2 text-blue-700"/> Sign up with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
