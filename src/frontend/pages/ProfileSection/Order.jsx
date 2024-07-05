

function Order() {
  return (
    <div className="font-inter shadow-md px-4 pl-6 px-auto mt-5 h-[702px] flex flex-col">
      <h1 className=" font-medium text-xl basis-1/6">
        My Orders
      </h1>
      <div className="flex gap-6">
        <h2 className ="font-semibold text-base text-btn"> Current Orders</h2>
        <h2 className ="font-semibold text-base "> Past Orders</h2>
      </div>
      <div className="flex flex-col mt-6 items-center">
      <p className="text-center text-base font-normal ">You currently have no purchase with LuxeTrove. Place your order now.</p>
      <button className="bg-btn mt-4   h-10 px-6 rounded-md  font-semibold items-center">Shop Now</button>
      </div>
      
    </div>
  )
}

export default Order
