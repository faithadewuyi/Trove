

import footerLogo from './footer-asset/footer-logo-s.svg'
import {BsTwitterX } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import { FaPinterestSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';


// const Footer = () => {
//   return (
//     <footer className="bg-footer text-white py-8">
//       {/* First Row */}
//       <div className="container mx-auto text-center">
//         <h2 className="text-2xl font-semibold">My E-commerce</h2>
//         <p className="mt-2">The best place to buy stuff</p>
//       </div>
//       {/* Second Row */}
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-center md:text-left">
//         <div>
//           <img src={footerLogo} alt="footer logo" />
          
//         </div>
//         <div>
//           <h3 className="font-semibold mb-2">Support</h3>
//           <ul>
//             <li><a href="#" className="hover:underline">Help Center</a></li>
//             <li><a href="#" className="hover:underline">Contact Us</a></li>
//             <li><a href="#" className="hover:underline">Product Help</a></li>
//             <li><a href="#" className="hover:underline">Warranty</a></li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-semibold mb-2">Services</h3>
//           <ul>
//             <li><a href="#" className="hover:underline">Gift Cards</a></li>
//             <li><a href="#" className="hover:underline">Affiliate Program</a></li>
//             <li><a href="#" className="hover:underline">Business Accounts</a></li>
//             <li><a href="#" className="hover:underline">Shipping</a></li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-semibold mb-2">Follow Us</h3>
          
//           <BsTwitter />
//           <SiLinkedin />
//           <BsYoutube />
//           <FaFacebookF />
          
//         </div>
//       </div>
//       {/* Second Row */}
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-center md:text-left">
//         <div>
//           <h3 className="font-semibold mb-2">Company</h3>
//           <img src={footerLogo} alt="footer logo" />
//           <ul>
//             <li><a href="#" className="hover:underline">About Us</a></li>
//             <li><a href="#" className="hover:underline">Careers</a></li>
//             <li><a href="#" className="hover:underline">Press</a></li>
//             <li><a href="#" className="hover:underline">Blog</a></li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-semibold mb-2">Support</h3>
//           <ul>
//             <li><a href="#" className="hover:underline">Help Center</a></li>
//             <li><a href="#" className="hover:underline">Contact Us</a></li>
//             <li><a href="#" className="hover:underline">Product Help</a></li>
//             <li><a href="#" className="hover:underline">Warranty</a></li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-semibold mb-2">Services</h3>
//           <ul>
//             <li><a href="#" className="hover:underline">Gift Cards</a></li>
//             <li><a href="#" className="hover:underline">Affiliate Program</a></li>
//             <li><a href="#" className="hover:underline">Business Accounts</a></li>
//             <li><a href="#" className="hover:underline">Shipping</a></li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-semibold mb-2">Follow Us</h3>
//           <ul>
//             <li><a href="#" className="hover:underline">Facebook</a></li>
//             <li><a href="#" className="hover:underline">Instagram</a></li>
//             <li><a href="#" className="hover:underline">Twitter</a></li>
//             <li><a href="#" className="hover:underline">LinkedIn</a></li>
//           </ul>
//         </div>
//       </div>
//       {/* Third Row */}
//       <div className="container mx-auto text-center mt-8">
//         <p>&copy; 2024 My E-commerce. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
// import React from 'react';

const Footer = () => {
  return (
    <>
    <footer className="bg-footer text-white py-8">
      {/* First Row: Newsletter Subscription */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-amber-400">
        <div className="flex flex-col md:flex-row justify-around items-center mb-8">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Subscribe to our Newsletter<br/><span className="text-base font-normal">Please, Enter your email to receive updates and tips!</span></h2>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-4 rounded-l-md border-none focus:outline-none  shadow-amber-500/40 w-96"
            />
            <button className="bg-btn hover:bg-btnHover text-textcol font-bold py-2 px-4 rounded-r-md shadow-lg shadow-amber-500/20 ">
              Subscribe
            </button>
          </form>
        </div>
      </div>
{/* <hr className='text-footer'/> */}
      {/* Second Row: Links and Logo */}
      <div className="bg-footer pt-4 pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div>
            <img src={footerLogo} alt="footer logo"  className='w-30 h-30' />
            {/* <p className="text-gray-400">Your catchy tagline goes here.</p> */}
          </div>
          {/* Links */}
          <div className='pt-20'>
            <h4 className="font-bold mb-8 ">OUR COMPANY</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-footerTextLink hover:underline  hover:text-btn ">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-footerTextLink hover:underline  hover:text-btn ">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-footerTextLink hover:underline  hover:text-btn ">Return Policy</a></li>
              <li className="mb-2"><a href="#" className="text-footerTextLink hover:underline  hover:text-btn ">Terms & Condition</a></li>
            </ul>
          </div>
          <div className='pt-20'>
            <h4 className="font-bold mb-4">NEED HELP?</h4>
            <ul >
              <li className="mb-2"><a href="#" className="text-footerTextLink hover:underline  hover:text-btn ">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="text-footerTextLink hover:underline  hover:text-btn">FAQs</a></li>
              <li className="mb-2"><a href="#" className="text-footerTextLink hover:underline  hover:text-btn ">Help Center</a></li>
              <li className="mb-2"><a href="#" className="text-footerTextLink hover:underline  hover:text-btn ">Customer Support</a></li>
              <li className="mb-2"><a href="#" className="text-footerTextLink hover:underline  hover:text-btn ">Shipping Info</a></li>

            </ul>
          </div>
          <div className='pt-20'>
            <h4 className="font-bold mb-4">MAKE MONEY WITH LUXE TROVE</h4>
            <ul>
              <li className="mb-2">
                <Link to="/sell" className="text-footerTextLink hover:underline  hover:text-btn ">Sell With Us
                </Link>
                </li>
              <li className="mb-2">
                <Link to="/salesrep" className="text-footerTextLink  hover:underline  hover:text-btn ">Become A Sales Rep
                </Link></li>
              <li className="mb-2">
                <Link to="/logistics" className="text-footerTextLink hover:underline  hover:text-btn ">Become A Logistic Provider
                </Link></li>
              <li className="mb-2">
                <Link to ="/vendor"  className="text-footerTextLink hover:underline  hover:text-btn ">Become A Vendor Hub
                </Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Third Row: Copyright and Social Media */}
      {/* <hr/> */}
      {/* className="container mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-amber-400"> */}
      <div className="bg-footer pt-8 border-t border-amber-500">
        <div className="container mx-auto px-4 sm:px-6  w-100%  lg:px-8 md:flex  justify-between items-center">
          {/* <p className="text-gray-400  sm:order-2 w-full pb-3 "  >© 2024 <span className=" hover:underline text-btn font-bold mx-2"> LUXE TROVE.</span> All rights reserved.</p> */}
          <div className="flex space-x-4 md:order-2 w-full ">
            <span className='font-bold mb-4'>FOLLOW US ON :</span>
            <a href="#" className="text-gray-400 hover:text-btn ">
            <FaInstagram  className="w-6 h-6"  />
            </a>
            <a href="#" className="text-gray-400 hover:text-btn">
            <FaPinterestSquare className="w-6 h-6"  /> 
            </a>
            <a href="#" className="text-gray-400 hover:text-btn">
            <SiLinkedin className="w-6 h-6"  />
            </a>
            <a href="#" className="text-gray-400 hover:text-btn">
           <FaFacebookSquare className="w-6 h-6"  />
            </a>
            <a href="#" className="text-gray-400 hover:text-btn">
            <BsTwitterX className="w-6 h-6"  />
            </a>
          </div>
          <p className="text-gray-400  md:order-1 w-full pb-3 "  >© 2024 <span className=" hover:underline text-btn font-bold mx-2"> LUXE TROVE.</span> All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
