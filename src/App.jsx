// import { useState } from 'react';
import './App.css';
// pre loader
// import Preloader from './frontend/preloader/Preloader';
// header and footer
// import Navbar from './frontend/components/navbar/Navbar';
// import Footer from './frontend/components/footer/Footer';
// import SignUp from './frontend/pages/signUp/SignUp';
// import SignUpPage from './frontend/pages/signUp/SignUpPage';
// import SignInPage from './frontend/pages/signUp/SignInPage';
// import ForgotPassword from './frontend/pages/signUp/ForgotPassword';
// import SignUpSuccessful from './frontend/pages/signUp/SignUpSuccessful';
// import ResetPasswordPage from './frontend/pages/signUp/ResetPasswordPage';
// import PasswordResetSuccessful from './frontend/pages/signUp/PasswordResetSuccessful';
// import Banner from './frontend/components/banner/Banner';
import Home from './frontend/pages/home/Home';

import { Route, Routes } from 'react-router-dom';
import Account from './frontend/pages/ProfileSection/Account';
import WishList from './frontend/pages/ProfileSection/WishList';
import MenProduct from './frontend/pages/menProduct/MenProduct';
import BrandProduct from './frontend/pages/brandProduct/BrandProduct';
import MenProductDetail from './frontend/pages/menProduct/MenProductDetail';
import WomenPage from './Pages/WomenPage';
import Details from './Components/PRODUCT PAGE/Details';
import CartTab from './Components/PRODUCT PAGE/CartTab';
import SignInPage from './frontend/pages/signUp/SignInPage';
import SignUpPage from './frontend/pages/signUp/SignUpPage';
import SellWithLuxe from './frontend/pages/sell/SellWithLuxe';
import SellReg from './frontend/pages/sell/SellerRegistration';
import SellRegFeed from './frontend/pages/sell/SellRegFeed';
import BlogPage from './frontend/pages/blog/Blog';

// import ContactUs from './frontend/pages/footerPages/help/contactus/ContactUs';
import BecomeSalesRep from './frontend/pages/footerPages/makeMoneyWithLT/BecomeSalesRep';
import BecomeVendorHub from './frontend/pages/footerPages/makeMoneyWithLT/BecomeVendorHub';
import BecomeLogisticsProvider from './frontend/pages/footerPages/makeMoneyWithLT/BecomeLogisticsProvider';
import Auct from './frontend/pages/auc/Auct';
import AuctDetails from './frontend/pages/auc/AuctDetails';
// chat
import TawkTo from './frontend/components/chat/TawkTo'

function App() {
  // const [loading, setLoading] = useState(true);
  const products = [
    {
      id: 1,
      name: 'AMVCA Awards Outfit',
      description: 'Elegant evening dress perfect for any occasion.',
      image: new URL('./frontend/pages/auc/auctAssest/auction1.png', import.meta.url).href,
      startPrice: 100,
      currentBid: 120,
      numBids: 5,
      auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3,
      designer:'Veekee James', 
      category: 'jumpsuit',
      size: 'M',
      brand: 'brand1',
      style: 'style1',
      gender: 'female',
    },
    {
      id: 2,
      name: 'Luxury AMVCA Awards Outfit',
      description: 'Elegant evening dress perfect for any occasion.',
      image: new URL('./frontend/pages/auc/auctAssest/auction2.png', import.meta.url).href,
      startPrice: 100,
      currentBid: 120,
      numBids: 5,
      auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
      designer:'Valentino', 
      category: 'tuxedo',
      size: 'S',
      brand: 'brand7',
      style: 'style1',
      gender: 'male',
    },
    {
      id: 3,
      name: 'Luxury AMVCA Awards Outfit',
      description: 'Elegant evening dress perfect for any occasion.',
      image: new URL('./frontend/pages/auc/auctAssest/auction3.png', import.meta.url).href,
      startPrice: 100,
      currentBid: 120,
      numBids: 5,
      auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
      designer:'Veekee James', 
      category: 'edress',
      size: 'L',
      brand: 'brand1',
      style: 'style1',
      gender: 'female',
    },
    {
      id: 4,
      name: 'Luxury AMVCA Awards Outfit',
      description: 'Elegant evening dress perfect for any occasion.',
      image: new URL('./frontend/pages/auc/auctAssest/auction4.png', import.meta.url).href,
      startPrice: 100,
      currentBid: 120,
      numBids: 5,
      auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
      category: 'tuxedo',
      designer:'Mai Atafo', 
      size: 'M',
      brand: 'brand2',
      style: 'style1',
      gender: 'male',
    },
    {
    id: 5,
      name: 'AMVCA Awards Outfit',
      description: 'Elegant evening dress perfect for any occasion.',
      image: new URL('./frontend/pages/auc/auctAssest/auction5.png', import.meta.url).href,
      startPrice: 100,
      currentBid: 120,
      numBids: 5,
      auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3,
      designer:'Zara', 
      category: 'wdress',
      size: 'M',
      brand: 'brand6',
      style: 'style3',
      gender: 'female',
    },
    {
      id: 6,
      name: 'Luxury AMVCA Awards Outfit',
      description: 'Elegant evening dress perfect for any occasion.',
      image: new URL('./frontend/pages/auc/auctAssest/auction2.png', import.meta.url).href,
      startPrice: 100,
      currentBid: 120,
      numBids: 5,
      auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
      designer:'Mai Atafo', 
      category: 'native',
      size: 'XL',
      brand: 'brand2',
      style: 'style3',
      gender: 'male',
    },
    {
      id: 7,
      name: 'Luxury AMVCA Awards Outfit',
      description: 'Elegant evening dress perfect for any occasion.',
      image: new URL('./frontend/pages/auc/auctAssest/auction7.png', import.meta.url).href,
      startPrice: 100,
      currentBid: 120,
      numBids: 5,
      auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
      designer:'Salvatore Ferragamo', 
      category: 'shoes',
      size: 'S',
      brand: 'brand5',
      style: 'style2',
      gender: 'male',
    },
    {
      id: 8,
      name: 'Luxury AMVCA Awards Outfit',
      description: 'Elegant evening dress perfect for any occasion.',
      image: new URL('./frontend/pages/auc/auctAssest/auction8.png', import.meta.url).href,
      startPrice: 100,
      currentBid: 120,
      numBids: 5,
      auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days from now
      category: 'shoes',
      designer:'Salvatore Ferragamo', 
      size: 'L',
      brand: 'brand5',
      style: 'style3',
      gender: 'male',
    },
    {
        id: 9,
        name: 'AMVCA Awards Outfit',
        description: 'Elegant evening dress perfect for any occasion.',
        image: new URL('./frontend/pages/auc/auctAssest/auction9.png', import.meta.url).href,
        startPrice: 100,
        currentBid: 120,
        numBids: 5,
        auctionEndTime: Date.now() + 1000 * 60 * 60 * 24 * 3,
        designer:'Veekee James', 
        category: 'edress',
        size: 'M',
        brand: 'brand1',
        style: 'style1',
        gender: 'female',
      },

  ];

  return (
    <div className="bg-white h-full">
      {/*{loading ? (
        <Preloader setLoading={setLoading} />
      ) : ( */}
        {/* <div className="main-content"> */}
          {/* <Navbar /> */}
          {/* <Home /> */}
          {/* <BlogPge />
          <SellWithLuxe />
          <SellerRegistration />
          <SignUpPage />
          <SignInPage />
          <ForgotPassword />
          <SignUpSuccessful />
          <ResetPasswordPage />
          <PasswordResetSuccessful /> */}
          {/* <div className="container mx-auto mt-10">
            <h1 className="text-4xl font-bold">Welcome to E-Shop</h1>
            <p className="mt-4">Browse our categories and discover our best deals!</p>
          </div> */}
          {/* <Footer /> */}
        {/* </div>
      )} */}

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/signup" element={<SignUpPage />} /> 
        <Route path="/blog" element={<BlogPage />} /> 
        <Route path="/men" element={<MenProduct />} />
        <Route path="/men/:id" element={<MenProductDetail />} />
        <Route path="/auct" element={<Auct />} />
        <Route path="/auct/:id" element={<AuctDetails products={products} />} />
        <Route path="/brandproduct" element={<BrandProduct />} />
        {/* <Route path="/brands" element={<BrandsSection />} />   */}
        <Route path="/vendor" element={<BecomeVendorHub />} /> 
        {/* <Route path="/contactus" element={<ContactUs />} />  */}
        <Route path="/logistics" element={<BecomeLogisticsProvider />} /> 
        <Route path="/account/*" element={<Account />} />

        <Route path="/salesrep" element={<BecomeSalesRep />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/sell" element={<SellWithLuxe />} />
        <Route path="/SellReg" element={<SellReg />} />
        <Route path="/sellRegFeedback" element={<SellRegFeed />} />
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/cartpage" element={<CartTab />} />
        <Route path="/women/:slug" element={<Details />} />
      </Routes>
      <TawkTo />
     

    </div>
  );
}

export default App;
