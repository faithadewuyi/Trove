import React from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const MenProductDetail = () => {
  const { id } = useParams();
  const product = {
    id,
    name: 'Product Name',
    description: 'Product description here.',
    price: '$99.99',
    image: 'https://via.placeholder.com/520x720',
    size: ['S', 'M', 'L', 'XL'],
    condition: 'Excellent',
  };

  return (
    <>
    <Navbar />
    <div className="container mx-auto px-6 py-8">
      <div className="flex">
        <div className="w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto" />
        </div>
        <div className="w-1/2 pl-6">
          <h1 className="text-2xl font-bold">{product.name} <i className="far fa-heart"></i></h1>
          <p className="mt-4">{product.description}</p>
          <div className="mt-6">
            <span className="text-xl font-bold">{product.price}</span>
            <div className="mt-2">
              <span>Size: </span>
              {product.size.map((s, idx) => (
                <span key={idx} className="ml-2">{s}</span>
              ))}
            </div>
            <div className="mt-2 text-green-600">Currently in stock</div>
          </div>
          <div className="mt-6">
            <span>Condition: {product.condition}</span>
          </div>
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add to Cart</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Buy Now</button>
          </div>
          <div className="mt-6">
            <p>Got any questions? <a href="#" className="text-blue-500 underline">Contact us now</a></p>
            <p>Free Shipping over $150</p>
            <p>Share</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex space-x-4">
          <button className="text-blue-500 underline">Description</button>
          <button className="text-blue-500 underline">Condition Details</button>
          <button className="text-blue-500 underline">Size Chart</button>
          <button className="text-blue-500 underline">Specification</button>
        </div>
        <div className="mt-4">
          <p>Details will change based on the selected link.</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Related Products</h2>
        <div className="mt-4 flex space-x-4">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="w-1/4 bg-white shadow-md rounded-lg overflow-hidden">
              <img src={`https://via.placeholder.com/400x300`} alt={`Related Product ${idx}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">Related Product {idx}</h3>
                <p className="text-gray-600">Product description here</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-800">$99.99</span>
                  <button className="bg-btn text-white px-4 py-2 rounded-lg">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default MenProductDetail;
