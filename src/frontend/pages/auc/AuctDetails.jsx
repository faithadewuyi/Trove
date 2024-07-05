// import React, { useState, useEffect } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import { FaArrowLeft } from 'react-icons/fa';
// import Navbar from '../../components/navbar/Navbar';
// import Footer from '../../components/footer/Footer';

// const AuctDetails = () => {
//   const { id } = useParams();
//   const history = useHistory();
//   const [product, setProduct] = useState(null);
//   const [currentBid, setCurrentBid] = useState(0);
//   const [numBids, setNumBids] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(0);
//   const [section, setSection] = useState('description');

//   useEffect(() => {
//     // Fetch product details from the API or state
//     const fetchedProduct = {
//       id,
//       name: 'Luxury AMVCA Awards Outfit',
//       designer: 'Designer Name',
//       image: new URL('./aucAssest/auction1.png', import.meta.url).href,
//       startPrice: 100,
//       currentBid: 120,
//       numBids: 5,
//       auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
//       description: 'Elegant evening dress perfect for any occasion.',
//       size: ['S', 'M', 'XL'],
//       condition: 'Excellent',
//       timesWorn: 2,
//     };
//     setProduct(fetchedProduct);
//     setCurrentBid(fetchedProduct.currentBid);
//     setNumBids(fetchedProduct.numBids);
//     setTimeLeft(fetchedProduct.auctionEndTime - Date.now());
//   }, [id]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(product.auctionEndTime - Date.now());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [product?.auctionEndTime]);

//   const formatTimeLeft = (ms) => {
//     const totalSeconds = Math.floor(ms / 1000);
//     const days = Math.floor(totalSeconds / (24 * 60 * 60));
//     const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
//     const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
//     const seconds = totalSeconds % 60;
//     return `${days}d ${hours}h ${minutes}m ${seconds}s`;
//   };

//   const handlePlaceBid = (newBid) => {
//     if (newBid > currentBid) {
//       setCurrentBid(newBid);
//       setNumBids(numBids + 1);
//     }
//   };

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//     <Navbar />
//     <div className="min-h-screen bg-gray-100 p-8 my-20 mx-12">
//       <button onClick={() => history.goBack()} className="text-gray-700 mb-4">
//         <FaArrowLeft /> Back
//       </button>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
//         </div>
//         <div className="space-y-4">
//           <div>
//             <p className="text-red-500 font-bold">{formatTimeLeft(timeLeft)}</p>
//             <h2 className="text-2xl font-bold">{product.name}</h2>
//             <p className="text-gray-600">{product.designer}</p>
//             <div className="flex justify-between items-center mt-2">
//               <p className="text-gray-700">Starting Bid: ${product.startPrice}</p>
//               <p className="text-gray-900 font-bold">Current Bid: ${currentBid}</p>
//             </div>
//             <input
//               type="number"
//               placeholder="Enter bid amount here"
//               className="mt-2 p-2 border rounded w-full"
//               onChange={(e) => handlePlaceBid(Number(e.target.value))}
//             />
//             <p className="mt-2">{timeLeft > 0 ? 'Available' : 'Ended'}</p>
//           </div>
//           <div>
//             <h3 className="text-lg font-bold">Description</h3>
//             <p>{product.description}</p>
//             <p>Size: {product.size.join(', ')}</p>
//           </div>
//           <div>
//             <h3 className="text-lg font-bold">Condition</h3>
//             <p>{product.condition}</p>
//             <p>How many times worn: {product.timesWorn}</p>
//           </div>
//           <div>
//             <p>Got any questions? <a href="/contact" className="text-blue-500">Contact us now</a></p>
//             <p>Free Shipping over $150</p>
//             <p>Share</p>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8">
//         <div className="flex space-x-4">
//           <button onClick={() => setSection('description')} className="text-blue-500">Description</button>
//           <button onClick={() => setSection('condition')} className="text-blue-500">Condition Details</button>
//           <button onClick={() => setSection('size')} className="text-blue-500">Size Chart</button>
//           <button onClick={() => setSection('spec')} className="text-blue-500">Specification</button>
//         </div>
//         <div className="mt-4">
//           {section === 'description' && <p>{product.description}</p>}
//           {section === 'condition' && <p>Condition: {product.condition}</p>}
//           {section === 'size' && <p>Size: {product.size.join(', ')}</p>}
//           {section === 'spec' && <p>Specification details here.</p>}
//         </div>
//       </div>
//       <div className="mt-8">
//         <h3 className="text-2xl font-bold">Related Auction Products</h3>
//         <div className="flex overflow-x-auto space-x-4">
//           {/* Replace with a map of related products */}
//           <div className="border rounded-lg p-4 shadow-md bg-white w-60">
//             <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
//             <h4 className="text-lg font-bold mt-4">{product.name}</h4>
//             <p>Starting Bid: ${product.startPrice}</p>
//             <p>Current Bid: ${currentBid}</p>
//             <p>Time Left: {formatTimeLeft(timeLeft)}</p>
//             <p>No. of Bids: {numBids}</p>
//             <button onClick={() => handlePlaceBid(currentBid + 10)} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 mt-4">
//               Place Bid
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Footer />
//     </>
//   );
// };

// export default AuctDetails;

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const AuctDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [currentBid, setCurrentBid] = useState(product.currentBid);
  const [numBids, setNumBids] = useState(product.numBids);
  const [timeLeft, setTimeLeft] = useState(product.auctionEndTime - Date.now());
  const [activeSection, setActiveSection] = useState('Description');

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

  const handlePlaceBid = (event) => {
    event.preventDefault();
    const newBid = parseFloat(event.target.elements.bidAmount.value);
    if (newBid > currentBid) {
      setCurrentBid(newBid);
      setNumBids(numBids + 1);
    }
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'Description':
        return <p>{product.description}</p>;
      case 'Condition Details':
        return <p>Excellent {product.condition}</p>;
      case 'Size Chart':
        return <p>Size available: {product.size}</p>;
      case 'Specification':
        return <p>Specifications: Experience the epitome of classic style with the Polo Ralph Lauren Classic Fit Polo Shirt. 
        This  features the signature Polo pony logo on the chest, crafted from high-quality, 100% cotton piqué fabric. The classic fit design provides a comfortable, relaxed silhouette, while the 
ribbed cuffs and hem add a touch of sophistication.{product.specifications}</p>;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-12 px-8 py-8 mt-32 ">
        <Link to="/auct" className="text-xl flex items-center mb-4">
          <FaArrowLeft className="mr-2" /> Back
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src={product.image} alt={product.name} className="w- object-cover rounded-lg" />
          <div>
            <div className="mb-4">
              <p className="text-red-500 text-lg">{formatTimeLeft(timeLeft)}</p>
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <h3 className="text-xl">{product.designer}</h3>
              <div className="flex justify-between mt-2">
                <p className="text-gray-700 font-medium">Starting Bid: ${product.startPrice}</p>
                <p className="text-gray-900 font-bold">Current Bid: ${currentBid}</p>
              </div>
              <form onSubmit={handlePlaceBid} className="mt-4">
                <input
                  type="number"
                  name="bidAmount"
                  placeholder="Enter bid amount here"
                  className="w-full border rounded-lg p-2 mb-2"
                />
                <button
                  type="submit"
                  className="bg-btn text-black font-bold px-4 py-2 rounded hover:bg-btnHover"
                >
                  Place Bid
                </button>
              </form>
              <p className="mt-2">{timeLeft <= 0 ? 'Auction ended' : 'Auction available'}</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-bold">Description</h4>
              <p>{product.description}</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-bold">Size Available</h4>
              <p>{product.size}</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-bold">Condition</h4>
              <p> {product.condition}</p>
              <p>How many times: {product.timesUsed}</p>
            </div>
            <div>
              <p>
                Got any questions? <Link to="/contact" className="text-blue-500">Contact us now</Link>
              </p>
              <p>Free Shipping over $150</p>
              <p>Share</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex space-x-4 mb-8">
            {['Description', 'Condition Details', 'Size Chart', 'Specification'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`text-lg ${activeSection === section ? 'font-bold' : 'text-gray-500'}`}
              >
                {section}
              </button>
            ))}
          </div>
          <div className="border-t pt-4">{renderSectionContent()}</div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Related Auction Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {products.slice(0, 4).map((item) => (
              <div key={item.id} className="border rounded-lg p-2 shadow-md bg-white">
                <img src={item.image} alt={item.name} className="w-full object-cover rounded-lg" />
                <h4 className="text-lg font-bold mt-2">{item.name}</h4>
                <p className="text-gray-700">Starting Bid: ${item.startPrice}</p>
                <p className="text-gray-900 font-bold">Current Bid: ${item.currentBid}</p>
                <p className="text-red-500">Time Left: {formatTimeLeft(item.auctionEndTime - Date.now())}</p>
                <p className="text-textcol mb-4" >No. of Bids: {item.numBids}</p>
                <Link to={`/auct/${item.id}`} className="bg-btn text-black font-bold px-4 py-1 rounded hover:bg-btnHover mt-4 ">
                  Place Bid
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AuctDetails;
