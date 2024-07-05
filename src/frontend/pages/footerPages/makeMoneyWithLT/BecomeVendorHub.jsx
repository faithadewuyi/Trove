// src/components/BecomeVendorHub.jsx
import  { useState } from 'react';
import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/navbar/Navbar';

const BecomeVendorHub = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    businessName: '',
    description: '',
    website: '',
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
    // Handle form submission (e.g., send data to API)
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <Navbar/>
    <div className="max-w-2xl mx-auto p-4">
      <div>
        <img src="VendorHub2.jpg" alt="" />
        <div>
            <h1 className="text-3xl font-bold mb-6">Become a Vendor Hub</h1>
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
          <label className="block text-sm font-medium text-gray-900">Business Name</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border-2 border-yellow-400 rounded-xl"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border-2 border-yellow-400 rounded-xl"
            rows="3"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900">Website (optional)</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border-2 border-yellow-400 rounded-xl"
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

export default BecomeVendorHub;
