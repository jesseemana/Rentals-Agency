import React from "react";
import { Navbar } from "./Navbar";

export const Hero = () => {
  return (
    <div className="bg-hero h-[794px] bg-no-repeat bg-cover bg-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <Navbar />
      <div className="padding flex items-center justify py-20">
        <h1 className="font-bold text-[#ffffff] text-[52px] capitalize">
          the most afforadble place to live in the san fransico bay area
        </h1>
        <div className="border w-[708px] h-[540px]"></div>
      </div>

      {/* <img src={image} alt="" className="w-full h-[790px]"/> */}
    </div>
  );
};
