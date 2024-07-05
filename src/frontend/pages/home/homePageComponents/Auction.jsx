import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

const ProductCard = ({ product }) => {
  const [timeLeft, setTimeLeft] = useState(product.auctionEndTime - Date.now());
  const [currentBid, setCurrentBid] = useState(product.currentBid);
  const [numBids, setNumBids] = useState(product.numBids);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(product.auctionEndTime - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, [product.auctionEndTime]);

  const formatTimeLeft = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const handleAddToCart = () => {
    // Handle add to cart logic
    console.log(`Added ${product.name} to cart.`);
  };

  const handlePlaceBid = (newBid) => {
    if (newBid > currentBid) {
      setCurrentBid(newBid);
      setNumBids(numBids + 1);
    }
  };

    return (
      <div className="border rounded-lg p-2 relative shadow-md bg-white">
        <img src={product.image} alt={product.name} className="w-full  object-cover rounded-lg" />
        <div className="absolute top-8 left-72 w-full">
          <FaHeart className="h-6 w-6 text-white pr-1 pt-1 hover:text-btn" />
        </div>
        <h2 className="text-base font-bold mt-4">{product.name}</h2>
        <h2 className="text-base font-bold mt-1">By: {product.designer}</h2>
        <div className="p-4">
          
        </div>
        <div className="flex justify-between items-center mt-[-1.5rem]">
          <p className="text-gray-700 font-medium text-base">Starting Bid: ${product.startPrice}</p>
          <p className="text-gray-900 font-bold text-base">Current Bid: ${currentBid}</p>
        </div>
        <div className="mt-4 flex justify-between">
          <p className="text-red-500 font-bold">Time Left: {formatTimeLeft(timeLeft)}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-gray-900 font-bold text-tiny">No. of Bids: {numBids}</p>
          <Link to={`/auct/${product.id}`} className="bg-btn text-tiny text-black font-bold px-4 py-2 rounded hover:bg-btnHover ml-4"> Place Bid
          </Link>
        </div>
      </div>
    );
};

const Auction = () => {
  const products = [
    {
      id: 1,
      name: 'Luxury AMVCA Awards Outfit',
      description: 'Elegant evening dress perfect for any occasion.',
      image: new URL('../homeAssets/auction1.png',import.meta.url).href,
      startPrice: 100,
      currentBid: 120,
      numBids: 5,
      auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
    },
    {
      id: 2,
      name: 'Luxury AMVCA Awards Outfit',
      description: 'Elegant evening dress perfect for any occasion.',
      image: new URL('../homeAssets/auction2.png',import.meta.url).href,      startPrice: 100,
      currentBid: 120,
      numBids: 5,
      auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
    },
    {
      id: 3,
      name: 'Luxury AMVCA Awards Outfit',
      description: 'Elegant evening dress perfect for any occasion.',
      image: new URL('../homeAssets/auction3.png',import.meta.url).href,      startPrice: 100,
      currentBid: 120,
      numBids: 5,
      auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
    },
    {
      id: 4,
      name: 'Luxury AMVCA Awards Outfit',
      description: 'Elegant evening dress perfect for any occasion.',
      image: new URL('../homeAssets/auction4.png',import.meta.url).href,
      startPrice: 100,
      currentBid: 120,
      numBids: 5,
      auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
    },
    {
      id: 5,
      name: 'Luxury AMVCA Awards Outfit',
      description: 'Elegant evening dress perfect for any occasion.',
      image: new URL('../homeAssets/auction8.png',import.meta.url).href,      startPrice: 100,
      currentBid: 120,
      numBids: 5,
      auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
    },
    {
      id: 6,
      name: 'Luxury AMVCA Awards Outfit',
      description: 'Elegant evening dress perfect for any occasion.',
      image: new URL('../homeAssets/auction9.png',import.meta.url).href,      startPrice: 100,
      currentBid: 120,
      numBids: 5,
      auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
    },
    {
      id: 4,
      name: 'Luxury AMVCA Awards Outfit',
      description: 'Elegant evening dress perfect for any occasion.',
      image: new URL('../homeAssets/auction7.png',import.meta.url).href,
      startPrice: 100,
      currentBid: 120,
      numBids: 5,
      auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
    },
    {
      id: 5,
      name: 'Luxury AMVCA Awards Outfit',
      description: 'Elegant evening dress perfect for any occasion.',
      image: new URL('../homeAssets/auction5.png',import.meta.url).href,      startPrice: 100,
      currentBid: 120,
      numBids: 5,
      auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
    },
    {
      id: 6,
      name: 'Luxury AMVCA Awards Outfit ',
      description: 'Elegant evening dress perfect for any occasion.',
      image: new URL('../homeAssets/auction6.png',import.meta.url).href,      startPrice: 100,
      currentBid: 120,
      numBids: 5,
      auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
    },
    // Add more products here
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 my-20 mx-12">
      <h1 className="text-4xl font-bold text-center mb-8">Luxury Fashion Auctions</h1>
      <div className="flex justify-end">
        <Link to="/auct" className=" bg-black text-right font-bold px-4 py-2 rounded-md text-white capitalize hover:text-btn mb-10 underline">Click to View more fashion pieces on Auction</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Auction;
