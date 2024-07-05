
// import ForgotPass from './sigUpAssest/forgotPass.jpg'
// import { FaRegCircleCheck } from "react-icons/fa6";

// const SignUpSuccessful = () => {
 
//   return (
//     <div className="min-h-screen md:flex">
//       {/* Left Column: Image */}
//       <div className="md:w-1/2 bg-cover bg-center sm:w-full " style={{ backgroundImage: `url(${ForgotPass})` }}>
//         {/* You can also use an <img> tag if you prefer */}
//       </div>

//       {/* Right Column: Form */}
//       <div className="md:w-1/2 flex items-center justify-center p-8 sm:w-full">
//         <div className="max-w-md w-full space-y-8">
//         <p><FaRegCircleCheck  className="w-20 h-20 text-green-500" /></p>
//           <h2 className="text-4xl font-extrabold text-textcol pb-4">Check Your Mail Box</h2>
//           {/* <p className="text-xl text-textcol">Create your account to start shopping</p> */}
//           <p className="sm:text-sm md:text-xl text-textcol mt-3">we have sent a confirmation mail for your response. please 
//           ensure to check your spam folder if you can’t find it in your inbox.</p>

//           <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <button
//                 type="submit"
//                 className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-btn hover:bg-btnHover focus:outline-none focus:ring-2 focus:ring-offset-2"
//               >
//                Back To Home Page
//               </button>
//             </div>
//           </form>
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpSuccessful;
import React, { useState } from 'react';
import bgSuccessful from './sigUpAssest/Success.jpg'
import { FaRegCircleCheck } from "react-icons/fa6";

const SignUpSuccessful = () => {
  
 

  return (
    <div className="min-h-screen md:flex">
      {/* Left Column: Image */}
      <div className="md:w-1/2 bg-cover bg-center sm:w-full " style={{ backgroundImage: `url(${bgSuccessful})` }}>
        {/* You can also use an <img> tag if you prefer */}
      </div>

      {/* Right Column: Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8 sm:w-full">
        <div className="max-w-md w-full space-y-8">
        <p><FaRegCircleCheck  className="w-20 h-20 text-green-500" /></p>
        <h2 className="text-3xl font-extrabold text-green-500 pb-4">Sign Up Successful!</h2>

          <h2 className="text-4xl font-extrabold text-textcol pb-4">Check Your Mail Box!</h2>
          {/* <p className="text-xl text-textcol">Create your account to start shopping</p> */}
          <span className="sm:text-sm md:text-xl text-textcol mt-3">We have sent a confirmation mail for your response. Please ensure to check your spam folder if you can’t find it in your inbox.</span>
    

          <form className="mt-8 space-y-6" >
            <div>
              <button
                type="submit"
                className="group  relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-black bg-btn hover:bg-btnHover focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Back To Home Page
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpSuccessful;
