import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const BrandProduct = () => {
  const menProduct = [
    {
      id: 1,
      title: 'Luxury Dress',
      price: '$200',
      originalPrice: '$250',
      image: new URL('./brandProductAssest/bp1.png', import.meta.url).href,
    },
    {
      id: 2,
      title: 'Luxury Dress',
      price: '$200',
      originalPrice: '$250',
      image: new URL('./brandProductAssest/bp2.png', import.meta.url).href,
    },
    {
      id: 3,
      title: 'Luxury Dress',
      price: '$200',
      originalPrice: '$250',
      image: new URL('./brandProductAssest/bp3.webp', import.meta.url).href,
    },
    {
      id: 4,
      title: 'Luxury Dress',
      price: '$200',
      originalPrice: '$250',
      image: new URL('./brandProductAssest/bp4.jpg', import.meta.url).href,
    },
    {
      id: 5,
      title: 'Luxury Dress',
      price: '$200',
      originalPrice: '$250',
      image: new URL('./brandProductAssest/bp5.png', import.meta.url).href,
    },
    {
      id: 6,
      title: 'Luxury Dress',
      price: '$200',
      originalPrice: '$250',
      image: new URL('./brandProductAssest/bp6.jpg', import.meta.url).href,
    },
    {
      id: 7,
      title: 'Luxury Dress',
      price: '$200',
      originalPrice: '$250',
      image: new URL('./brandProductAssest/bp7.jpg', import.meta.url).href,
    },
    {
      id: 8,
      title: 'Luxury Dress',
      price: '$200',
      originalPrice: '$250',
      image: new URL('./brandProductAssest/bp16.jpg', import.meta.url).href,
    },
    {
      id: 9,
      title: 'Luxury Dress',
      price: '$200',
      originalPrice: '$250',
      image: new URL('./brandProductAssest/bp9.jpg', import.meta.url).href,
    },
    {
      id: 10,
      title: 'Luxury Dress',
      price: '$200',
      originalPrice: '$250',
      image: new URL('./brandProductAssest/bp10.webp', import.meta.url).href,
    },
    {
      id: 11,
      title: 'Luxury Dress',
      price: '$200',
      originalPrice: '$250',
      image: new URL('./brandProductAssest/bp17.png', import.meta.url).href,
    },
    {
      id: 12,
      title: 'Luxury Dress',
      price: '$200',
      originalPrice: '$250',
      image: new URL('./brandProductAssest/bp12.jpg', import.meta.url).href,
    },
    {
      id: 13,
      title: 'Luxury Dress',
      price: '$200',
      originalPrice: '$250',
      image: new URL('./brandProductAssest/bp13.jpeg', import.meta.url).href,
    },
    {
      id: 14,
      title: 'Luxury Dress',
      price: '$200',
      originalPrice: '$250',
      image: new URL('./brandProductAssest/bp18.png', import.meta.url).href,
    },
    {
      id: 15,
      title: 'Luxury Dress',
      price: '$200',
      originalPrice: '$250',
      image: new URL('./brandProductAssest/bp15.jpg', import.meta.url).href,
    },
    // Add more products here
  ];

  const [filter, setFilter] = useState({
    size: '',
    brand: '',
    style: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const handleCategoryClick = (category) => {
    // Handle category filter logic here
  };

  const handleAddToCart = (productId) => {
    // Handle add to cart logic here
  };

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = menProduct.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(menProduct.length / itemsPerPage);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-8 mt-24">
        <div className="flex">
          <div className="w-1/4 p-4">
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
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
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
                <option value="brand1">Brand 1</option>
                <option value="brand2">Brand 2</option>
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
                <option value="style1">Style 1</option>
                <option value="style2">Style 2</option>
              </select>
            </div>
          </div>
          <div className="w-3/4 p-4">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-4">
                <button onClick={() => handleCategoryClick('all')} className="text-blue-500 underline">
                  All
                </button>
                <button onClick={() => handleCategoryClick('dress')} className="text-blue-500 underline">
                  Shirts
                </button>
                <button onClick={() => handleCategoryClick('top')} className="text-blue-500 underline">
                  Trousers
                </button>
                <button onClick={() => handleCategoryClick('skirt')} className="text-blue-500 underline">
                  caps
                </button>
                <button onClick={() => handleCategoryClick('shoes')} className="text-blue-500 underline">
                  Shoes
                </button>
                <button onClick={() => handleCategoryClick('bag')} className="text-blue-500 underline">
                  Bags
                </button>
                <button onClick={() => handleCategoryClick('bag')} className="text-blue-500 underline">
                  Sunglassses
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedItems.map((product) => (
                <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <Link to={`/men/${product.id}`} className="text-white px-4 py-2 rounded-lg">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{product.title}</h3>
                    <p className="text-gray-600">Product description here</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-gray-800">{product.price}</span>
                      <button
                        onClick={() => handleAddToCart(product.id)}
                        className="bg-btn text-black px-4 py-2 rounded-lg flex  items-center"
                      ><BsCart className="mr-1"/> 
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className={`text-blue-500 underline mx-2 ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
                disabled={currentPage === 1}
              >
                Previous
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
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className={`text-blue-500 underline mx-2 ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
                disabled={currentPage === totalPages}
              >
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

export default BrandProduct;
