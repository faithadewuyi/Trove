import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import TestySectionImage from '../homeAssets/TestySection.png'
import Avatar1 from '../homeAssets/Testyavatar1.png'
import Avatar2 from '../homeAssets/TestyAvater2.png'

const TestySection = () => {
  return (
    <>
        <div className="py-12 mx-12">
        <div className="flex flex-col lg:flex-row items-center"> 
        
          <div className="lg:w-1/2">
             <h2 className="pb-4 text-5xl font-bold">Customer Reviews</h2>
             <p className='mb-20'>See what our customers have to say about their Luxe Trove</p>  
            <div className="space-y-8">


              <div className="bg-gray-200 p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <img src={Avatar1} alt="avatar" className="w-6 h-6 rounded-full" />
                  <p className="mt-2 text-gray-600"> - Emilly</p>
                </div>
                  <div className="text-btn flex ">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaRegStarHalfStroke />
                  </div>
                </div>
                
                <p className="ml-4 mb-4">"Found the perfect gucci vintage jacket at a great price!"</p>
              </div>


              <div className="bg-gray-200 p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <img src={Avatar2} alt="avatar" className="w-6 h-6 rounded-full" />
                  <p className="mt-2 text-gray-600">- Alex</p>
                </div>
                  <div className="text-btn flex ">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaRegStarHalfStroke />
                  </div>
                </div>
                
                <p className="ml-4 mb-4">"High-quality items and excellent customer service!"</p>
              </div>

              <div className="bg-gray-200 p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <img src={Avatar2} alt="avatar" className="w-6 h-6 rounded-full" />
                  <p className="mt-2 text-gray-600">- Alex</p>
                </div>
                  <div className="text-btn flex ">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaRegStarHalfStroke />
                  </div>
                </div>
                
                <p className="ml-4 mb-4">"High-quality items and excellent customer service!"</p>
              </div>
             
            </div>
            
            
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            <img src={TestySectionImage} alt="Customer Reviews" className="mt-20 rounded-lg" />
          </div>
        </div>
      </div>
    </>
  )
}

export default TestySection