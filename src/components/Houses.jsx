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
          <button className="button">
            view all property
          </button>
        </div>
        <div className="flex justify-center">
          <HouseListing houseData={houseData} />
        </div>
        <div className="flex items-center justify-center">
          <Pagination />
        </div>
      </div>
    </>
  );
};
