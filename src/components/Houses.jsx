import React from "react";
import { houseData } from "../houseData";
import { BiBath, BiBed } from "react-icons/bi";
import { MdOutlineWindow } from "react-icons/md";
import { HouseListing } from "./HouseListing";

export const Houses = () => {
  return (
    <>
      <div className="padding bg-[#F5F5F5] py-20">
        <div className="flex justify-between items-center">
          <h1 className="capitalize font-bold text-[36px] text-[#18191F] ">
            <span className="span-text">list</span> of properties
          </h1>
          <button className="bg-orange-500 rounded-md p-3 capitalize text-white">
            view all property
          </button>
        </div>
      <HouseListing houseData={houseData} />
      </div>
    </>
  );
};
