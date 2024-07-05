import React from 'react'
import AboutSectionImage from '../homeAssets/aboutSection.png'
const AboutSection = () => {
  return (
    <>
        <div className="py-12 mx-12 my-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-[-4rem]">
            <img src={AboutSectionImage} alt="About Luxe Trove" className="w-full rounded-lg" />
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-20 lg:mt-0">
            <h2 className="text-5xl font-bold">About Luxe Trove</h2>
            <p className="mt-4 text-lg  leading-loose">
            <span className='font-title text-btn font-extrabold text-3xl '>Luxe Trove </span>is your ultimate online destination for <span className='font-bold'> "Pre-Loved"</span>  designer clothing, specializing in exquisite garments that exude timeless elegance and impeccable craftsmanship. <br/>
              Step into a world where <span className='font-bold'> "Luxury Fashion"</span>  meets sustainability, as we offer a curated selection of authentic, gently-worn treasures from the most coveted designer brands.<br/> 
              Experience the joy of uncovering hidden gems as you browse our meticulously curated selection of pre-owned designer clothing, shoes, and bags for both men and women.<br/> 
              Each item in our collection has been carefully authenticated and inspected to ensure the highest standards of quality, ensuring that you can shop with confidence.<br/><br/>
            < span  className='font-bold'>"We having industry expert that authenticate the designs, also with premium you get to get styling and suggestions of things to match what you buy!"</span> 
            </p>
            <button className="mt-6 py-2 px-4 bg-btn text-black font-semibold rounded-lg shadow-md hover:bg-btnHover ">
            Learn More </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection