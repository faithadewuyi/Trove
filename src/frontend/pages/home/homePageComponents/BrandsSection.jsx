import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BrandLogo from '../homeAssets/BrandLogo.png';
import BrandLogo1 from '../homeAssets/BrandLogo1.png';
import BrandLogo2 from '../homeAssets/BrandLogo2.png';
import BrandLogo3 from '../homeAssets/BrandLogo3.png';
import BrandLogo4 from '../homeAssets/BrandLogo4.png';
import BrandLogo5 from '../homeAssets/BrandLogo5.png';
import BrandLogo6 from '../homeAssets/BrandLogo6.png';
import BrandLogo7 from '../homeAssets/BrandLogo7.png';
import BrandLogo8 from '../homeAssets/BrandLogo8.png';
import BrandLogo9 from '../homeAssets/BrandLogo9.png';
import BrandLogo10 from '../homeAssets/BrandLogo10.png';
import BrandLogo11 from '../homeAssets/BrandLogo11.png';
import BrandLogo12 from '../homeAssets/BrandLogo12.png';

const BrandsSection = () => {
    const settings = {
        dots: false,
        slidesToShow: 4,
        loop:true, 
        centerMode: false,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          
        ],
      };
    
  return (

    <div className=' my-[10rem]'>
         {/* <div className="  py-12 mx-24 bg-darkgray ">
        <Slider {...settings} className='px-12 ml-9 mr-12'>
          <div ><img src={BrandLogo} alt="Brand 1" className="md:w-[8rem] sm:w-[50px]"/></div>
          <div className="mt-[-1rem] sm:mt-0"><img src={BrandLogo1} alt="Brand 2" className="h-[4rem] "/></div>
          <div ><img src={BrandLogo2} alt="Brand 3" className="w-[16rem]"/></div>
           <div className="ml-[3rem] sm:ml-0"><img src={BrandLogo3} alt="Brand 4" className="w-[4rem] " /></div>
          <div><img src={BrandLogo4} alt="Brand 5" className="w-[8rem]" /></div>
          <div><img src={BrandLogo5} alt="Brand 6" className="w-[5rem]"/></div>
          <div><img src={BrandLogo6} alt="Brand 7" className="w-[12rem]"/></div>
          <div className="mt-[-2rem] ml-[3rem] sm:mt-0 sm:ml-0"><img src={BrandLogo7} alt="Brand 8" className="w-[6rem] "/></div>
          <div><img src={BrandLogo8} alt="Brand 9" className="w-[12rem]"/></div>
          <div className="mt-[-2.5rem] ml-[3rem] sm:mt-0 sm:ml-0"><img src={BrandLogo9} alt="Brand 10" className="w-[7rem]"/></div>        
          <div><img src={BrandLogo10} alt="Brand 11" className="w-[10rem]"/></div>
          <div className="mt-[-1.6rem] ml-[3rem] sm:mt-0 sm:ml-0"><img src={BrandLogo11} alt="Brand 12" className="w-[7rem]"/></div>
          <div><img src={BrandLogo12} alt="Brand 13" className="w-[10rem]"/></div>
          
        </Slider>
      </div> */}
<h2 className="text-5xl font-bold text-center my-20 ">Brands We Sell</h2>
<div className="  py-12 mx-24 bg-darkgray ">


        <Slider {...settings} className='px-12 ml-9 mr-12'>
          <div ><img src={BrandLogo} alt="Brand 1" className="md:w-[8rem] sm:w-48 "/></div>
          <div className="mt-[-1rem] sm:mt-0"><img src={BrandLogo1} alt="Brand 2" className="h-[4rem] "/></div>
          <div ><img src={BrandLogo2} alt="Brand 3" className="w-[16rem]"/></div>
           <div className="ml-[3rem] sm:ml-0"><img src={BrandLogo3} alt="Brand 4" className="w-[4rem] " /></div>
          <div><img src={BrandLogo4} alt="Brand 5" className="w-[8rem]" /></div>
          <div><img src={BrandLogo5} alt="Brand 6" className="w-[5rem]"/></div>
          <div><img src={BrandLogo6} alt="Brand 7" className="w-[12rem]"/></div>
          <div className="mt-[-2rem] ml-[3rem] sm:mt-0 sm:ml-0"><img src={BrandLogo7} alt="Brand 8" className="w-[6rem] "/></div>
          <div><img src={BrandLogo8} alt="Brand 9" className="w-[12rem]"/></div>
          <div className="mt-[-2.5rem] ml-[3rem] sm:mt-0 sm:ml-0"><img src={BrandLogo9} alt="Brand 10" className="w-[7rem]"/></div>        
          <div><img src={BrandLogo10} alt="Brand 11" className="w-[10rem]"/></div>
          <div className="mt-[-1.6rem] ml-[3rem] sm:mt-0 sm:ml-0"><img src={BrandLogo11} alt="Brand 12" className="w-[7rem]"/></div>
          <div><img src={BrandLogo12} alt="Brand 13" className="w-[10rem]"/></div>
          
        </Slider>
      </div>


    </div>
  )
}

export default BrandsSection