

import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
function WishList() {
  return (
   
     <div className="w-full h-screen overflow-x-hidden bg-white items-center font-mon font-semibold">
     <Navbar />
     <div className="  mt-10">
     <h3 className="font-semibold text-xl ml-20 mb-10">WishLists/ All items(4)</h3>
     
        
 <div className=" ">
 <div className="p-6 flex  items-end justify-center space-x-4 mt-10">
      {/* Image */}
      <div className="ml-8">
        <img
          src="cap.png"
          alt="Gucci Face Cap"
          className="w-32 h-32"
        />
      </div>
      {/* Paragraphs */}
      <div className="flex    ">
        <div className="space-y-14  ">
          <p className="mr-5 text-base">
            Gucci  cap
          </p>
          <p className="mt-2 ">
          $150 00.
          </p>
        </div>
      </div>
      {/* Buttons */}
      <div className=" flex flex-col space-y-4  ">
        <button className="bg-btn text-black rounded w-[166px] h-[50px] ">
          Buy Now
        </button>
        
      <button className="flex  border-2 border-btn px-4 py-2 rounded w-[166px] h-[50px] ">
        <span className="material-symbols-outlined text-black mr-2">delete</span> 
        Delete
      </button>
    
      </div>
      
    </div>
    <div className="p-6 flex  items-end justify-center space-x-4 ">
      {/* Image */}
      <div className="ml-8">
        <img
          src="f.png"
          alt="Louis Vuiton Sandal"
          className="w-32 h-32"
        />
      </div>
      {/* Paragraphs */}
      <div className="flex    ">
        <div className="space-y-14  ">
          <p className="mr-5 text-base">
            Loius Vuitton 
          </p>
          <p className="mt-2 ">
          $100 22
          </p>
        </div>
      </div>
      {/* Buttons */}
      <div className=" flex flex-col space-y-4  ">
        <button className="bg-btn text-black rounded w-[166px] h-[50px] ">
          Buy Now
        </button>
        
      <button className="flex  border-2 border-btn px-4 py-2 rounded w-[166px] h-[50px] ">
        <span className="material-symbols-outlined text-black mr-2">delete</span> 
        Delete
      </button>
    
      </div>
      
    </div>
    <div className="p-6 flex  items-end justify-center space-x-4 ">
      {/* Image */}
      <div className="ml-8">
        <img
          src="bag.png"
          alt="Gucci Bag"
          className="w-32 h-32"
        />
      </div>
      {/* Paragraphs */}
      <div className="flex    ">
        <div className="space-y-14  ">
          <p className="mr-5">
            Gucci Bag
          </p>
          <p className="mt-2 ">
          $980 00.
          </p>
        </div>
      </div>
      {/* Buttons */}
      <div className=" flex flex-col space-y-4  ">
        <button className="bg-btn text-black rounded w-[166px] h-[50px] ">
          Buy Now
        </button>
        
      <button className="flex  border-2 border-btn px-4 py-2 rounded w-[166px] h-[50px] ">
        <span className="material-symbols-outlined text-black mr-2">delete</span> 
        Delete
      </button>
    
      </div>
      
    </div>
    <div className="p-6 flex  items-end justify-center space-x-4 ">
      {/* Image */}
      <div className="ml-8">
        <img
          src="i.png"
          alt=" Louis Vuitton Shoe"
          className="w-32 h-32"
        />
      </div>
      {/* Paragraphs */}
      <div className="flex    ">
        <div className="space-y-14  ">
          <p className="mr-5">
            Loius Vuitton
          </p>
          <p className="mt-4 ">
          $100 20.
          </p>
        </div>
      </div>
      {/* Buttons */}
      <div className=" flex flex-col space-y-4  ">
        <button className="bg-btn text-black rounded w-[166px] h-[50px] ">
          Buy Now
        </button>
        
      <button className="flex  border-2 border-btn px-4 py-2 rounded w-[166px] h-[50px] ">
        <span className="material-symbols-outlined text-black mr-2">delete</span> 
        Delete
      </button>
    
      </div>
      
    </div>
    
   
   
    

 </div>


   
      </div>
      <Footer/>
    </div>
  )
}

export default WishList
 