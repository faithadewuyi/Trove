import {useState, useEffect} from "react"
import { useSelector } from 'react-redux' 

// import { toggle
//    } from '../../stores/Cart'
import { Link } from "react-router-dom";


function AddToCart() {
  const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);
    // const dispatch = useDispatch();
    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts])
    // const handleOpenTabCart = () => {
    //     dispatch(toggleStatusTab());
    // }
  return (

   
    <div className=' rounded-full
    flex justify-center items-center relative cursor-pointer'>
        <Link
         to="/cartpage">
        <span className="material-symbols-outlined text-darkblue hover:text-primaryred">
                shopping_cart
              </span>
        <span className='absolute top-2/3 left-1/2 bg-red-500 text-white text-sm
        w-5 h-5 rounded-full flex justify-center items-center'>{totalQuantity}</span>
        </Link>
    </div>

  )
}

export default AddToCart
