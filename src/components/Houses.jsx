import React from "react";
import { houseData } from "../houseData";
import { HouseListing } from "./HouseListing";
import { Pagination } from "./Pagination";

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
        <div className="flex items-center justify-center">
          <Pagination />
        </div>
      </div>
    </>
  );
};
