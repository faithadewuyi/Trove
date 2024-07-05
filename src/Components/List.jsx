import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";


function List() {
  return (
    <div>
    <Popover>
      <Popover.Button className="relative focus:outline-none">
        <span className="material-symbols-outlined text-darkblue hover:text-primaryred">
          person
        </span>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className=" z-10 absolute right-8 mt-2">
          <div className="w-[200px] bg-white text-notactive font-normal py-[12px] px-1 font-inter text-xs flex flex-col">
            <Link
              to="/account"
              className="p-1 hover:bg-btn hover:text-white"
            >
              <i className="bx bx-xs bx-layer pr-2"></i>
              <span>Overview</span>
            </Link>
            <Link
              className="p-1 hover:bg-btn hover:text-white"
              to="/account/payment"
            >
              <i className="bx bx-xs bx-store-alt pr-2"></i>Payment
            </Link>
            <Link className="p-1 hover:bg-btn hover:text-white">
              <i className="bx bx-xs bx-message-rounded-detail pr-2"></i> Shipping Address
            </Link>
            <Link
              className="p-1 hover:bg-btn hover:text-white"
              to="/account/orders"
            >
              <i className="bx bx-xs bx-map pr-2"></i>My Orders
            </Link>
            <Link
              to="/wishlist"
              className="p-1 hover:btn hover:text-white"
            >
              <i className="bx bx-xs bx-heart pr-2"></i>WishList
            </Link>
            <Link className="p-1 hover:bg-btn hover:text-white flex flex-row gap-2">
              <i className="bx bx-xs bx-history bx-rotate-270"></i>
              <span>My Wallet</span>
            </Link>
            <Link className="p-1 hover:bg-btn hover:text-white">
              <i className="bx bx-xs bx-cog pr-2"></i>Setting
            </Link>
            <Link
              className="p-1 hover:bg-btn hover:text-white flex flex-row gap-2"
              to="/login"
            >
              <i className="bx bx-xs bx-log-out bx-flip-horizontal"></i>
              <span>Log out</span>
            </Link>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
    </div>
  )
}

export default List
