import { useSelector, useDispatch } from 'react-redux' 

import { toggleStatusTab } from '../../stores/Cart';
 import { BsCart3 } from "react-icons/bs";
import CartItem from './CartItem';
import Navbar from '../../frontend/components/navbar/Navbar';
import Footer from '../../frontend/components/footer/Footer';

function CartTab() {
  const carts = useSelector(store => store.cart.items);
    
    const dispatch = useDispatch();
    const handleCloseTabCart = () => {
        dispatch(toggleStatusTab());
    }
  return (
    <div>
        <Navbar/>
   
    <div className="flex justify-center items-center mb-10">
       <div className="font-bold font-mon text-4xl h-24 ml-40 mt-20 flex">
            <div className="">
            <h3>CART</h3>
            </div>

            <div className="mt-1 ml-4 border h-10 w-10 p-1 border-btn text-btn font-extrabold">
                <BsCart3 />
            </div>
            
        </div> 
    <div className={` bg-amber-700 ml-56 mt-56 shadow-2xl w-96 h-full grid  grid-rows-[60px_1fr_60px] 
      transform transition-transform duration-500
     
      `}>
          <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
          <div className='p-5 '>
              {carts.map((item, key) => 
                  <CartItem key={key} data={item}/>
              )}
          </div>
          <div className='grid grid-cols-2'>
              <button className='bg-black text-white' onClick={handleCloseTabCart}>CLOSE</button>
              <button className='bg-amber-600 text-white'>CHECKOUT</button>
          </div>
      </div>
     
      </div>
      <Footer/>
      </div>
  )
}

export default CartTab
