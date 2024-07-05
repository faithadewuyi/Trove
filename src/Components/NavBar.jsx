import { Link } from "react-router-dom";
import Menu from "./Menu";
// import List from "./List";

function NavBar(onLinkClick) {

  const Navs = [
    {title: "HOME", path: "/"},
    {title: "MEN",  path: ""},
    {
      title: "WOMEN",  path: "/women",
      
    },
    {title: "BLOG", path: "/", },
    {title: "BRAND", path: "", },
    {title: "SELL ON LUXE", path: "/vendor", },
  ]
  return (
    <div className="sticky top-0 w-screen z-50">
       <nav className="  py-4 justify-center">

       <div>
        <Menu/>
       </div>

        <div className="w-11/12 flex items-center mx-auto justify-between">
          <img src="../logo.png" className="w-16 h-16" alt="Luxe Trove Logo" />
                     
          <div className="hidden md:flex flex-row space-x-8 text-black font-poppins text-xs font-bold">
          <ul className="pt-2 flex">
        {Navs.map((menu, index) =>(
           <li  key={index}>
          <Link
          to={menu.path}
          onClick={onLinkClick}
           className="text-black text-sm flex items-center gap-x-4 cursor-pointer hover:text-btn p-3 ">
            
            <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}> 
              {menu.title}
              </span>
          </Link>
          </li>
        
        ))}
        <Link to="/login" className="px-4 py-3 hover:text-white rounded-md bg-btn text-black text-base focus:outline-none">
                LOGIN
              </Link>
      </ul>
          </div>
          <div className="flex flex-row basis-5/12 space-x-1 lg:space-x-3 justify-end text-gray font-poppins text-xs font-light">
            <div className="relative hidden lg:block">
          
            
                <span className="material-symbols-outlined">search</span>
              
            </div>
            <span className="material-symbols-outlined text-darkblue hover:text-primaryred lg:hidden">
              search
            </span>
            <Link to="/wishlist" className="hidden lg:block">
              <span className="material-symbols-outlined text-darkblue hover:text-primaryred">
                favorite
              </span>
            </Link>
            <Link to ="/account">
            <span className="material-symbols-outlined text-darkblue hover:text-primaryred">
          person
        </span>
           </Link>
          {/* <List/> */}
            <Link to="/cart">
              <span className="material-symbols-outlined text-darkblue hover:text-primaryred">
                shopping_cart
              </span>
            </Link>
            
                       
            
          </div>
        </div>
      </nav> 


    </div>
  )
}

export default NavBar
 {/* <Link to="/" className="hover:text-primaryred pt-0.5">
              HOME
            </Link>

            <Link to="/women" className="hover:text-primaryred pt-0.5">
              WOMEN
            </Link>
            <Link to="/men" className="hover:text-primaryred pt-0.5">
              MEN
            </Link>
            <Link to="/brands" className="hover:text-primaryred pt-0.5">
              BRANDS
            </Link>
            <Link to="/blo" className="hover:text-primaryred pt-0.5">
              NewsFeed
            </Link> */}