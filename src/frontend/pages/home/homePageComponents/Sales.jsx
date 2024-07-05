
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import SalesHeading from './SalesHeading';

const Sales = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    }

   

  const products = [
    {
      id: 1,
      title: 'Luxury Dress',
      price: '$200',
      originalPrice: '$250',
      image: new URL('../homeAssets/SMSection1.png',import.meta.url).href,
    },
    {
      id: 2,
      title: 'Elegant Handbag',
      price: '$150',
      originalPrice: '$180',
      image: new URL('../homeAssets/SFSection1.png',import.meta.url).href,

    },
    {
        id: 3,
        title: 'Elegant Handbag',
        price: '$150',
        originalPrice: '$180',
        image: new URL('../homeAssets/SMSection2.png',import.meta.url).href,
      },
      {
        id: 4,
        title: 'Elegant Handbag',
        price: '$150',
        originalPrice: '$180',
        image: new URL('../homeAssets/SFsection4.jpg',import.meta.url).href,
      },
      {
        id: 5,
        title: 'Elegant Handbag',
        price: '$150',
        originalPrice: '$180',
        image: new URL('../homeAssets/SMSection3.png',import.meta.url).href,
      },
      {
        id: 6,
        title: 'Elegant Handbag',
        price: '$150',
        originalPrice: '$180',
        image: new URL('../homeAssets/SFsection3.jpg',import.meta.url).href,
      },
      {
        id: 7,
        title: 'Elegant Handbag',
        price: '$150',
        originalPrice: '$180',
        image: new URL('../homeAssets/SMSection4.png',import.meta.url).href,
      },
      {
        id: 8,
        title: 'Elegant Handbag',
        price: '$150',
        originalPrice: '$180',
        image: new URL('../homeAssets/SFsection2.jpg',import.meta.url).href,
      },
      {
        id: 9,
        title: 'Elegant Handbag',
        price: '$150',
        originalPrice: '$180',
        image: new URL('../homeAssets/SMSection5.png',import.meta.url).href,
      },
      {
        id: 10,
        title: 'Elegant Handbag',
        price: '$150',
        originalPrice: '$180',
        image: new URL('../homeAssets/SFSection5.png',import.meta.url).href,
      },
    // Add more products here
  ];

  return (
    <div className="bg-gray-100 p-6 mx-12 mb-20">
      <div>
       <SalesHeading />
      </div>
      <div >
        <Slider {...settings} > 
          {products.map(product => (
            <div key={product.id} className="p-4">
              <div className="rounded-lg shadow-lg relative">
                <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-t-lg" />
                <div className="flex  justify-between absolute top-0 right-4 w-full">
                    <h4 className='bg-red-500 text-xl text-white px-4 rounded-tl-lg rounded-br-lg ml-4'>SALES</h4>
                  < FaHeart className="h-6 w-6 text-gray-800  pr-1 pt-1 hover:text-btn" />
                </div>
                <div className="p-4">
                   {/* <a className=" absolute top-48 right-1 mt-4 py-2 px-4 w-32 bg-btn text-textcol font-semibold rounded-lg shadow-md hover:bg-btnHover focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"><BsCart /> Add to CarT</a> */}
                   <a className="flex  items-center absolute top-[12.5rem] right-[0rem] rounded-tl-lg mt-4 py-2 px-4 bg-btn text-textcol font-semibold shadow-md hover:bg-btnHover focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 "><BsCart className="mr-1"/> Add to Cart</a>

                </div>
                <div className=" pb-4 ml-4 text-left">
                  <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                  <div className='flex justify-between items-center w-60'>
                    <p className="text-red-500 font-extrabold text-base mr-4">Now {product.price}</p>
                    <p className="text-gray-600 font-medium text-base line-through pr-2">Was{product.originalPrice}</p>
                    </div>
                  
                  
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sales;
