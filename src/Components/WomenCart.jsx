import React from 'react'
import { Link } from 'react-router-dom';

function WomenCart(props) {
  const {id, name, price, image, slug} = props.data;
  return (
    <div className='overflow-x-hidden'>
      <div className=' p-5 rounded-xl shadow-sm overflow-x-hidden'>
        <Link to={slug}>
            <img src={image} alt={name} className=' h-60 object-cover object-top ' />
        </Link>
        
        <div className='flex flex-col items-center  mt-2'>
        <button className='bg-btn p-2 rounded-md text-sm hover:bg-btnlight flex gap-2 mt-2' >
            <span className="material-symbols-outlined text-black hover:text-white">
                shopping_cart
              </span>
                Add To Cart
            </button>
           
            <h3 className='text-xl py-3  font-medium'>{name}</h3>
            <p>
                <span className='text-xl font-medium'>${price}</span>
            </p>
            </div>
        
            
        </div>
    </div>
  
  )
}

export default WomenCart
