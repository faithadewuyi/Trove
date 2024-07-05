// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { FaHeart } from "react-icons/fa";
// import { BsCart } from "react-icons/bs";
// import MSection from '../homeAssets/MSection.png'


// const MenSection = () => {
//   const settings = {
//     // *with out motion
//     // dots: true,
//     // infinite: true,
//     // speed: 500,
//     // slidesToShow: 3,
//     // slidesToScroll: 1,
    

//     // *with motion
//     dots: false,
//     slidesToShow: 3,
//     loop:true, 
//     centerMode: false,
//     slidesToScroll: 1,
//     autoplay:true,
//     autoplaySpeed:1500,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
      
//     ],
//   };

//   const products = [
//     {
//       id: 1,
//       title: 'Luxury Dress',
//       price: '$200',
//       originalPrice: '$250',
//       image: new URL('../homeAssets/MSection1.png',import.meta.url).href,
//     },
//     {
//       id: 2,
//       title: 'Elegant Handbag',
//       price: '$150',
//       originalPrice: '$180',
//       image: new URL('../homeAssets/MSection2.png',import.meta.url).href,
//     },
//     {
//         id: 3,
//         title: 'Elegant Handbag',
//         price: '$150',
//         originalPrice: '$180',
//         image: new URL('../homeAssets/MSection3.png',import.meta.url).href,
//       },
//       {
//         id: 4,
//         title: 'Elegant Handbag',
//         price: '$150',
//         originalPrice: '$180',
//         image: new URL('../homeAssets/MSection4.png',import.meta.url).href,
//       },
//       {
//         id: 5,
//         title: 'Elegant Handbag',
//         price: '$150',
//         originalPrice: '$180',
//         image: new URL('../homeAssets/MSection5.png',import.meta.url).href,
//       },
//     // Add more products here
//   ];

//   return (
//     <div className="bg-gray-100 p-6 mx-12 my-12">
//       <div className="md:flex md:space-x-6 mb-12">
//         <div className="md:w-1/2">
//           <img
//             src={MSection}
//             alt="Luxury Fashion"
//             className="w-full h-auto rounded-lg shadow-lg"
//           />
//         </div>
//         <div className="md:w-1/2 flex flex-col justify-center mt-6 md:mt-0">
//           <h2 className="text-3xl font-bold text-gray-800">Featured Men's Collection</h2>
//           <p className="mt-4 text-gray-600">
//             Explore curated luxury thrift items for women
//           </p>
//           <button className="mt-6 py-2 px-4 bg-btn text-black font-semibold rounded-lg shadow-md hover:bg-btnHover ">
//             View All Categories </button>
//         </div>
//       </div>
//       <div >
//         <Slider {...settings} > 
//           {products.map(product => (
//             <div key={product.id} className="p-4">
//               <div className="bg-lightgray  rounded-lg shadow-lg relative">
//                 <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-t-lg" />
//                 <div className="flex  justify-between absolute top-0 right-4 w-full">
//                     <h4 className='bg-black text-white px-4 rounded-tl-lg rounded-br-lg ml-4'>New Arrival</h4>
//                   < FaHeart className="h-6 w-6 text-gray-800  pr-1 pt-1 hover:text-btn" />
//                 </div>
//                 <div className="p-4">
//                    {/* <a className=" absolute top-48 right-1 mt-4 py-2 px-4 w-32 bg-btn text-textcol font-semibold rounded-lg shadow-md hover:bg-btnHover focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"><BsCart /> Add to CarT</a> */}
//                    <a className="flex  items-center absolute top-[12.5rem] right-[0rem] rounded-tl-lg mt-4 py-2 px-4 bg-btn text-textcol font-semibold shadow-md hover:bg-btnHover focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 "><BsCart className="mr-1"/> Add to Cart</a>

//                 </div>
//                 <div className=" pb-4 ml-4 text-left">
//                   <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
//                   <div className='flex items-center w-60'>
//                     <p className="text-textcol font-extrabold text-3xl mr-4">{product.price}</p>
//                     <p className="text-gray-600 font-medium text-xl line-through">{product.originalPrice}</p>
//                     </div>
                  
                  
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default MenSection;
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import MSection from '../homeAssets/MeSection001.png'


const MenSection = () => {
  
  const products = [
    {
      id: 1,
      title: 'Luxury Dress',
      price: '$200',
      originalPrice: '$250',
      image: new URL('../homeAssets/MSection2.png',import.meta.url).href,
    },
    {
      id: 2,
      title: 'Elegant Handbag',
      price: '$150',
      originalPrice: '$180',
      image: new URL('../homeAssets/MSection6.png',import.meta.url).href,
    },
    {
        id: 3,
        title: 'Elegant Handbag',
        price: '$150',
        originalPrice: '$180',
        image: new URL('../homeAssets/MSection7.png',import.meta.url).href,
      },
      {
        id: 4,
        title: 'Elegant Handbag',
        price: '$150',
        originalPrice: '$180',
        image: new URL('../homeAssets/MSection10.png',import.meta.url).href,
      },
      {
        id: 5,
        title: 'Elegant Handbag',
        price: '$150',
        originalPrice: '$180',
        image: new URL('../homeAssets/MSection14.png',import.meta.url).href,
      },{
        id: 6,
        title: 'Elegant Handbag',
        price: '$150',
        originalPrice: '$180',
        image: new URL('../homeAssets/MSection17.png',import.meta.url).href,
      },
      {
          id: 7,
          title: 'Elegant Handbag',
          price: '$150',
          originalPrice: '$180',
          image: new URL('../homeAssets/MSection15.png',import.meta.url).href,
        },
        {
          id: 8,
          title: 'Elegant Handbag',
          price: '$150',
          originalPrice: '$180',
          image: new URL('../homeAssets/MSection19.png',import.meta.url).href,
        },
        {
          id: 9,
          title: 'Elegant Handbag',
          price: '$150',
          originalPrice: '$180',
          image: new URL('../homeAssets/MSection11.png',import.meta.url).href,
        },
        {
          id: 10,
          title: 'Elegant Handbag',
          price: '$150',
          originalPrice: '$180',
          image: new URL('../homeAssets/MSection13.png',import.meta.url).href,
        },
        {
          id: 11,
          title: 'Elegant Handbag',
          price: '$150',
          originalPrice: '$180',
          image: new URL('../homeAssets/MSection9.png',import.meta.url).href,
        },
        {
          id: 12,
          title: 'Elegant Handbag',
          price: '$150',
          originalPrice: '$180',
          image: new URL('../homeAssets/MSection18.png',import.meta.url).href,
        },
    // Add more products here
  ];

  return (
    <div className="bg-gray-100 p-6 mx-12 my-12">
      <div className="md:flex md:space-x-6 mb-12">
        <div className="md:w-1/2">
          <img
            src={MSection}
            alt="Luxury Fashion"
            className="w-72 h-72 rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center mt-6 md:mt-0">
          <h2 className="text-3xl font-bold text-gray-800">Featured Men's Collection</h2>
          <p className="mt-4 text-gray-600">
            Explore curated luxury thrift items for women
          </p>
          <button className="mt-6 py-2 px-4 bg-btn text-black font-semibold rounded-lg shadow-md hover:bg-btnHover ">
            View All Categories </button>
        </div>
      </div>
      <div >
      {/* <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8"> */}

        <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="p-4">
              {/* grid style setting */}
              {/* <div className="bg-lightgray  rounded-lg shadow-lg relative"> */}
              <div className="border-slate-300 border rounded-lg shadow-md relative">

                <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-t-lg" />
                <div className="flex  justify-between absolute top-0 right-4 w-full">
                    <h4 className='bg-black text-white px-4 rounded-tl-lg rounded-br-lg ml-4'>New Arrival</h4>
                  < FaHeart className="h-6 w-6 text-gray-800  pr-1 pt-1 hover:text-btn" />
                </div>
                <div className="p-4">
                   {/* <a className=" absolute top-48 right-1 mt-4 py-2 px-4 w-32 bg-btn text-textcol font-semibold rounded-lg shadow-md hover:bg-btnHover focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"><BsCart /> Add to CarT</a> */}
                   <a className="flex  items-center absolute top-[12.5rem] right-[0rem] rounded-tl-lg mt-4 py-2 px-4 bg-btn text-textcol font-semibold shadow-md hover:bg-btnHover focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 "><BsCart className="mr-1"/> Add to Cart</a>

                </div>
                <div className=" pb-4 ml-4 text-left">
                  <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                  <div className='flex items-center justify-between pr-8 w-60 mt-2'>
                    <p className="text-textcol font-extrabold text-base mr-4">{product.price}</p>
                    <p className="text-gray-600 font-medium text-base line-through">{product.originalPrice}</p>
                    </div>
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenSection;
