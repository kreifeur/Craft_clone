import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="text-6xl font-bold">SERVICES</div>
      <div className="text-xl text-gray-400 text-center text-thin">
        Empowering Your Success: Explore the Pinnacle of Excellence through Our
        Diverse Range of Services.
      </div>

      <div className=" flex w-full gap-10 flex-col sm:flex-row">
        <div className="sm:w-[60%] w-[100%] font-bold p-4 back_white hidden sm:flex">service</div>

        <div className="sm:w-[40%] w-[100%] flex flex-col gap-6">
          <div className="p-4 w-full border font-bold back_white h-[25vh]">
            UI / UX DESIGN
          </div>
          <div className="p-4 w-full border font-bold back_white h-[25vh]">
            WEB DEVELOPEMENT
          </div>
          <div className="p-4 w-full border font-bold back_white h-[25vh]">
            DATA ANALYSIS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
