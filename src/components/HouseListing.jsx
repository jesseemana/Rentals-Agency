import React from "react";
import { BiBath, BiBed } from "react-icons/bi";
import { MdOutlineWindow } from "react-icons/md";

export const HouseListing = ({ houseData }) => {
  return (
    <div className="grid grid-cols-3 items-center justify-center ml-[100px]">
      {/* IMPORT THE ARRAY CONTAINING ALL THE HOUSE DATA AT THE TOP AND MAP INTO A NEW CONTAINER ELEMENT */}
      {houseData?.map((house, index) => {
        return (
          <div
            key={index}
            className="w-[358px] basis-[33.3333333%] bg-[#ffffff] my-10 rounded-[27px] border"
          >
            <img src={house.Image} alt="house interior" />
            <div className="px-4 py-5">
              <h2 className="font-bold text-[23px]">{house.location}</h2>
              <div className="py-3">
                <p className="text-[#818181] font-semibold text-[18px] capitalize">
                  {house.type}
                </p>
                <h1 className="text-[25px] text-[#F4511E] font-bold">
                  {house.price}
                </h1>
              </div>
              <div className="flex justify-between padding py-3">
                <div className="flex items-center text-[18px] font-bold">
                  <BiBath />
                  {house.bed}
                </div>
                <div className="flex items-center text-[18px] font-bold">
                  <BiBed />
                  {house.bath}
                </div>
                <div className="flex items-center text-[18px] font-bold">
                  <MdOutlineWindow />
                  {house.star}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
