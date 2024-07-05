// src/Feedback.js
import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSmile } from 'react-icons/fa';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const SellRegFeed = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <button
        onClick={handleBackClick}
        className="self-start mb-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
      >
        <FaArrowLeft className="text-gray-700" />
      </button>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md md:max-w-lg lg:max-w-xl text-center">
        <FaSmile className="text-6xl text-yellow-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-4">
          Thank you for registering as a seller with Luxe Trove
        </h1>
        <p className="mb-2">
          We will review your registration and verify your mode of identification.
        </p>
        <p className="italic mb-8 font-bold">
          We will get back to you via email and voice call in the next 3 working days.
        </p>
        <div>
            <Link to="/" onClick={handleBackClick}
                className="w-80 text-center py-2 px-4 bg-btn text-black font-semibold rounded-lg shadow-md hover:bg-btnHover"
              >
                Click to return to home page
              </Link>
            {/* <button
                onClick={handleBackClick}
                className="bg-btn text-Black font-bold py-2 px-4 rounded hover:bg-btnHover"
                >
                Click to return to home page
                </button> */}
        </div>
        
      </div>
    </div>
    <footer />
    </>
  );
};

export default SellRegFeed;
