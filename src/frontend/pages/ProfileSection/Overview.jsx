

import { Link } from "react-router-dom";

function Overview() {
  return (
  
    <div>
  
    <div className="px-auto  shadow-md p-4 pl-6 font-mon text-textcol ">
           <div className=" mx-auto lg:mx-3 items-center flex ">
          <img
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="random user"
            className="h-20 w-20 rounded-full ml-6"
          />
          
           <h3 className="ml-4 flex-1 font-semibold text-xl"> Sarah Thompson </h3>
        </div>
        <div className="flex gap-5 mx-auto lg:mx-3 mt-6  pl-20  ">
          <div className=" pl-8 flex flex-col">
          <span className="material-symbols-outlined hover:text-btn focus:text-btn pl-4 pt-1 mb-4">
            favorite
          </span>
          <Link to="/wishlist" className="font-normal text-base ">Wishlist
          </Link>
          </div>
          <div className=" pl-8 flex flex-col">
          <span className="material-symbols-outlined hover:text-btn focus:text-btn pl-8 pt-1 mb-4">history</span>
          <Link to ="" className="font-normal text-base">Recently viewed</Link>
          </div>
          
        </div>
        <div className="mt-6 flex flex-col items-center">
        <div className="w-full">
          <h4 className="text-left font-semibold text-base">MY ORDERS</h4>
        </div>
        <p className="text-center text-base font-normal">You currently have no purchase with LuxeTrove. Place your order now.</p>
        <button className="bg-btn mt-4  h-10 px-6 rounded-md  font-semibold">Shop Now</button>
      </div>
      <div className="mt-6 flex flex-col items-center">
        <div className="w-full">
          <h4 className="text-left font-semibold text-base">MY WALLET</h4>
        </div>
        <p className="text-center font-normal text-base">You currently have no purchase with LuxeTrove. Place your order now.</p>
        <button className="bg-btn mt-4 px-6  h-10 rounded-md font-inter font-semibold">Upload Funds</button>
      </div>

        </div>
    </div>
  )
}

export default Overview
