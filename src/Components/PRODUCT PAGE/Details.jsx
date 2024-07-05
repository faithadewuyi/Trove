import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Product from '../Product';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../stores/Cart';
import Navbar from '../../frontend/components/navbar/Navbar';
import Footer from '../../frontend/components/footer/Footer';

function Details() {
  const { slug } = useParams();
  const [detail, setDetail] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const findDetail = Product.find(product => product.slug === slug);
    if (findDetail) {
      setDetail(findDetail);
    } else {
      navigate('/women');
    }
  }, [slug, navigate]);

  const handleMinusQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  const handlePlusQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleAddToCart = () => {
    if (detail) {
      dispatch(addToCart({
        productId: detail.id,
        quantity: quantity
      }));
    }
  };

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full ">
        <Navbar/>
        <div className=" grid justify-center  ">
      <h2 className='text-3xl text-center my-4 text-btn font-semibold'>PRODUCT DETAIL</h2>
      <div className='grid grid-cols-1 gap-5 mt-5 max-w-7xl shadow-lg pl-8 mdl:grid-cols-2 '>
        <div className="shadow-2xl">
          <img src={detail.image} alt={detail.name} className='w-full object-fit'/>
        </div>
        <div className='flex flex-col gap-5 mt-14'>
          <h1 className='text-4xl uppercase font-bold font-mon'>{detail.name}</h1>
          <p className='font-bold text-3xl'>${detail.price}</p>
          <div className='flex gap-5'>
            <div className='flex gap-2 justify-center items-center'>
              <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
              <span className='bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>{quantity}</span>
              <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
            </div>
            <button className='bg-btn text-white px-7 py-3 rounded-xl shadow-2xl' onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
          <p>{detail.description}</p>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Details;
