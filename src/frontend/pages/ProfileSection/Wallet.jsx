

function Wallet() {
  return (
    <div>
  
    <div className="px-auto  shadow-md p-4 pl-6 font-mon text-textcol ">
      <h3 className="flex-1 font-medium text-xl"> My Wallet </h3>
           
    
            <div className="mt-6 flex flex-col items-center">
            <div className="w-full">
              <h4 className="text-left font-medium text-xl">Manage Funds</h4>
            </div>
            <p className="text-center text-base font-normal">You currently have no purchase with LuxeTrove. Place your order now.</p>
            <button className="bg-btn mt-4  h-10 px-6 rounded-md  font-semibold">Upload Funds</button>
          </div>
          <div className="mt-6 flex flex-col items-center">
            <div className="w-full">
              <h4 className="text-left font-medium text-xl">Current Balance</h4>
            </div>
            
            <p className="text-center text-base font-medium text-btn"> $0.00</p>
           
          </div>
          <div className="w-full mt-6">
              <h4 className="text-left font-medium text-xl">Transaction History</h4>
            
            <p className="text-center text-base font-normal">No transaction done yet.</p>
            </div>
            </div>
        </div>
      )
    }

export default Wallet
