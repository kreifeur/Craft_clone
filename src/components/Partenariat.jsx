import React from "react";
import { FaAmazonPay } from "react-icons/fa";
import entreprise1 from "../../public/entreprise1.svg";

const Partenariat = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="text-6xl font-bold">OUR PARTNERS</div>
      <div className="text-xl text-gray-400 text-center text-thin">
        Building success through strong alliances: Our dedicated partnerships
        drive collective achievements and shared milestones.
      </div>

      <div className=" grid sm:grid-cols-6 grid-cols-2 w-full gap-10 justify-center">
        <div className="flex items-center justify-center p-4 w-full border back_white">
          <img src={entreprise1.src} alt="" />
        </div>
        <div className="flex items-center justify-center p-4 w-full border back_white">
          <img src={entreprise1.src} alt="" />
        </div>
        <div className="flex items-center justify-center p-4 w-full border back_white">
          <img src={entreprise1.src} alt="" />
        </div>
        <div className="flex items-center justify-center p-4 w-full border back_white">
          <img src={entreprise1.src} alt="" />
        </div>
        <div className="flex items-center justify-center p-4 w-full border back_white">
          <img src={entreprise1.src} alt="" />
        </div>
        <div className="flex items-center justify-center p-4 w-full border back_white">
          <img src={entreprise1.src} alt="" />
        </div>
        <div className="flex items-center justify-center p-4 w-full border back_white">
          <img src={entreprise1.src} alt="" />
        </div>
        <div className="flex items-center justify-center p-4 w-full border back_white">
          <img src={entreprise1.src} alt="" />
        </div>
        <div className="flex items-center justify-center p-4 w-full border back_white">
          <img src={entreprise1.src} alt="" />
        </div>
        <div className="flex items-center justify-center p-4 w-full border back_white">
          <img src={entreprise1.src} alt="" />
        </div>
        <div className="flex items-center justify-center p-4 w-full border back_white">
          <img src={entreprise1.src} alt="" />
        </div>
        <div className="flex items-center justify-center p-4 w-full border back_white">
          <img src={entreprise1.src} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Partenariat;
