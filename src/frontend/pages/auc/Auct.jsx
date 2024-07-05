import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

// ProductCard Component
const ProductCard = ({ product }) => {
  const [timeLeft, setTimeLeft] = useState(product.auctionEndTime - Date.now());
  const [currentBid, setCurrentBid] = useState(product.currentBid);
  const [numBids, setNumBids] = useState(product.numBids);

  useEffect(() => {
    const updateTimer = () => {
      setTimeLeft(product.auctionEndTime - Date.now());
      requestAnimationFrame(updateTimer);
    };
    const timerId = requestAnimationFrame(updateTimer);

    return () => cancelAnimationFrame(timerId);
  }, [product.auctionEndTime]);

  const formatTimeLeft = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
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
      <div className="p-4"></div>
      <div className="flex justify-between items-center mt-[-1.5rem]">
        <p className="text-gray-700 font-medium text-base">Starting Bid: ${product.startPrice}</p>
        <p className="text-gray-900 font-bold text-base">Current Bid: ${currentBid}</p>
      </div>
      <div className="mt-4 flex justify-between">
        <p className="text-red-500 font-bold">Time Left: {formatTimeLeft(timeLeft)}</p>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-gray-900 font-bold text-tiny">No. of Bids: {numBids}</p>
        <Link to={`/auct/${product.id}`} className="bg-btn text-tiny text-black font-bold px-4 py-2 rounded hover:bg-btnHover ml-4">
          Place Bid
        </Link>
      </div>
    </div>
  );
};

// Auct Component
const Auct = () => {
  const products = [
    // Define your product objects here
    {
        id: 1,
        name: 'AMVCA Awards Outfit',
        description: 'Elegant evening dress perfect for any occasion.',
        image: new URL('./auctAssest/auction1.png', import.meta.url).href,
        startPrice: 100,
        currentBid: 120,
        numBids: 5,
        auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3,
        designer:'Veekee James', 
        category: 'jumpsuit',
        size: 'M',
        brand: 'brand1',
        style: 'style1',
        gender: 'female',
      },
      {
        id: 2,
        name: 'Luxury AMVCA Awards Outfit',
        description: 'Elegant evening dress perfect for any occasion.',
        image: new URL('./auctAssest/auction2.png', import.meta.url).href,
        startPrice: 100,
        currentBid: 120,
        numBids: 5,
        auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
        designer:'Valentino', 
        category: 'tuxedo',
        size: 'S',
        brand: 'brand7',
        style: 'style1',
        gender: 'male',
      },
      {
        id: 3,
        name: 'Luxury AMVCA Awards Outfit',
        description: 'Elegant evening dress perfect for any occasion.',
        image: new URL('./auctAssest/auction3.png', import.meta.url).href,
        startPrice: 100,
        currentBid: 120,
        numBids: 5,
        auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
        designer:'Veekee James', 
        category: 'edress',
        size: 'L',
        brand: 'brand1',
        style: 'style1',
        gender: 'female',
      },
      {
        id: 4,
        name: 'Luxury AMVCA Awards Outfit',
        description: 'Elegant evening dress perfect for any occasion.',
        image: new URL('./auctAssest/auction4.png', import.meta.url).href,
        startPrice: 100,
        currentBid: 120,
        numBids: 5,
        auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
        category: 'tuxedo',
        designer:'Mai Atafo', 
        size: 'M',
        brand: 'brand2',
        style: 'style1',
        gender: 'male',
      },
      {
      id: 5,
        name: 'AMVCA Awards Outfit',
        description: 'Elegant evening dress perfect for any occasion.',
        image: new URL('./auctAssest/auction5.png', import.meta.url).href,
        startPrice: 100,
        currentBid: 120,
        numBids: 5,
        auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3,
        designer:'Zara', 
        category: 'wdress',
        size: 'M',
        brand: 'brand6',
        style: 'style3',
        gender: 'female',
      },
      {
        id: 6,
        name: 'Luxury AMVCA Awards Outfit',
        description: 'Elegant evening dress perfect for any occasion.',
        image: new URL('./auctAssest/auction2.png', import.meta.url).href,
        startPrice: 100,
        currentBid: 120,
        numBids: 5,
        auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
        designer:'Mai Atafo', 
        category: 'native',
        size: 'XL',
        brand: 'brand2',
        style: 'style3',
        gender: 'male',
      },
      {
        id: 7,
        name: 'Luxury AMVCA Awards Outfit',
        description: 'Elegant evening dress perfect for any occasion.',
        image: new URL('./auctAssest/auction7.png', import.meta.url).href,
        startPrice: 100,
        currentBid: 120,
        numBids: 5,
        auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
        designer:'Salvatore Ferragamo', 
        category: 'shoes',
        size: 'S',
        brand: 'brand5',
        style: 'style2',
        gender: 'male',
      },
      {
        id: 8,
        name: 'Luxury AMVCA Awards Outfit',
        description: 'Elegant evening dress perfect for any occasion.',
        image: new URL('./auctAssest/auction8.png', import.meta.url).href,
        startPrice: 100,
        currentBid: 120,
        numBids: 5,
        auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
        category: 'shoes',
        designer:'Salvatore Ferragamo', 
        size: 'L',
        brand: 'brand5',
        style: 'style3',
        gender: 'male',
      },
      {
          id: 9,
          name: 'AMVCA Awards Outfit',
          description: 'Elegant evening dress perfect for any occasion.',
          image: new URL('./auctAssest/auction9.png', import.meta.url).href,
          startPrice: 100,
          currentBid: 120,
          numBids: 5,
          auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3,
          designer:'Veekee James', 
          category: 'edress',
          size: 'M',
          brand: 'brand1',
          style: 'style1',
          gender: 'female',
        },
        {
          id: 10,
          name: 'Luxury AMVCA Awards Outfit',
          description: 'Elegant evening dress perfect for any occasion.',
          image: new URL('./auctAssest/auction10.png', import.meta.url).href,
          startPrice: 100,
          currentBid: 120,
          numBids: 5,
          auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
          designer:'SumoBySomo', 
          category: 'edress',
          size: 'XL',
          brand: 'brand4',
          style: 'style1',
          gender: 'female',
        },
        {
          id: 11,
          name: 'Luxury AMVCA Awards Outfit',
          description: 'Elegant evening dress perfect for any occasion.',
          image: new URL('./auctAssest/auction11.png', import.meta.url).href,
          startPrice: 100,
          currentBid: 120,
          numBids: 5,
          auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
          designer:'SumoBySomo', 
          category: 'edress',
          size: 'L',
          brand: 'brand5',
          style: 'style1',
          gender: 'female',
        },
        {
          id: 12,
          name: 'Luxury AMVCA Awards Outfit',
          description: 'Elegant evening dress perfect for any occasion.',
          image: new URL('./auctAssest/auction12.png', import.meta.url).href,
          startPrice: 100,
          currentBid: 120,
          numBids: 5,
          auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
          category: 'native',
          designer:'SumoBySomo', 
          size: 'M',
          brand: 'brand5',
          style: 'style3',
          gender: 'female',
        },
        {
        id: 13,
          name: 'AMVCA Awards Outfit',
          description: 'Elegant evening dress perfect for any occasion.',
          image: new URL('./auctAssest/auction13.png', import.meta.url).href,
          startPrice: 100,
          currentBid: 120,
          numBids: 5,
          auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3,
          designer:'Zara', 
          category: 'shoes',
          size: 'XL',
          brand: 'brand6',
          style: 'style3',
          gender: 'male',
        },
        {
          id: 14,
          name: 'Luxury AMVCA Awards Outfit',
          description: 'Elegant evening dress perfect for any occasion.',
          image: new URL('./auctAssest/auction14.png', import.meta.url).href,
          startPrice: 100,
          currentBid: 120,
          numBids: 5,
          auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
          designer:'Mai Atafo', 
          category: 'tuxedo',
          size: 'L',
          brand: 'brand2',
          style: 'style3',
          gender: 'male',
        },
        {
          id: 15,
          name: 'Luxury AMVCA Awards Outfit',
          description: 'Elegant evening dress perfect for any occasion.',
          image: new URL('./auctAssest/auction15.png', import.meta.url).href,
          startPrice: 100,
          currentBid: 120,
          numBids: 5,
          auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
          designer:'Salvatore Ferragamo', 
          category: 'edress',
          size: 'S',
          brand: 'brand5',
          style: 'style1',
          gender: 'female',
        },
        {
          id: 16,
          name: 'Luxury AMVCA Awards Outfit',
          description: 'Elegant evening dress perfect for any occasion.',
          image: new URL('./auctAssest/auction16.png', import.meta.url).href,
          startPrice: 100,
          currentBid: 120,
          numBids: 5,
          auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
          category: 'native',
          designer:'Mai Atafo', 
          size: 'L',
          brand: 'brand2',
          style: 'style3',
          gender: 'male',
        },
        {
          id: 17,
          name: 'AMVCA Awards Outfit',
          description: 'Elegant evening dress perfect for any occasion.',
          image: new URL('./auctAssest/auction17.png', import.meta.url).href,
          startPrice: 100,
          currentBid: 120,
          numBids: 5,
          auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3,
          designer:'Veekee James', 
          category: 'native',
          size: 'S',
          brand: 'brand1',
          style: 'style3',
          gender: 'female',
        },
        {
          id: 18,
          name: 'Luxury AMVCA Awards Outfit',
          description: 'Elegant evening dress perfect for any occasion.',
          image: new URL('./auctAssest/auction18.png', import.meta.url).href,
          startPrice: 100,
          currentBid: 120,
          numBids: 5,
          auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
          designer:'Veekee James', 
          category: 'native',
          size: 'S',
          brand: 'brand1',
          style: 'style3',
          gender: 'female',
        },
        {
          id: 19,
          name: 'Luxury AMVCA Awards Outfit',
          description: 'Elegant evening dress perfect for any occasion.',
          image: new URL('./auctAssest/auction19.png', import.meta.url).href,
          startPrice: 100,
          currentBid: 120,
          numBids: 5,
          auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
          designer:'Mai Atafo', 
          category: 'tuxedo',
          size: 'S',
          brand: 'brand2',
          style: 'style3',
          gender: 'male',
        },
        {
          id: 20,
          name: 'Luxury AMVCA Awards Outfit',
          description: 'Elegant evening dress perfect for any occasion.',
          image: new URL('./auctAssest/auction20.png', import.meta.url).href,
          startPrice: 100,
          currentBid: 120,
          numBids: 5,
          auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
          category: 'suit',
          designer:'Mai Atafo', 
          size: 'M',
          brand: 'brand2',
          style: 'style2',
          gender: 'male',
        },
        {
        id: 21,
          name: 'AMVCA Awards Outfit',
          description: 'Elegant evening dress perfect for any occasion.',
          image: new URL('./auctAssest/auction21.png', import.meta.url).href,
          startPrice: 100,
          currentBid: 120,
          numBids: 5,
          auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3,
          category: 'suit',
          designer:'Mai Atafo', 
          size: 'L',
          brand: 'brand2',
          style: 'style2',
          gender: 'male',
        },
        {
          id: 22,
          name: 'Luxury AMVCA Awards Outfit',
          description: 'Elegant evening dress perfect for any occasion.',
          image: new URL('./auctAssest/auction22.png', import.meta.url).href,
          startPrice: 100,
          currentBid: 120,
          numBids: 5,
          auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
          designer:'Mai Atafo', 
          category: 'native',
          size: 'S',
          brand: 'brand2',
          style: 'style3',
          gender: 'male',
        },
        {
          id: 23,
          name: 'Luxury AMVCA Awards Outfit',
          description: 'Elegant evening dress perfect for any occasion.',
          image: new URL('./auctAssest/auction23.png', import.meta.url).href,
          startPrice: 100,
          currentBid: 120,
          numBids: 5,
          auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
          category: 'native',
          designer:'Mai Atafo', 
          size: 'M',
          brand: 'brand2',
          style: 'style2',
          gender: 'male',
        },
        {
          id: 24,
          name: 'Luxury AMVCA Awards Outfit',
          description: 'Elegant evening dress perfect for any occasion.',
          image: new URL('./auctAssest/auction24.png', import.meta.url).href,
          startPrice: 100,
          currentBid: 120,
          numBids: 5,
          auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
          category: 'shoes',
          designer:'Mai Atafo', 
          size: 'M',
          brand: 'brand2',
          style: 'style2',
          gender: 'male',
        },
        {
            id: 25,
            name: 'AMVCA Awards Outfit',
            description: 'Elegant evening dress perfect for any occasion.',
            image: new URL('./auctAssest/auction25.png', import.meta.url).href,
            startPrice: 100,
            currentBid: 120,
            numBids: 5,
            auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3,
            designer:'Veekee James', 
            category: 'cdress',
            size: 'XL',
            brand: 'brand1',
            style: 'style1',
            gender: 'female',
          },
          {
            id: 26,
            name: 'Luxury AMVCA Awards Outfit',
            description: 'Elegant evening dress perfect for any occasion.',
            image: new URL('./auctAssest/auction26.png', import.meta.url).href,
            startPrice: 100,
            currentBid: 120,
            numBids: 5,
            auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
            category: 'shoes',
            designer:'Mai Atafo', 
            size: 'M',
            brand: 'brand2',
            style: 'style1',
            gender: 'male',
          },
          {
            id: 27,
            name: 'Luxury AMVCA Awards Outfit',
            description: 'Elegant evening dress perfect for any occasion.',
            image: new URL('./auctAssest/auction27.png', import.meta.url).href,
            startPrice: 100,
            currentBid: 120,
            numBids: 5,
            auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
            designer:'SumoBySomo', 
            category: 'edress',
            size: 'M',
            brand: 'brand5',
            style: 'style3',
            gender: 'female',
          },
          {
            id: 28,
            name: 'Luxury AMVCA Awards Outfit',
            description: 'Elegant evening dress perfect for any occasion.',
            image: new URL('./auctAssest/auction28.png', import.meta.url).href,
            startPrice: 100,
            currentBid: 120,
            numBids: 5,
            auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
            category: 'wdress',
            designer:'Tubo', 
            size: 'M',
            brand: 'brand3',
            style: 'style3',
            gender: 'female',
          },
          {
          id: 29,
            name: 'AMVCA Awards Outfit',
            description: 'Elegant evening dress perfect for any occasion.',
            image: new URL('./auctAssest/auction29.jpg', import.meta.url).href,
            startPrice: 100,
            currentBid: 120,
            numBids: 5,
            auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3,
            designer:'Zara', 
            category: 'cdress',
            size: 'XL',
            brand: 'brand6',
            style: 'style2',
            gender: 'female',
          },
          {
            id: 30,
            name: 'Luxury AMVCA Awards Outfit',
            description: 'Elegant evening dress perfect for any occasion.',
            image: new URL('./auctAssest/auction30.png', import.meta.url).href,
            startPrice: 100,
            currentBid: 120,
            numBids: 5,
            auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
            designer:'Zara', 
            category: 'cdress',
            size: 'L',
            brand: 'brand6',
            style: 'style2',
            gender: 'female',
          },
          {
            id: 31,
            name: 'Luxury AMVCA Awards Outfit',
            description: 'Elegant evening dress perfect for any occasion.',
            image: new URL('./auctAssest/auction31.png', import.meta.url).href,
            startPrice: 100,
            currentBid: 120,
            numBids: 5,
            auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
            designer:'Tubo', 
            category: 'jumpsuit',
            size: 'S',
            brand: 'brand3',
            style: 'style2',
            gender: 'female',
          },
          {
            id: 32,
            name: 'Luxury AMVCA Awards Outfit',
            description: 'Elegant evening dress perfect for any occasion.',
            image: new URL('./auctAssest/auction32.png', import.meta.url).href,
            startPrice: 100,
            currentBid: 120,
            numBids: 5,
            auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
            category: 'jumpsuit',
            designer:'Veekee James', 
            size: 'XL',
            brand: 'brand1',
            style: 'style2',
            gender: 'female',
          },
          {
              id: 33,
              name: 'AMVCA Awards Outfit',
              description: 'Elegant evening dress perfect for any occasion.',
              image: new URL('./auctAssest/auction33.png', import.meta.url).href,
              startPrice: 100,
              currentBid: 120,
              numBids: 5,
              auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3,
              designer:'Veekee James', 
              category: 'cdress',
              size: 'S',
              brand: 'brand1',
              style: 'style1',
              gender: 'female',
            },
            {
              id: 34,
              name: 'Luxury AMVCA Awards Outfit',
              description: 'Elegant evening dress perfect for any occasion.',
              image: new URL('./auctAssest/auction34.png', import.meta.url).href,
              startPrice: 100,
              currentBid: 120,
              numBids: 5,
              auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
              designer:'Tubo', 
              category: 'edress',
              size: 'L',
              brand: 'brand3',
              style: 'style1',
              gender: 'female',
            },
            {
              id: 35,
              name: 'Luxury AMVCA Awards Outfit',
              description: 'Elegant evening dress perfect for any occasion.',
              image: new URL('./auctAssest/auction35.png', import.meta.url).href,
              startPrice: 100,
              currentBid: 120,
              numBids: 5,
              auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
              designer:'Veekee James', 
              category: 'jumpsuit',
              size: 'XL',
              brand: 'brand1',
              style: 'style2',
              gender: 'female',
            },
            {
              id: 36,
              name: 'Luxury AMVCA Awards Outfit',
              description: 'Elegant evening dress perfect for any occasion.',
              image: new URL('./auctAssest/auction36.png', import.meta.url).href,
              startPrice: 100,
              currentBid: 120,
              numBids: 5,
              auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
              designer:'Tubo', 
              category: 'wdress',
              size: 'M',
              brand: 'brand3',
              style: 'style3',
              gender: 'female',
            },
            {
            id: 37,
              name: 'AMVCA Awards Outfit',
              description: 'Elegant evening dress perfect for any occasion.',
              image: new URL('./auctAssest/auction37.png', import.meta.url).href,
              startPrice: 100,
              currentBid: 120,
              numBids: 5,
              auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3,
              designer:'Zara', 
              category: 'jumpsuit',
              size: 'S',
              brand: 'brand6',
              style: 'style3',
              gender: 'female',
            },
            {
              id: 38,
              name: 'Luxury AMVCA Awards Outfit',
              description: 'Elegant evening dress perfect for any occasion.',
              image: new URL('./auctAssest/auction38.png', import.meta.url).href,
              startPrice: 100,
              currentBid: 120,
              numBids: 5,
              auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
              designer:'Tubo', 
              category: 'wdress',
              size: 'S',
              brand: 'brand3',
              style: 'style1',
              gender: 'female',
            },
            {
              id: 39,
              name: 'Luxury AMVCA Awards Outfit',
              description: 'Elegant evening dress perfect for any occasion.',
              image: new URL('./auctAssest/auction39.png', import.meta.url).href,
              startPrice: 100,
              currentBid: 120,
              numBids: 5,
              auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
              designer:'Tubo', 
              category: 'wdress',
              size: 'XL',
              brand: 'brand3',
              style: 'style1',
              gender: 'female',
            },
            {
              id: 40,
              name: 'Luxury AMVCA Awards Outfit',
              description: 'Elegant evening dress perfect for any occasion.',
              image: new URL('./auctAssest/auctiono1.png', import.meta.url).href,
              startPrice: 100,
              currentBid: 120,
              numBids: 5,
              auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
              category: 'tuxedo',
              designer:'Salvatore Ferragamo', 
              size: 'XL',
              brand: 'brand5',
              style: 'style1',
              gender: 'male',
            },
            {
                id: 41,
                name: 'AMVCA Awards Outfit',
                description: 'Elegant evening dress perfect for any occasion.',
                image: new URL('./auctAssest/auctiono2.png', import.meta.url).href,
                startPrice: 100,
                currentBid: 120,
                numBids: 5,
                auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3,
                designer:'Valentino', 
                category: 'edress',
                size: 'S',
                brand: 'brand7',
                style: 'style3',
                gender: 'female',
              },
              {
                id: 42,
                name: 'Luxury AMVCA Awards Outfit',
                description: 'Elegant evening dress perfect for any occasion.',
                image: new URL('./auctAssest/auctiono3.png', import.meta.url).href,
                startPrice: 100,
                currentBid: 120,
                numBids: 5,
                auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
                designer:'Salvatore Ferragamo', 
                category: 'edress',
                size: 'XL',
                brand: 'brand5',
                style: 'style1',
                gender: 'male',
              },
              {
                id: 43,
                name: 'Luxury AMVCA Awards Outfit',
                description: 'Elegant evening dress perfect for any occasion.',
                image: new URL('./auctAssest/auctiono4.png', import.meta.url).href,
                startPrice: 100,
                currentBid: 120,
                numBids: 5,
                auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
                designer:'Valentino', 
                category: 'edress',
                size: 'S',
                brand: 'brand5',
                style: 'style1',
                gender: 'female',
              },
              {
                  id: 44,
                  name: 'Luxury AMVCA Awards Outfit',
                  description: 'Elegant evening dress perfect for any occasion.',
                  image: new URL('./auctAssest/auctiono5.png', import.meta.url).href,
                  startPrice: 100,
                  currentBid: 120,
                  numBids: 5,
                  auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
                  designer:'Salvatore Ferragamo', 
                  category: 'tuxedo',
                  size: 'M',
                  brand: 'brand5',
                  style: 'style1',
                  gender: 'male',
                },
                {
                  id: 45,
                  name: 'Luxury AMVCA Awards Outfit',
                  description: 'Elegant evening dress perfect for any occasion.',
                  image: new URL('./auctAssest/auctiono6.png', import.meta.url).href,
                  startPrice: 100,
                  currentBid: 120,
                  numBids: 5,
                  auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
                  designer:'Zara', 
                  category: 'edress',
                  size: 'S',
                  brand: 'brand6',
                  style: 'style3',
                  gender: 'female',
                },
      // Add more products here with unique IDs and categories
  ];

  const [filter, setFilter] = useState({
    size: '',
    gender: '',
    brand: '',
    style: '',
    category: 'all',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const handleCategoryClick = (category) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      category: category,
    }));
    setCurrentPage(1);
  };

  const filteredProducts = products.filter(product => {
    return (
      (filter.size === '' || product.size === filter.size) &&
      (filter.gender === '' || product.gender === filter.gender) &&
      (filter.brand === '' || product.brand === filter.brand) &&
      (filter.style === '' || product.style === filter.style) &&
      (filter.category === 'all' || product.category === filter.category)
    );
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-8 mt-24">
        <div className="flex">
          <div className="w-1/6 mt-20 p-4">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <div>
              <label className="block mb-2">Size</label>
              <select
                name="size"
                value={filter.size}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="">All Sizes</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Gender</label>
              <select
                name="gender"
                value={filter.gender}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="">All Genders</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 mt-4">Brand</label>
              <select
                name="brand"
                value={filter.brand}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="">All Brands</option>
                <option value="brand1">Veeke James</option>
                <option value="brand2">Atafo</option>
                <option value="brand3">Tubo</option>
                <option value="brand4">SumoBySomo</option>
                <option value="brand5">Salvatore Ferragamo</option>
                <option value="brand6">Zara</option>
                <option value="brand7">Valentino</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 mt-4">Style</label>
              <select
                name="style"
                value={filter.style}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="">All Styles</option>
                <option value="style1">Awards</option>
                <option value="style2">Cooperate</option>
                <option value="style3">Wedding</option>
              </select>
            </div>
          </div>
          <div className="w-5/6 p-4">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-4 ml-24">
                <button onClick={() => handleCategoryClick('all')} className="text-blue-500 underline font-bold text-base">
                  All
                </button>
                <button onClick={() => handleCategoryClick('edress')} className="text-blue-500 underline font-bold text-base">
                  Evening Dress
                </button>
                <button onClick={() => handleCategoryClick('tuxedo')} className="text-blue-500 underline font-bold text-base">
                  Tuxedo
                </button>
                <button onClick={() => handleCategoryClick('jumpsuit')} className="text-blue-500 underline font-bold text-base">
                 Jumpsuit
                </button>
                <button onClick={() => handleCategoryClick('native')} className="text-blue-500 underline font-bold text-base">
                 Native
                </button>
                <button onClick={() => handleCategoryClick('cdress')} className="text-blue-500 underline font-bold text-base">
                  Cooperate Outfit
                </button>
                <button onClick={() => handleCategoryClick('suit')} className="text-blue-500 underline font-bold text-base">
                  Suit
                </button>
                <button onClick={() => handleCategoryClick('wdress')} className="text-blue-500 underline font-bold text-base">
                  Wedding
                </button>
                <button onClick={() => handleCategoryClick('shoes')} className="text-blue-500 underline font-bold text-base">
                  Shoes
                </button>
              </div>
              {/* pagenation above */}
              {/* <div className="flex space-x-4">
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="text-blue-500 underline">
                  Prev
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className="text-blue-500 underline">
                  Next
                </button>
              </div> */}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {selectedItems.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="flex space-x-4 justify-center mt-8">
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="text-blue-500 underline">
                  Prev
                </button>
                {[...Array(totalPages)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`text-blue-500 underline mx-2 ${currentPage === idx + 1 && 'font-bold'}`}
                  >
                    {idx + 1}
                  </button>
                ))}
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className="text-blue-500 underline">
                  Next
                </button>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Auct;
