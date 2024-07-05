import  { useState } from 'react';
import { Link } from 'react-router-dom';

import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import LogoOne from "./navbarAssets/logoOne.svg"
import LogoTwo from "./navbarAssets/logoTwo.svg"
import AddToCart from '../../../Components/PRODUCT PAGE/AddToCart';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <nav className="bg-white shadow-lg  fixed top-0 w-full z-10">
      <div className="container mx-auto md:px-20 sm:px-2">
        {/* First Row */}
        <div className="flex justify-between items-center">
          <div  className="hidden md:flex " >
            <img src={LogoTwo} alt="logo" className=" w-16 h-16 " />
          </div>
          <div className='md:hidden'>
            <img src={LogoOne} alt="logo" className="w-14 h-14 " />
          </div>
          <div className="hidden md:flex flex-1 mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-darkgray rounded-md focus:outline-none  focus:ring-btn focus:border-btn focus:z-10 "
            />
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/wishlist" className="hidden lg:block">
              <span className="material-symbols-outlined text-darkblue hover:text-primaryred">
                favorite
              </span>
            </Link>
            <Link to ="/account">
            <span className="material-symbols-outlined text-darkblue hover:text-primaryred">
          person
        </span>
           </Link>
           <AddToCart/>
           
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-black  focus:outline-none"
            >
              {isOpen ? <IoCloseSharp className="w-8 h-8 bg-btn p-1" /> : <HiMenuAlt3 className="w-8 h-8 bg-btn p-1" />}

              
            </button>
          </div>
        </div>
        {/* Second Row */}
        <div className={`md:flex items-center justify-between mt-2 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="container  mx-auto px-4 pb-2 flex flex-col md:flex-row md:items-center md:w-[70%] md:justify-around md:space-x-4">
          <div className="md:hidden mt-2 ">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none  focus:ring-btn focus:border-btn focus:z-10"
              />
            </div>
            <Link 
            to="/" className="py-2 text-gray-600 hover:font-bold">
              Home</Link>

            <Link to="/Men" className="py-2 text-textcol  hover:font-bold ">Men
            </Link>
            <Link 
            to ="/women" className="py-2 text-gray-600 hover:font-bold">
              Women
              </Link>
            <Link
             to="/brandproduct" className="py-2 text-gray-600 hover:font-bold">Brands</Link>
             <Link
             to="/auct" className="py-2 text-gray-600 hover:font-bold">Auction</Link>
            {/*  */}
            {/* <a href="#" className="py-2  text-red-500 hover:font-bold">Sales</a> */}
            <Link to="/blog" className="py-2 text-gray-600 hover:font-bold">Blog
            </Link>
            <div className='flex items-center pt-2  '>
            <Link to ="/sell" className="py-1 mr-5 text-black font-medium  bg-lightgray hover:font-bold px-4 rounded-md text-center w-40 sm:w-50 sm:px-1">Sell with Luxe
            </Link>
            <Link 
            to="/signin" className="py-1 font-medium md:mt-0  bg-btn px-4 rounded-md text-black hover:font-bold text-center w-40  sm:w-50 sm:px-1">Login
            </Link>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
