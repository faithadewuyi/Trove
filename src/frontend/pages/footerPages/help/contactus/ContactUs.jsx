import React, { useState } from "react";
import ContactImage from './images/ContactImage.png';
// import TawkTo from "../components/TawkTo";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission 
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');

    
  };

  return (
    <div>
      <div
        className="flex flex-col justify-center items-center px-40 py-64 h-auto bg-white bg-cover bg-center"
        style={{ backgroundImage: `url(${ContactImage})` }}
      >
        <h1 className="text-white text-5xl w-3/5 text-[48px] font-mon font-extrabold text-center">
          GET IN TOUCH WITH US!
        </h1>
        <p className="text-white text-center w-2/5 font-mon text-[18px] font-semibold text-wrap pt-4">
          Serving you is our duty! Feel free to reach us with any concerns
        </p>
      </div>

      {/* CONTACT SECTION */}
      <form onSubmit={handleSubmit} className="space-y-4 ml-6 font-mon">
        <div>
          <label className="block text-sm font-medium text-gray-900 pt-6">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-2/5 p-2 border-2 border-yellow-400 rounded-xl"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-2/5 p-2 border-2 border-yellow-400 rounded-xl"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-2/5 p-2 border-2 border-yellow-400 rounded-xl"
            rows="3"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-2/5 py-2 px-4 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-gray-300"
          >
            Send a quick message
          </button>
        </div>
      </form>

      {/* CHAT BOT */}
        <div>
        <TawkTo />
      </div>
      

      {/* CALL US */}
        <div className="w-full h-auto bg-white border font-mon border-yellow-400 shadow-xl mt-20 p-8 flex flex-row justify-between items-start">
            <div className="w-1/5 h-auto bg-white shadow-xl border border-yellow-400 py-6 px-8 flex flex-col justify-center items-center gap-x-1">
                <div className="w-[50px] h-[50px]">
                    <img src="src\assets\CallUs.png" alt="" />
                </div>
                <div className="text-center text-wrap text-sm">
                    <p>Want to clear your doubt on phone? call us at +(800)123-4567</p>
                </div>
            </div>

            {/* PARTNER */}
            <div className="w-1/4 h-auto bg-white shadow-xl border border-yellow-400 py-4 px-8 flex flex-col justify-center items-center gap-x-1">
                <div className="w-[50px] h-[50px]">
                    <img src="src\contactus\images\Partner.png" alt="" />
                </div>
                <div className="text-center text-wrap text-sm">
                    <p>Want partnership and Collaborations? Send us an email on <a href="">partnerships@theluxetrove.com</a></p>
                </div>
            </div>

            {/* FEEDBACK */}
            <div className="w-1/5 h-auto bg-white shadow-xl border border-yellow-400 pt-5 pb-14 px-8 flex flex-col justify-center items-center gap-x-1">
                <div className="w-[50px] h-[50px]">
                    <img src="src\contactus\images\Feedback.png" alt="" />
                </div>
                <div className="text-center text-wrap text-sm">
                    <p>Feedback and Suggestions</p>
                </div>
            </div>

            {/* VISIT US */}
            <div className="w-1/5 h-auto bg-white shadow-xl border border-yellow-400 pt-7 pb-6 px-8 flex flex-col justify-center items-center gap-x-1">
                <div className="w-[50px] h-[50px]">
                    <img src="src\contactus\images\VisitUs.png" alt=""/>
                </div>
                <div className="text-center text-wrap text-sm">
                    <p>Visit our office at LuxeTrove123, Luxury Lane, Suite 456</p>
                </div>
            </div>
        </div>

        {/* CONTACT AREA */}
        <div className="w-full h-auto flex flex-col justify-start items-center gap-8">

            <h1 className="font-mon font-bold mt-16 text-xl">Connect wit us on our socials</h1>

            <div className="w-full h-auto flex flex-row justify-center items-center gap-8">
                <div>
                    <img src="src\contactus\images\Capa_1.svg" alt=""></img>
                </div>

                <div>
                    <img src="src\contactus\images\Facebook.png" alt=""></img>
                </div>

                <div>
                    <img src="src\contactus\images\Instagram.png" alt=""></img>
                </div>
            </div>
        </div>
      
    </div>
  );
};

const ContactUs = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default ContactUs;
