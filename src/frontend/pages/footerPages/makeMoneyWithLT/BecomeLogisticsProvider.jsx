import  { useState } from 'react';
import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/navbar/Navbar';

const BecomeLogisticsProvider = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    company: '',
    experience: '',
    interest: '',
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
    
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <Navbar/>
    <div className="max-w-2xl mx-auto font-mon p-4 mt-40">
      <div>
        <img src='Logistics.jpeg' alt=''></img>
        <div>
            <h1 className="text-3xl font-bold mb-6">Become a Logistics Provider</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-900">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border-2 border-yellow-400 rounded-xl"
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
            className="mt-1 block w-full p-2 border-2 border-yellow-400 rounded-xl"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border-2 border-yellow-400 rounded-xl"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border-2 border-yellow-400 rounded-xl"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border-2 border-yellow-400 rounded-xl"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">Experience</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border-2 border-yellow-400 rounded-xl"
            rows="3"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">Area of Interest</label>
          <input
            type="text"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border-2 border-yellow-400 rounded-xl"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-gray-300"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default BecomeLogisticsProvider;
