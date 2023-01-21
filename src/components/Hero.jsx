import React from "react";
import { Navbar } from "./Navbar";

export const Hero = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-center from-[#000000] to-[#000000  0.01%]">
      <Navbar />
      <div className="padding flex items-center justify py-20">
        <h1 className="font-bold w-[50%] text-[#ffffff] text-[52px] capitalize">
          the most afforadble place to live in the san fransico bay area.
        </h1>
        <div className="w-[50%] h-[540px]"></div>
      </div>

      {/* <img src={image} alt="" className="w-full h-[790px]"/> */}
    </div>
  );
};
