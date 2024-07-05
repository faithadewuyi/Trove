import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import SellerRegBanner from './sellAssets/SellRegBanner1.png';
import id1 from './sellAssets/id1.png';
import id2 from './sellAssets/id2.png';

const SellerRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    country: '',
    city: '',
    zipCode: '',
    nameOnId: '',
    idNumber: '',
    scannedDocuments: null,
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.businessName) newErrors.businessName = 'Business Name is required';
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.zipCode) newErrors.zipCode = 'Zip/Postal Code is required';
    if (!formData.nameOnId) newErrors.nameOnId = 'Name On ID is required';
    if (!formData.idNumber) newErrors.idNumber = 'Identification Number is required';
    if (!formData.scannedDocuments) newErrors.scannedDocuments = 'Scanned Document/Images are required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Submit form
      console.log('Form submitted successfully', formData);
      navigate('/sellRegFeedback'); // Navigate to feedback page
    }
  };

  return (
    <div className="bg-gray-100 ">
      <Navbar />
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-96 flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${SellerRegBanner})` }}
      >
        <h1 className="text-6xl font-extrabold bg-zinc-800 opacity-80 px-2">Register As A Seller</h1>
      </section>

      {/* Sign Up Form Section */}
      <section className="py-12 px-6 md:px-0">
        <div className="container mx-auto w-full md:w-4/5">
          <h2 className="text-3xl font-bold mb-8 text-center">SIGN UP FORM</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Business Name*</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-btn focus:border-btn focus:z-10 focus:ring-opacity-50"
              />
              {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
            </div>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <label className="block text-gray-700">First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-btn focus:border-btn focus:z-10 focus:ring-opacity-50"
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div className="md:w-1/2">
                <label className="block text-gray-700">Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-btn focus:border-btn focus:z-10 focus:ring-opacity-50"
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <label className="block text-gray-700">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-btn focus:border-btn focus:z-10 focus:ring-opacity-50"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div className="md:w-1/2">
                <label className="block text-gray-700">Phone Number*</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-btn focus:border-btn focus:z-10 focus:ring-opacity-50"
                />
                {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Address*</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-btn focus:border-btn focus:z-10 focus:ring-opacity-50"
              />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>
            <div className="md:flex md:space-x-4">
              <div className="md:w-1/2">
                <label className="block text-gray-700">Country*</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-btn focus:border-btn focus:z-10 focus:ring-opacity-50"
                />
                {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
              </div>
              <div className="md:w-1/2">
                <label className="block text-gray-700">City*</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring focus:outline-none focus:ring-btn focus:border-btn focus:z-10 focus:ring-opacity-50"
                />
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Zip/Postal Code*</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-btn focus:border-btn focus:z-10 focus:ring-opacity-50"
              />
              {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
            </div>
            <div>
              <button
                type="button"
                onClick={handleSubmit}
                className="w-40 py-2 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
              >
                Add New Field
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Authentication Details Section */}
      <section className="py-12 px-6 md:px-0 mb-20">
        <div className="container mx-auto w-full md:w-4/5">
          <h2 className="text-3xl font-bold mb-8 text-center">Authentication Details</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Name On ID*</label>
              <input
                type="text"
                name="nameOnId"
                value={formData.nameOnId}
                onChange={handleChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-btn focus:border-btn focus:z-10 focus:ring-opacity-50"
              />
              {errors.nameOnId && <p className="text-red-500 text-xs mt-1">{errors.nameOnId}</p>}
            </div>
            <div>
              <label className="block text-gray-700">Identification Number*</label>
              <input
                type="text"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-btn focus:border-btn focus:z-10 focus:ring-opacity-50"
              />
              {errors.idNumber && <p className="text-red-500 text-xs mt-1">{errors.idNumber}</p>}
            </div>
            <h4>Identitiy card picture sample</h4>
            <div className="flex space-x-4">
              <img
                src={id1}
                alt="Placeholder"
                className="w-1/2 h-48 object-cover"
              />
              <img
                src={id2}
                alt="Placeholder"
                className="w-1/2 h-48 object-cover"
              />
            </div>
            <div>
              <label className="block text-gray-700">Upload Scanned Document/Images Here*</label>
              <input
                type="file"
                name="scannedDocuments"
                onChange={handleChange}
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-btn focus:border-btn focus:z-10 focus:ring-opacity-50"
              />
              {errors.scannedDocuments && <p className="text-red-500 text-xs mt-1">{errors.scannedDocuments}</p>}
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-gray-700">
                I agree with Luxe Trove's{' '}
                <a href="#" className="text-blue-500 underline">
                  policy
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-500 underline">
                  terms and conditions
                </a>
                .
              </label>
            </div>
            {errors.agreeToTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-btn text-black font-semibold rounded-lg shadow-md hover:bg-btnHover"
              >
                Submit Sellers Registration
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SellerRegistration;
