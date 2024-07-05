import React from 'react';
import Premium from '../assets/Premium.jpeg';

const ShippingAndDelivery = () => {
  return (
    <div className="bg-gray-100">
      <section className="hero-section bg-cover bg-center bg-gray-200 h-screen flex items-center justify-center" style={{ backgroundImage: `url(${Premium})`}}>
        <div className="w-3/12 bg-yellow-400 p-2 rounded-lg flex flex-col justify-start items-center gap-3 text-black relative right-96">
          <h3 className="text-3xl font-semibold">Shipping and Delivery</h3>
          <p className="w-11/12 text-wrap font-medium text-center">Shop from anywhere, ship to your place</p>
        </div>
      </section>

      <section className="form-and-shipping-section w-full h-auto py-16 px-12 flex flex-row justify-between items-start gap-5">
        <div className="form1-container w-1/2 h-auto py-4 px-8 outline-none border-2 border-gray-300 bg-white rounded-lg flex flex-col justify-start items-start gap-8">
          <h2 className="text-2xl font-semibold mb-4">Address Information</h2>
          <form className="w-full h-auto flex flex-col justify-start items-start gap-6 space-y-1.5">
            <div className="name-input w-full h-auto flex flex-col justify-start items-start gap-2">
              <label htmlFor="fullname" className='font-medium text-[18px]'>Fullname</label>
              <input type="text" id="fullname" className="w-[465px] h-8 border-2 border-yellow-400 rounded-lg px-3 py-2 focus:outline-none" />
            </div>

            <div className="name-input">
              <label htmlFor="email" className='font-medium text-[18px]'>Email Address</label>
              <input type="email" id="email" className="w-[465px] h-8 border-2 border-yellow-400 rounded-lg px-3 py-2 focus:outline-none" />
            </div>

            <div className="name-input">
              <label htmlFor="country" className='font-medium text-[18px]'>Country</label>
              <input type="text" id="country" className="w-[465px] h-8 border-2 border-yellow-400 rounded-lg px-3 py-2 focus:outline-none" />
            </div>

            <div className="name-input">
              <label htmlFor="address" className='font-medium text-[18px]'>Street Address</label>
              <input type="text" id="address" className="w-[465px] h-8 border-2 border-yellow-400 rounded-lg px-3 py-2 focus:outline-none"  />
            </div>

            <div className="name-input">
              <label htmlFor="phonenumber" className='font-medium text-[18px]'>Phone Number</label>
              <input type="number" id="phonenumber" className="w-[465px] h-8 border-2 border-yellow-400 rounded-lg px-3 py-2 focus:outline-none"  />
            </div>

            <div className="name-input">
              <label htmlFor="postcode" className='font-medium text-[18px]'>Postcode</label>
              <input type="number" id="postcode" className="w-[465px] h-8 border-2 border-yellow-400 rounded-lg px-3 py-2 focus:outline-none"  />
            </div>

            <div className="button w-fit h-auto">
              <button className="bg-yellow-400 text-black text-[18px] px-48 py-3 rounded-lg font-semibold">Save Details</button>
            </div>
          </form>
        </div>

        <div className="form-container w-1/2 h-auto py-4 px-8 border-2 border-gray-300 bg-white rounded-lg flex flex-col justify-start items-start gap-7">
          <h2 className="text-2xl font-semibold mb-4">Shipping Options</h2>
          <div className="company w-full h-auto p-6 outline-none border-2 border-gray-300 flex flex-row justify-between items-center">
            <div className="w-full h-auto flex justify-start items-start gap-2">
              <div className="radio-button mr-2">
                <input type="radio" id="select" className='w-[50px] h-auto' />
              </div>
              <div className="free-text"><p>Free</p></div>
            </div>
            <div className="company-heading w-full h-auto flex flex-col justify-start items-start">
              <div className="heading font-bold text-xl"><h3>Company 1</h3></div>
              <div className="day"><p>10-12 business days</p></div>
            </div>
            <div className="button2"><button className="bg-black text-white px-3 py-2 rounded-lg font-semibold text-[18px] outline-none">Dev</button></div>
            
          </div>

          <div className="company w-full h-auto p-6 outline-none border-2 border-gray-300 flex flex-row justify-between items-center">
            <div className="w-full h-auto flex justify-start items-start gap-2">
              <div className="radio-button mr-2">
                <input type="radio" id="select" className='w-[50px] h-auto'/>
              </div>
              <div className="free-text"><p>Free</p></div>
            </div>
            <div className="company-heading w-full h-auto flex flex-col justify-start items-start">
              <div className="heading font-bold text-xl"><h3>Company 2</h3></div>
              <div className="day"><p>8-10 business days</p></div>
            </div>
            <div className="button2"><button className="bg-black text-white px-3 py-2 rounded-lg font-semibold text-[18px] outline-none">Dev</button></div>
            
          </div>

          <div className="company w-full h-auto p-6 outline-none border-2 border-gray-300 flex flex-row justify-between items-center">
            <div className="w-full h-auto flex justify-start items-start gap-2">
              <div className="radio-button mr-2">
                <input type="radio" id="select" className='w-[50px] h-auto'/>
              </div>
              <div className="free-text"><p>Free</p></div>
            </div>
            <div className="company-heading w-full h-auto flex flex-col justify-start items-start">
              <div className="heading font-bold text-xl"><h3>Company 3</h3></div>
              <div className="day"><p>6-8 business days</p></div>
            </div>
            <div className="button2"><button className="bg-black text-white px-3 py-2 rounded-lg font-semibold text-[18px] outline-none">Dev</button></div>
            
          </div>

          <div className="company w-full h-auto p-6 outline-none border-2 border-gray-300 flex flex-row justify-between items-center">
            <div className="w-full h-auto flex justify-start items-start gap-2">
              <div className="radio-button mr-2">
                <input type="radio" id="select" className='w-[50px] h-auto'/>
              </div>
              <div className="free-text"><p>Free</p></div>
            </div>
            <div className="company-heading w-full h-auto flex flex-col justify-start items-start">
              <div className="heading font-bold text-xl"><h3>Company 4</h3></div>
              <div className="day"><p>4-6 business days</p></div>
            </div>
            <div className="button2"><button className="bg-black text-white px-4 py-2 rounded-lg font-semibold">Dev</button></div>
            
          </div>

          <div className="button3 mt-4">
            <button className="bg-yellow-400 text-black px-40 py-3 outline-none rounded-lg font-semibold text-[18px]">Continue to Payment</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShippingAndDelivery;
