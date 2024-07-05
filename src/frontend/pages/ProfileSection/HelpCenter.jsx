
import "../../../App.css"

function HelpCenter() {
  const items = ["Order pending", 
    "Ordering and Payments",
     "Closed Order",
     "Coupon and Bonus",
     "Refunds",
     "Wishlists",
     
    ];
  return (
    
    <div>
     <div className="px-auto  shadow-md p-4 pl-6 font-mon text-textcol ">
      <h2 className="font-medium text-2xl">Help Center</h2>
      <div className="bg-btn items-center flex justify-center flex-col h-[214px]">
       <h3 className="font-semibold text-base mb-6">Hi, what can we help you with?</h3>
       <div className="relative ">
       <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none ">
        <span className="material-symbols-outlined text-white">search</span>
        </div>
        <input
        type="text"
        placeholder="Search for help"
        className="pl-10 pr-3 py-1 w-[546px] bg-btn text-textcol  border border-black focus:outline-none focus:border-btn"
        />
             
      </div>
      </div>

      <h2 className="font-semibold text-base mt-4">Popular Topics</h2>
      <div className="bg-[#EFEEF3] ites-center flex  flex-col h-[214px] mt-4 p-4">
      <ul className="custom-list grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          {item}
        </li>
      ))}
    </ul>

      </div>
      </div> 
    </div>
  )
}

export default HelpCenter
