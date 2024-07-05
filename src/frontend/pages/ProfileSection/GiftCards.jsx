

function GiftCards() {
  return (
    <div className="font-inter shadow-md px-4 pl-6 px-auto mt-5 h-[702px] flex flex-col">
    <h1 className=" font-medium text-xl basis-1/6">
      Gift Cards
    </h1>
    <div className="flex gap-6">
      <h2 className ="font-semibold text-base "> Gift Card Balance: </h2>
      <h2 className ="font-semibold text-base  text-btn"> $0.00</h2>
    </div>
    <div className="flex flex-col mt-6 items-center">
    
    <button className="bg-btn mt-4   h-10 px-6 rounded-md  font-semibold items-center">Purchase Gift Cards</button>
    </div>
    
  </div>
)
}




export default GiftCards
