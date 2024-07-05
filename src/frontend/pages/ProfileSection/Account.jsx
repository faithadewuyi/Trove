
import SideBar from "../../../Components/SideBar";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Overview from "./Overview";
import Payment from "./Payment";
import Shipping from "./Shipping";
import Order from "./Order";
import GiftCards from "./GiftCards";
import Wallet from "./Wallet";
import HelpCenter from "./HelpCenter";
import Settings from "./Settings";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
// import WishList from "./WishList";

function Account() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="flex justify-between w-5/6 mx-auto mt-40">
        <div className="hidden lg:flex">
          <Link to="/" className="px-2 text-sm">
            Home
          </Link>
          /
          <Link to="/account/*" className="px-2 text-terblue">
            My Account
          </Link>
        </div>
        <h2>
          Welcome <span className="text-btn font-bold">Sarah</span>
        </h2>
      </div>

      <div className="flex flex-row w-screen lg:w-5/6 mx-auto my-4 h-full">
        <div
          className={`lg:block basis-full lg:basis-1/4 ${
            isSidebarVisible ? "" : "hidden"
          }`}
        >
          <SideBar onLinkClick={toggleSidebar} />
          <Outlet />
        </div>
        <div
          className={`lg:block basis-full lg:basis-3/4 ${
            isSidebarVisible ? "hidden" : "block"
          }`}
        >
          <div className="lg:hidden w-5/6 mx-auto">
            <Link
              to="/account"
              onClick={() => setSidebarVisible(true)}
              className={`flex gap-3 ${isSidebarVisible ? "" : "block"}`}
            >
              <i className="bx bx-sm bx-chevron-left"></i>
              <h3 className="text-primaryblue text-sm font-semibold">Back</h3>
            </Link>
          </div>

          <Routes>
            <Route path="overview" element={<Overview/>}/>
            <Route path="payment" element={<Payment/>}/>
            <Route path="shipping" element={<Shipping/>}/>
            <Route path="orders" element={<Order/>}/>
            <Route path="giftcards" element={<GiftCards/>}/>
            <Route path="wallet" element={<Wallet/>}/>
            <Route path="helpcenter" element={<HelpCenter/>}/>
            <Route path="settings" element={<Settings/>}/>
            {/* <Route path="wishlist" element={<WishList/>}/> */}

            <Route index element={<Overview/>}/>

            

           
          </Routes>
        </div>
      </div>

      <Footer /> 
    </div>
  );
}

export default Account;