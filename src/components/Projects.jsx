import React from "react";
import image from "../../public/store.jpg";

const Projects = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="text-6xl font-bold">LEATEST PROJECTS</div>
      <div className="text-xl text-gray-400 text-center text-thin">
        Empowering Your Success: Explore the Pinnacle of Excellence through Our
        Diverse Range of Projects.
      </div>

      <div className=" flex flex-col w-full gap-10">
        <div className="w-[100%] back_white flex flex-col gap-4 p-6">
          <div className="flex w-full justify-between  px-6 ">
            <div>KREIFEUR STORE</div>
            <div>2023</div>
          </div>
          <img className="w-full rounded-xl" src={image.src} alt="" />
        </div>
        <div className="w-[100%] back_white flex flex-col gap-4 p-6">
          <div className="flex w-full justify-between  px-6 ">
            <div>KREIFEUR STORE</div>
            <div>2023</div>
          </div>
          <img className="w-full rounded-xl" src={image.src} alt="" />
        </div>
        <div className="w-[100%] back_white flex flex-col gap-4 p-6">
          <div className="flex w-full justify-between  px-6 ">
            <div>KREIFEUR STORE</div>
            <div>2023</div>
          </div>
          <img className="w-full rounded-xl" src={image.src} alt="" />
        </div>
        <div className="w-[100%] h-[50vh] flex flex-col gap-[10vh] items-center justify-center p-4 back_white text-2xl">
            <div className="text-3xl">
                +
            </div>
          <div>Browse all work</div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
