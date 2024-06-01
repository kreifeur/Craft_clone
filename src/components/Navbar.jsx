import React from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../../public/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <ul className="sm:flex hidden items-center justify-between   h-[20vh] text-gray-200 text-[13px] font-thin uppercase ">
        <li>Contact us</li>
        <li>Services</li>
        <img src={logo.src} className="text-white w-[70px]" />
        <li>Pricing</li>
        <li>Products</li>
      </ul>


      <ul className="flex sm:hidden items-center justify-between   h-[20vh] text-gray-200 text-[13px] font-thin uppercase ">
        <img src={logo.src} className="text-white w-[70px]" />
        <li><FiMenu className="text-4xl" /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
