
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import FashionList from "./FashionList";

function CategoryList() {
  return (
    <div>
      <Popover>
        <Popover.Button className="bg-[#F6F6F6] text-black hover:bg-secblue hover:text-white focus:bg-secblue focus:text-white px-3 py-[14px] flex gap-1 focus:outline-none">
          <span>All Category</span>
          <i className="bx bx-sm bx-chevron-down self-center"></i>
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
          <Popover.Panel className=" z-10 absolute left-8 mt-2">
            <div className="w-[220px] bg-white py-[12px] px-1 font-poppins text-notactive text-sm flex flex-col">
              <Link className="p-1 hover:bg-lightgray">DRESSES</Link>
              <Link className="p-1 hover:bg-lightgray">TOPS</Link>
              <FashionList />
              <Link className="p-1 hover:bg-lightgray">SKIRTS</Link>
              <Link className="p-1 hover:bg-lightgray">PANTS</Link>
              <Link className="p-1 hover:bg-lightgray">FOOTWEARS</Link>
              <Link className="p-1 hover:bg-lightgray">BAGS</Link>
              
             
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

export default CategoryList;