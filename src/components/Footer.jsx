import React from "react";
import logo from "../../public/white.svg";
const Footer = () => {
  return (
    <div className="border-t py-[6vh] flex justify-between min-h-[60vh] w-full sm:flex-row flex-col-reverse gap-10">
      <div className="flex flex-col justify-between sm:w-[25%]  w-[100%] gap-10">
        <img src={logo.src} className="text-white w-[150px]" />

        <div>© We Craft, All rights resereved.</div>
      </div>

      <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 w-[60%] ">
        <ul className="flex flex-col gap-4 text-left">
          <li>About us</li>
          <li>Home</li>
          <li>Our Story</li>
          <li>Projects</li>
        </ul>
        <ul className="flex flex-col gap-4 text-left">
          <li>About us</li>
          <li>Home</li>
          <li>Our Story</li>
          <li>Projects</li>
        </ul>

        <ul className="flex flex-col gap-4 text-left">
          <li>About us</li>
          <li>Home</li>
          <li>Our Story</li>
          <li>Projects</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
