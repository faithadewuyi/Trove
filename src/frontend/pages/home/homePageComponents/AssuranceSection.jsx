import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { ImHeadphones } from "react-icons/im";
import { IoShieldCheckmark } from "react-icons/io5";

const AssuranceSection = () => {
  return (
    <>
    <div className="py-12 my-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className=" text-center flex flex-col items-center">
          {/* <FontAwesomeIcon icon="fa-solid fa-truck" /> */}
          <div className=" bg-btn  animate-bounce p-2 rounded-full">  <TbTruckDelivery className="text-white bg-black h-20 w-20  p-2 rounded-full" /></div>
           
            <i className="fas fa-shipping-fast text-4xl text-blue-500"></i>
            <h3 className=" text-xl font-bold mt-4">Fast Shipping</h3>
            <p className="mt-2 text-gray-600">Get your orders delivered quickly.</p>
          </div>
          <div className="text-center flex flex-col items-center">
             <div className=" bg-btn  animate-bounce p-2 rounded-full">  <ImHeadphones className="text-white bg-black h-20 w-20 p-4 rounded-full" /></div>
            <h3 className="text-xl font-bold mt-4">Easy Returns</h3>
            <p className="mt-2 text-gray-600">Hassle-free returns within 30 days.</p>
          </div>
          <div className="text-center flex flex-col items-center">
             <div className=" bg-btn  animate-bounce p-2 rounded-full">  <IoShieldCheckmark className="text-white bg-black h-20 w-20 p-4 rounded-full" /></div>
            {/* <IoShieldCheckmark className="text-black h-8 w-8 animate-bounce " / */}
            <h3 className="  text-xl font-bold mt-4">24/7 Support</h3>
            <p className="mt-2 text-gray-600">We're here to help you anytime.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AssuranceSection